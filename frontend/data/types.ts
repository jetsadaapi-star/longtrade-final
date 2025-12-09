// data/types.ts
export type PopupBody = { heading: string; text: string };

// กรอบลิสต์ในโมดัล
export type PopupSection = {
  title: string;
  items: ReadonlyArray<string>; // << เปลี่ยนเป็น ReadonlyArray
};

export type CatalogItem = {
  id?: string;
  slug?: string;
  title: string;
  summary?: string;
  description?: string;
  cover?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  website?: string;
  facebook?: string;

  // ทั้งหมดเปลี่ยนเป็น ReadonlyArray
  samples?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;

  popup?: {
    intro?: string;
    body?: ReadonlyArray<PopupBody>;          // เดิม: PopupBody[]
    sections?: ReadonlyArray<PopupSection>;   // เดิม: PopupSection[]
    metrics?: ReadonlyArray<string>;          // เดิม: string[]
  };
};

// Marketing System Types

export interface Promotion {
  id: number;
  name: string;
  slug: string;
  description: string;
  type: 'flash_sale' | 'bundle' | 'seasonal' | 'member_exclusive';
  discount_type: 'percentage' | 'fixed_amount' | 'buy_x_get_y';
  discount_value: number;
  max_discount_amount?: number;
  min_purchase_amount: number;
  applicable_to: 'all' | 'categories' | 'products' | 'courses';
  applicable_ids?: number[];
  starts_at?: string;
  ends_at?: string;
  is_active: boolean;
  usage_limit?: number;
  usage_per_user: number;
  current_usage: number;
  banner_image?: string;
  badge_text?: string;
  badge_color?: string;
  priority: number;
  created_at: string;
  updated_at: string;
}

export interface Popup {
  id: number;
  name: string;
  title?: string;
  content?: string;
  trigger_type: 'page_load' | 'exit_intent' | 'scroll' | 'time_delay' | 'click';
  trigger_value?: number;
  display_type: 'modal' | 'slide_in' | 'banner' | 'fullscreen';
  position: 'center' | 'top' | 'bottom' | 'left' | 'right';
  width: number;
  height?: number;
  target_pages?: string[];
  target_user_type: 'all' | 'guest' | 'member' | 'new_visitor';
  frequency: 'always' | 'once_per_session' | 'once_per_day' | 'once_per_week';
  image_url?: string;
  button_text?: string;
  button_url?: string;
  button_color?: string;
  background_color?: string;
  is_active: boolean;
  starts_at?: string;
  ends_at?: string;
  impressions: number;
  clicks: number;
  conversions: number;
}

export interface MarketingEvent {
  campaign_type: 'promotion' | 'coupon' | 'popup' | 'sms' | 'email';
  campaign_id: number;
  event_type: 'view' | 'click' | 'conversion' | 'share';
  session_id?: string;
  event_data?: Record<string, any>;
  page_url?: string;
  referrer?: string;
  device_type?: string;
  browser?: string;
}
