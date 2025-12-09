<?php

namespace App\Services;

use App\Models\ApiSetting;
use OpenAI;

class ChatGPTService
{
    protected $client;
    protected $model;
    protected $maxTokens;

    public function __construct()
    {
        $apiKey = ApiSetting::get('openai_api_key');
        $this->model = ApiSetting::get('openai_model', 'gpt-4');
        $this->maxTokens = (int) ApiSetting::get('openai_max_tokens', 2000);

        if ($apiKey) {
            $this->client = OpenAI::client($apiKey);
        }
    }

    /**
     * Send a chat message
     */
    public function chat(array $messages, ?int $userId = null): array
    {
        if (!$this->client) {
            throw new \Exception('OpenAI API key not configured');
        }

        try {
            $response = $this->client->chat()->create([
                'model' => $this->model,
                'messages' => $messages,
                'max_tokens' => $this->maxTokens,
                'temperature' => 0.7,
            ]);

            $message = $response->choices[0]->message->content;
            $tokensUsed = $response->usage->totalTokens;

            // Track usage if user ID provided
            if ($userId) {
                $this->trackUsage($userId, $tokensUsed);
            }

            return [
                'message' => $message,
                'tokens_used' => $tokensUsed,
                'model' => $this->model,
            ];
        } catch (\Exception $e) {
            throw new \Exception('ChatGPT error: ' . $e->getMessage());
        }
    }

    /**
     * Simple question-answer
     */
    public function ask(string $question, ?int $userId = null): string
    {
        $messages = [
            ['role' => 'system', 'content' => 'You are a helpful trading assistant for LongTrade Academy.'],
            ['role' => 'user', 'content' => $question],
        ];

        $response = $this->chat($messages, $userId);

        return $response['message'];
    }

    /**
     * Continue conversation
     */
    public function continueConversation(array $conversationHistory, string $newMessage, ?int $userId = null): array
    {
        $messages = $conversationHistory;
        $messages[] = ['role' => 'user', 'content' => $newMessage];

        $response = $this->chat($messages, $userId);

        // Add assistant response to history
        $messages[] = ['role' => 'assistant', 'content' => $response['message']];

        return [
            'response' => $response['message'],
            'conversation_history' => $messages,
            'tokens_used' => $response['tokens_used'],
        ];
    }

    /**
     * Generate trading strategy analysis
     */
    public function analyzeTradingStrategy(string $strategy, ?int $userId = null): string
    {
        $prompt = "As a professional trading analyst, please analyze the following trading strategy and provide insights:\n\n{$strategy}";

        return $this->ask($prompt, $userId);
    }

    /**
     * Generate course content suggestions
     */
    public function suggestCourseContent(string $topic, ?int $userId = null): string
    {
        $prompt = "Suggest a comprehensive course outline for the topic: {$topic}. Include modules, lessons, and key learning objectives.";

        return $this->ask($prompt, $userId);
    }

    /**
     * Track API usage
     */
    private function trackUsage(int $userId, int $tokensUsed): void
    {
        // You can implement usage tracking here
        // For example, update user's monthly token usage
        // Or log to analytics
    }

    /**
     * Check if service is available
     */
    public function isAvailable(): bool
    {
        return $this->client !== null;
    }

    /**
     * Get current configuration
     */
    public function getConfig(): array
    {
        return [
            'model' => $this->model,
            'max_tokens' => $this->maxTokens,
            'available' => $this->isAvailable(),
        ];
    }

    /**
     * Estimate tokens for text
     */
    public function estimateTokens(string $text): int
    {
        // Rough estimation: 1 token ≈ 4 characters
        return (int) ceil(strlen($text) / 4);
    }

    /**
     * Check if user has remaining quota
     */
    public function checkQuota(int $userId, int $estimatedTokens): bool
    {
        // Implement quota checking based on user's subscription plan
        // For now, return true
        return true;
    }
}
