<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MarketingAnalytics;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class MarketingAnalyticsController extends Controller
{
    /**
     * Track marketing event
     */
    public function track(Request $request): JsonResponse
    {
        $request->validate([
            'campaign_type' => 'required|in:promotion,coupon,popup,sms,email',
            'campaign_id' => 'required|integer',
            'event_type' => 'required|in:view,click,conversion,share',
            'session_id' => 'nullable|string',
            'event_data' => 'nullable|array',
            'page_url' => 'nullable|string',
            'referrer' => 'nullable|string',
            'device_type' => 'nullable|string',
            'browser' => 'nullable|string',
        ]);

        MarketingAnalytics::track(
            campaignType: $request->campaign_type,
            campaignId: $request->campaign_id,
            eventType: $request->event_type,
            userId: auth()->id(),
            sessionId: $request->session_id,
            eventData: $request->event_data ?? [],
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
     * Get campaign statistics
     */
    public function stats(Request $request): JsonResponse
    {
        $request->validate([
            'campaign_type' => 'required|in:promotion,coupon,popup,sms,email',
            'campaign_id' => 'required|integer',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
        ]);

        $query = MarketingAnalytics::byCampaign(
            $request->campaign_type,
            $request->campaign_id
        );

        if ($request->start_date && $request->end_date) {
            $query->dateRange($request->start_date, $request->end_date);
        }

        $stats = MarketingAnalytics::getCampaignStats(
            $request->campaign_type,
            $request->campaign_id
        );

        return response()->json([
            'success' => true,
            'data' => $stats,
        ]);
    }

    /**
     * Get overall marketing statistics
     */
    public function overall(Request $request): JsonResponse
    {
        $request->validate([
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
        ]);

        $query = MarketingAnalytics::query();

        if ($request->start_date && $request->end_date) {
            $query->dateRange($request->start_date, $request->end_date);
        }

        $analytics = $query->get();

        $stats = [
            'total_events' => $analytics->count(),
            'by_campaign_type' => $analytics->groupBy('campaign_type')->map->count(),
            'by_event_type' => $analytics->groupBy('event_type')->map->count(),
            'unique_users' => $analytics->whereNotNull('user_id')->pluck('user_id')->unique()->count(),
            'unique_sessions' => $analytics->whereNotNull('session_id')->pluck('session_id')->unique()->count(),
        ];

        return response()->json([
            'success' => true,
            'data' => $stats,
        ]);
    }
}
