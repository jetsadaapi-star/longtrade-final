<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ChatGPTService;
use App\Services\SubscriptionService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ChatGPTController extends Controller
{
    protected ChatGPTService $chatGPTService;
    protected SubscriptionService $subscriptionService;

    public function __construct(
        ChatGPTService $chatGPTService,
        SubscriptionService $subscriptionService
    ) {
        $this->chatGPTService = $chatGPTService;
        $this->subscriptionService = $subscriptionService;
    }

    /**
     * Send a chat message
     */
    public function chat(Request $request): JsonResponse
    {
        $request->validate([
            'messages' => 'required|array',
            'messages.*.role' => 'required|in:system,user,assistant',
            'messages.*.content' => 'required|string',
        ]);

        $user = $request->user();

        // Check subscription access
        if (!$this->subscriptionService->canAccess($user, 'ai_chat')) {
            return response()->json([
                'success' => false,
                'message' => 'AI chat access not available in your plan',
            ], 403);
        }

        try {
            $response = $this->chatGPTService->chat($request->messages, $user->id);

            // Track usage
            $this->subscriptionService->trackUsage($user, 'ai_chat', 1);

            return response()->json([
                'success' => true,
                'data' => $response,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Simple question-answer
     */
    public function ask(Request $request): JsonResponse
    {
        $request->validate([
            'question' => 'required|string|max:1000',
        ]);

        $user = $request->user();

        // Check subscription access
        if (!$this->subscriptionService->canAccess($user, 'ai_chat')) {
            return response()->json([
                'success' => false,
                'message' => 'AI chat access not available in your plan',
            ], 403);
        }

        try {
            $answer = $this->chatGPTService->ask($request->question, $user->id);

            // Track usage
            $this->subscriptionService->trackUsage($user, 'ai_chat', 1);

            return response()->json([
                'success' => true,
                'data' => [
                    'question' => $request->question,
                    'answer' => $answer,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Analyze trading strategy
     */
    public function analyzeStrategy(Request $request): JsonResponse
    {
        $request->validate([
            'strategy' => 'required|string|max:2000',
        ]);

        $user = $request->user();

        // Check subscription access
        if (!$this->subscriptionService->canAccess($user, 'ai_chat')) {
            return response()->json([
                'success' => false,
                'message' => 'AI chat access not available in your plan',
            ], 403);
        }

        try {
            $analysis = $this->chatGPTService->analyzeTradingStrategy($request->strategy, $user->id);

            // Track usage
            $this->subscriptionService->trackUsage($user, 'ai_chat', 1);

            return response()->json([
                'success' => true,
                'data' => [
                    'strategy' => $request->strategy,
                    'analysis' => $analysis,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Get AI service status
     */
    public function status(Request $request): JsonResponse
    {
        $user = $request->user();
        $config = $this->chatGPTService->getConfig();

        $subscription = $user->subscription;
        $usage = $subscription ? $subscription->getUsage('ai_messages_this_month', 0) : 0;
        $limit = $subscription?->plan->ai_messages_per_month;

        return response()->json([
            'success' => true,
            'data' => [
                'available' => $config['available'],
                'model' => $config['model'],
                'has_access' => $subscription && $subscription->plan->ai_chat_access,
                'usage' => $usage,
                'limit' => $limit,
                'remaining' => $limit ? max(0, $limit - $usage) : null,
            ],
        ]);
    }
}
