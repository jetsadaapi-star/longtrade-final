<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Popup;
use App\Models\MarketingAnalytics;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PopupController extends Controller
{
    /**
     * Get active popups for current page
     */
    public function active(Request $request): JsonResponse
    {
        $request->validate([
            'page_url' => 'nullable|string',
            'is_guest' => 'nullable|boolean',
        ]);

        $pageUrl = $request->get('page_url');
        $isGuest = $request->get('is_guest', true);

        $popups = Popup::available()->get()->filter(function ($popup) use ($pageUrl, $isGuest) {
            return $popup->shouldDisplay($pageUrl, $isGuest);
        });

        return response()->json([
            'success' => true,
            'data' => $popups->values(),
        ]);
    }

    /**
     * Track popup event
     */
    public function track(Request $request, int $id): JsonResponse
    {
        $request->validate([
            'event_type' => 'required|in:view,click,conversion',
            'session_id' => 'nullable|string',
            'page_url' => 'nullable|string',
            'referrer' => 'nullable|string',
            'device_type' => 'nullable|string',
            'browser' => 'nullable|string',
        ]);

        $popup = Popup::find($id);

        if (!$popup) {
            return response()->json([
                'success' => false,
                'message' => 'Popup not found',
            ], 404);
        }

        // Record event in popup
        switch ($request->event_type) {
            case 'view':
                $popup->recordImpression();
                break;
            case 'click':
                $popup->recordClick();
                break;
            case 'conversion':
                $popup->recordConversion();
                break;
        }

        // Track in analytics
        MarketingAnalytics::track(
            campaignType: 'popup',
            campaignId: $id,
            eventType: $request->event_type,
            userId: auth()->id(),
            sessionId: $request->session_id,
            pageUrl: $request->page_url,
            referrer: $request->referrer,
            deviceType: $request->device_type,
            browser: $request->browser
        );

        return response()->json([
            'success' => true,
            'message' => 'Event tracked successfully',
        ]);
    }

    /**
     * Get popup statistics
     */
    public function stats(int $id): JsonResponse
    {
        $popup = Popup::find($id);

        if (!$popup) {
            return response()->json([
                'success' => false,
                'message' => 'Popup not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'impressions' => $popup->impressions,
                'clicks' => $popup->clicks,
                'conversions' => $popup->conversions,
                'click_through_rate' => $popup->getClickThroughRate(),
                'conversion_rate' => $popup->getConversionRate(),
            ],
        ]);
    }
}
