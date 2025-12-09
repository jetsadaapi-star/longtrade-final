'use client';

import { useEffect, useState } from 'react';
import { Popup as PopupType } from '@/data/types';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function PopupManager() {
    const [popups, setPopups] = useState<PopupType[]>([]);
    const [activePopup, setActivePopup] = useState<PopupType | null>(null);
    const [sessionId] = useState(() => Math.random().toString(36).substring(7));

    useEffect(() => {
        fetchActivePopups();
    }, []);

    useEffect(() => {
        if (popups.length > 0) {
            handlePopupTriggers();
        }
    }, [popups]);

    const fetchActivePopups = async () => {
        try {
            const isGuest = !localStorage.getItem('auth_token') ? '1' : '0';
            const pageUrl = window.location.pathname;
            const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/v1\/?$/, '') || '';

            const response = await fetch(
                `${baseUrl}/api/v1/popups/active?page_url=${encodeURIComponent(pageUrl)}&is_guest=${isGuest}`,
                {
                    headers: {
                        'Accept': 'application/json',
                    }
                }
            );
            const data = await response.json();

            if (data.success) {
                setPopups(data.data);
            }
        } catch (error) {
            console.error('Error fetching popups:', error);
        }
    };

    const handlePopupTriggers = () => {
        popups.forEach((popup) => {
            if (shouldShowPopup(popup)) {
                switch (popup.trigger_type) {
                    case 'page_load':
                        setTimeout(() => showPopup(popup), popup.trigger_value || 0);
                        break;

                    case 'time_delay':
                        setTimeout(() => showPopup(popup), (popup.trigger_value || 5) * 1000);
                        break;

                    case 'scroll':
                        handleScrollTrigger(popup);
                        break;

                    case 'exit_intent':
                        handleExitIntentTrigger(popup);
                        break;
                }
            }
        });
    };

    const shouldShowPopup = (popup: PopupType): boolean => {
        const storageKey = `popup_${popup.id}_shown`;
        const lastShown = localStorage.getItem(storageKey);

        if (!lastShown) return true;

        const lastShownTime = new Date(lastShown).getTime();
        const now = new Date().getTime();

        switch (popup.frequency) {
            case 'always':
                return true;
            case 'once_per_session':
                return false; // Already shown in this session
            case 'once_per_day':
                return now - lastShownTime > 24 * 60 * 60 * 1000;
            case 'once_per_week':
                return now - lastShownTime > 7 * 24 * 60 * 60 * 1000;
            default:
                return true;
        }
    };

    const handleScrollTrigger = (popup: PopupType) => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent >= (popup.trigger_value || 50)) {
                showPopup(popup);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
    };

    const handleExitIntentTrigger = (popup: PopupType) => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                showPopup(popup);
                document.removeEventListener('mouseleave', handleMouseLeave);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
    };

    const showPopup = (popup: PopupType) => {
        setActivePopup(popup);
        trackEvent(popup.id, 'view');
        localStorage.setItem(`popup_${popup.id}_shown`, new Date().toISOString());
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    const handleClick = (popup: PopupType) => {
        trackEvent(popup.id, 'click');
        if (popup.button_url) {
            window.location.href = popup.button_url;
        }
    };

    const trackEvent = async (popupId: number, eventType: 'view' | 'click' | 'conversion') => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/popups/${popupId}/track`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    event_type: eventType,
                    session_id: sessionId,
                    page_url: window.location.pathname,
                    referrer: document.referrer,
                    device_type: /Mobile/.test(navigator.userAgent) ? 'mobile' : 'desktop',
                    browser: navigator.userAgent,
                }),
            });
        } catch (error) {
            console.error('Error tracking popup event:', error);
        }
    };

    if (!activePopup) return null;

    const getPositionClasses = () => {
        switch (activePopup.position) {
            case 'top':
                return 'top-0 left-0 right-0';
            case 'bottom':
                return 'bottom-0 left-0 right-0';
            case 'left':
                return 'left-0 top-0 bottom-0';
            case 'right':
                return 'right-0 top-0 bottom-0';
            default:
                return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
        }
    };

    return (
        <>
            {/* Overlay */}
            {activePopup.display_type === 'modal' && (
                <div
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={closePopup}
                />
            )}

            {/* Popup Content */}
            <div
                className={`fixed z-50 ${getPositionClasses()}`}
                style={{
                    width: activePopup.display_type === 'modal' ? `${activePopup.width}px` : 'auto',
                    maxWidth: '90vw',
                    backgroundColor: activePopup.background_color || '#ffffff',
                }}
            >
                <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Image */}
                    {activePopup.image_url && (
                        <div className="w-full">
                            <img
                                src={activePopup.image_url}
                                alt={activePopup.title || 'Popup'}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                        {activePopup.title && (
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {activePopup.title}
                            </h2>
                        )}

                        {activePopup.content && (
                            <div
                                className="text-gray-700 mb-6"
                                dangerouslySetInnerHTML={{ __html: activePopup.content }}
                            />
                        )}

                        {/* CTA Button */}
                        {activePopup.button_text && (
                            <button
                                onClick={() => handleClick(activePopup)}
                                className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors"
                                style={{
                                    backgroundColor: activePopup.button_color || '#ef4444',
                                }}
                            >
                                {activePopup.button_text}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
