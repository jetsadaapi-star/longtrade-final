// Marketing Tracking Utility

import { MarketingEvent } from '@/data/types';

class MarketingTracker {
    private sessionId: string;
    private apiUrl: string;

    constructor() {
        this.sessionId = this.getOrCreateSessionId();
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/v1\/?$/, '') || '';
        this.apiUrl = baseUrl;
    }

    private getOrCreateSessionId(): string {
        let sessionId = sessionStorage.getItem('marketing_session_id');

        if (!sessionId) {
            sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
            sessionStorage.setItem('marketing_session_id', sessionId);
        }

        return sessionId;
    }

    private getDeviceType(): string {
        if (typeof window === 'undefined') return 'unknown';
        return /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop';
    }

    private getBrowser(): string {
        if (typeof window === 'undefined') return 'unknown';
        const ua = navigator.userAgent;

        if (ua.includes('Chrome')) return 'Chrome';
        if (ua.includes('Firefox')) return 'Firefox';
        if (ua.includes('Safari')) return 'Safari';
        if (ua.includes('Edge')) return 'Edge';

        return 'Other';
    }

    /**
     * Track a marketing event
     */
    async track(event: Omit<MarketingEvent, 'session_id' | 'device_type' | 'browser'>): Promise<void> {
        try {
            const fullEvent: MarketingEvent = {
                ...event,
                session_id: this.sessionId,
                page_url: window.location.pathname,
                referrer: document.referrer,
                device_type: this.getDeviceType(),
                browser: this.getBrowser(),
            };

            await fetch(`${this.apiUrl}/api/v1/marketing/track`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fullEvent),
            });
        } catch (error) {
            console.error('Error tracking marketing event:', error);
        }
    }

    /**
     * Track promotion view
     */
    trackPromotionView(promotionId: number, eventData?: Record<string, any>): void {
        this.track({
            campaign_type: 'promotion',
            campaign_id: promotionId,
            event_type: 'view',
            event_data: eventData,
        });
    }

    /**
     * Track promotion click
     */
    trackPromotionClick(promotionId: number, eventData?: Record<string, any>): void {
        this.track({
            campaign_type: 'promotion',
            campaign_id: promotionId,
            event_type: 'click',
            event_data: eventData,
        });
    }

    /**
     * Track promotion conversion
     */
    trackPromotionConversion(promotionId: number, eventData?: Record<string, any>): void {
        this.track({
            campaign_type: 'promotion',
            campaign_id: promotionId,
            event_type: 'conversion',
            event_data: eventData,
        });
    }

    /**
     * Track popup view
     */
    trackPopupView(popupId: number, eventData?: Record<string, any>): void {
        this.track({
            campaign_type: 'popup',
            campaign_id: popupId,
            event_type: 'view',
            event_data: eventData,
        });
    }

    /**
     * Track popup click
     */
    trackPopupClick(popupId: number, eventData?: Record<string, any>): void {
        this.track({
            campaign_type: 'popup',
            campaign_id: popupId,
            event_type: 'click',
            event_data: eventData,
        });
    }

    /**
     * Track coupon usage
     */
    trackCouponUsage(couponId: number, eventData?: Record<string, any>): void {
        this.track({
            campaign_type: 'coupon',
            campaign_id: couponId,
            event_type: 'conversion',
            event_data: eventData,
        });
    }

    /**
     * Track share event
     */
    trackShare(campaignType: MarketingEvent['campaign_type'], campaignId: number, platform: string): void {
        this.track({
            campaign_type: campaignType,
            campaign_id: campaignId,
            event_type: 'share',
            event_data: { platform },
        });
    }
}

// Export singleton instance
export const marketingTracker = new MarketingTracker();

// Export class for custom instances
export default MarketingTracker;
