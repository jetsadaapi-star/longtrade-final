"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ebooks_access_type = exports.products_status = exports.ebooks_schema_type = exports.email_campaigns_status = exports.articles_schema_type = exports.email_campaigns_schedule_type = exports.ebooks_twitter_card = exports.popups_frequency = exports.sms_campaigns_status = exports.popups_target_user_type = exports.email_campaigns_target_audience = exports.lesson_videos_status = exports.articles_twitter_card = exports.promotions_applicable_to = exports.sms_campaigns_schedule_type = exports.media_optimization_status = exports.popups_position = exports.enrollments_payment_status = exports.products_access_type = exports.popups_display_type = exports.enrollments_status = exports.users_role = exports.sms_campaigns_target_audience = exports.promotions_discount_type = exports.marketing_analytics_event_type = exports.promotions_type = exports.products_category = exports.popups_trigger_type = exports.lesson_videos_video_type = exports.coupons_type = exports.verification_codes_type = exports.sms_campaigns_type = exports.email_templates_category = exports.email_campaigns_type = exports.marketing_analytics_campaign_type = void 0;
exports.marketing_analytics_campaign_type = {
    promotion: 'promotion',
    coupon: 'coupon',
    popup: 'popup',
    sms: 'sms',
    email: 'email'
};
exports.email_campaigns_type = {
    newsletter: 'newsletter',
    promotional: 'promotional',
    transactional: 'transactional',
    automated: 'automated'
};
exports.email_templates_category = {
    welcome: 'welcome',
    promotional: 'promotional',
    transactional: 'transactional',
    newsletter: 'newsletter'
};
exports.sms_campaigns_type = {
    promotional: 'promotional',
    transactional: 'transactional',
    notification: 'notification'
};
exports.verification_codes_type = {
    email: 'email',
    phone: 'phone'
};
exports.coupons_type = {
    percentage: 'percentage',
    fixed_amount: 'fixed_amount'
};
exports.lesson_videos_video_type = {
    youtube: 'youtube',
    upload: 'upload'
};
exports.popups_trigger_type = {
    page_load: 'page_load',
    exit_intent: 'exit_intent',
    scroll: 'scroll',
    time_delay: 'time_delay',
    click: 'click'
};
exports.products_category = {
    expert_advisors: 'expert_advisors',
    indicators: 'indicators',
    scripts: 'scripts',
    tradingview: 'tradingview'
};
exports.promotions_type = {
    flash_sale: 'flash_sale',
    bundle: 'bundle',
    seasonal: 'seasonal',
    member_exclusive: 'member_exclusive'
};
exports.marketing_analytics_event_type = {
    view: 'view',
    click: 'click',
    conversion: 'conversion',
    share: 'share'
};
exports.promotions_discount_type = {
    percentage: 'percentage',
    fixed_amount: 'fixed_amount',
    buy_x_get_y: 'buy_x_get_y'
};
exports.sms_campaigns_target_audience = {
    all: 'all',
    segment: 'segment',
    individual: 'individual'
};
exports.users_role = {
    student: 'student',
    instructor: 'instructor',
    admin: 'admin'
};
exports.enrollments_status = {
    pending: 'pending',
    active: 'active',
    completed: 'completed',
    cancelled: 'cancelled'
};
exports.popups_display_type = {
    modal: 'modal',
    slide_in: 'slide_in',
    banner: 'banner',
    fullscreen: 'fullscreen'
};
exports.products_access_type = {
    free: 'free',
    premium: 'premium',
    members_only: 'members_only'
};
exports.enrollments_payment_status = {
    pending: 'pending',
    paid: 'paid',
    refunded: 'refunded'
};
exports.popups_position = {
    center: 'center',
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
};
exports.media_optimization_status = {
    pending: 'pending',
    processing: 'processing',
    completed: 'completed',
    failed: 'failed',
    skipped: 'skipped'
};
exports.sms_campaigns_schedule_type = {
    immediate: 'immediate',
    scheduled: 'scheduled',
    recurring: 'recurring'
};
exports.promotions_applicable_to = {
    all: 'all',
    categories: 'categories',
    products: 'products',
    courses: 'courses'
};
exports.articles_twitter_card = {
    summary: 'summary',
    summary_large_image: 'summary_large_image'
};
exports.lesson_videos_status = {
    processing: 'processing',
    ready: 'ready',
    failed: 'failed'
};
exports.email_campaigns_target_audience = {
    all: 'all',
    segment: 'segment',
    individual: 'individual'
};
exports.popups_target_user_type = {
    all: 'all',
    guest: 'guest',
    member: 'member',
    new_visitor: 'new_visitor'
};
exports.sms_campaigns_status = {
    draft: 'draft',
    scheduled: 'scheduled',
    sending: 'sending',
    sent: 'sent',
    failed: 'failed'
};
exports.popups_frequency = {
    always: 'always',
    once_per_session: 'once_per_session',
    once_per_day: 'once_per_day',
    once_per_week: 'once_per_week'
};
exports.ebooks_twitter_card = {
    summary: 'summary',
    summary_large_image: 'summary_large_image'
};
exports.email_campaigns_schedule_type = {
    immediate: 'immediate',
    scheduled: 'scheduled',
    automated: 'automated'
};
exports.articles_schema_type = {
    Article: 'Article',
    BlogPosting: 'BlogPosting',
    NewsArticle: 'NewsArticle',
    TechArticle: 'TechArticle'
};
exports.email_campaigns_status = {
    draft: 'draft',
    scheduled: 'scheduled',
    sending: 'sending',
    sent: 'sent',
    failed: 'failed'
};
exports.ebooks_schema_type = {
    Book: 'Book',
    Product: 'Product',
    DigitalDocument: 'DigitalDocument'
};
exports.products_status = {
    draft: 'draft',
    published: 'published',
    archived: 'archived'
};
exports.ebooks_access_type = {
    free: 'free',
    members_only: 'members_only',
    premium: 'premium'
};
//# sourceMappingURL=enums.js.map