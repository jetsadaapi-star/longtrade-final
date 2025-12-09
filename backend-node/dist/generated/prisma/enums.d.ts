export declare const marketing_analytics_campaign_type: {
    readonly promotion: "promotion";
    readonly coupon: "coupon";
    readonly popup: "popup";
    readonly sms: "sms";
    readonly email: "email";
};
export type marketing_analytics_campaign_type = (typeof marketing_analytics_campaign_type)[keyof typeof marketing_analytics_campaign_type];
export declare const email_campaigns_type: {
    readonly newsletter: "newsletter";
    readonly promotional: "promotional";
    readonly transactional: "transactional";
    readonly automated: "automated";
};
export type email_campaigns_type = (typeof email_campaigns_type)[keyof typeof email_campaigns_type];
export declare const email_templates_category: {
    readonly welcome: "welcome";
    readonly promotional: "promotional";
    readonly transactional: "transactional";
    readonly newsletter: "newsletter";
};
export type email_templates_category = (typeof email_templates_category)[keyof typeof email_templates_category];
export declare const sms_campaigns_type: {
    readonly promotional: "promotional";
    readonly transactional: "transactional";
    readonly notification: "notification";
};
export type sms_campaigns_type = (typeof sms_campaigns_type)[keyof typeof sms_campaigns_type];
export declare const verification_codes_type: {
    readonly email: "email";
    readonly phone: "phone";
};
export type verification_codes_type = (typeof verification_codes_type)[keyof typeof verification_codes_type];
export declare const coupons_type: {
    readonly percentage: "percentage";
    readonly fixed_amount: "fixed_amount";
};
export type coupons_type = (typeof coupons_type)[keyof typeof coupons_type];
export declare const lesson_videos_video_type: {
    readonly youtube: "youtube";
    readonly upload: "upload";
};
export type lesson_videos_video_type = (typeof lesson_videos_video_type)[keyof typeof lesson_videos_video_type];
export declare const popups_trigger_type: {
    readonly page_load: "page_load";
    readonly exit_intent: "exit_intent";
    readonly scroll: "scroll";
    readonly time_delay: "time_delay";
    readonly click: "click";
};
export type popups_trigger_type = (typeof popups_trigger_type)[keyof typeof popups_trigger_type];
export declare const products_category: {
    readonly expert_advisors: "expert_advisors";
    readonly indicators: "indicators";
    readonly scripts: "scripts";
    readonly tradingview: "tradingview";
};
export type products_category = (typeof products_category)[keyof typeof products_category];
export declare const promotions_type: {
    readonly flash_sale: "flash_sale";
    readonly bundle: "bundle";
    readonly seasonal: "seasonal";
    readonly member_exclusive: "member_exclusive";
};
export type promotions_type = (typeof promotions_type)[keyof typeof promotions_type];
export declare const marketing_analytics_event_type: {
    readonly view: "view";
    readonly click: "click";
    readonly conversion: "conversion";
    readonly share: "share";
};
export type marketing_analytics_event_type = (typeof marketing_analytics_event_type)[keyof typeof marketing_analytics_event_type];
export declare const promotions_discount_type: {
    readonly percentage: "percentage";
    readonly fixed_amount: "fixed_amount";
    readonly buy_x_get_y: "buy_x_get_y";
};
export type promotions_discount_type = (typeof promotions_discount_type)[keyof typeof promotions_discount_type];
export declare const sms_campaigns_target_audience: {
    readonly all: "all";
    readonly segment: "segment";
    readonly individual: "individual";
};
export type sms_campaigns_target_audience = (typeof sms_campaigns_target_audience)[keyof typeof sms_campaigns_target_audience];
export declare const users_role: {
    readonly student: "student";
    readonly instructor: "instructor";
    readonly admin: "admin";
};
export type users_role = (typeof users_role)[keyof typeof users_role];
export declare const enrollments_status: {
    readonly pending: "pending";
    readonly active: "active";
    readonly completed: "completed";
    readonly cancelled: "cancelled";
};
export type enrollments_status = (typeof enrollments_status)[keyof typeof enrollments_status];
export declare const popups_display_type: {
    readonly modal: "modal";
    readonly slide_in: "slide_in";
    readonly banner: "banner";
    readonly fullscreen: "fullscreen";
};
export type popups_display_type = (typeof popups_display_type)[keyof typeof popups_display_type];
export declare const products_access_type: {
    readonly free: "free";
    readonly premium: "premium";
    readonly members_only: "members_only";
};
export type products_access_type = (typeof products_access_type)[keyof typeof products_access_type];
export declare const enrollments_payment_status: {
    readonly pending: "pending";
    readonly paid: "paid";
    readonly refunded: "refunded";
};
export type enrollments_payment_status = (typeof enrollments_payment_status)[keyof typeof enrollments_payment_status];
export declare const popups_position: {
    readonly center: "center";
    readonly top: "top";
    readonly bottom: "bottom";
    readonly left: "left";
    readonly right: "right";
};
export type popups_position = (typeof popups_position)[keyof typeof popups_position];
export declare const media_optimization_status: {
    readonly pending: "pending";
    readonly processing: "processing";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly skipped: "skipped";
};
export type media_optimization_status = (typeof media_optimization_status)[keyof typeof media_optimization_status];
export declare const sms_campaigns_schedule_type: {
    readonly immediate: "immediate";
    readonly scheduled: "scheduled";
    readonly recurring: "recurring";
};
export type sms_campaigns_schedule_type = (typeof sms_campaigns_schedule_type)[keyof typeof sms_campaigns_schedule_type];
export declare const promotions_applicable_to: {
    readonly all: "all";
    readonly categories: "categories";
    readonly products: "products";
    readonly courses: "courses";
};
export type promotions_applicable_to = (typeof promotions_applicable_to)[keyof typeof promotions_applicable_to];
export declare const articles_twitter_card: {
    readonly summary: "summary";
    readonly summary_large_image: "summary_large_image";
};
export type articles_twitter_card = (typeof articles_twitter_card)[keyof typeof articles_twitter_card];
export declare const lesson_videos_status: {
    readonly processing: "processing";
    readonly ready: "ready";
    readonly failed: "failed";
};
export type lesson_videos_status = (typeof lesson_videos_status)[keyof typeof lesson_videos_status];
export declare const email_campaigns_target_audience: {
    readonly all: "all";
    readonly segment: "segment";
    readonly individual: "individual";
};
export type email_campaigns_target_audience = (typeof email_campaigns_target_audience)[keyof typeof email_campaigns_target_audience];
export declare const popups_target_user_type: {
    readonly all: "all";
    readonly guest: "guest";
    readonly member: "member";
    readonly new_visitor: "new_visitor";
};
export type popups_target_user_type = (typeof popups_target_user_type)[keyof typeof popups_target_user_type];
export declare const sms_campaigns_status: {
    readonly draft: "draft";
    readonly scheduled: "scheduled";
    readonly sending: "sending";
    readonly sent: "sent";
    readonly failed: "failed";
};
export type sms_campaigns_status = (typeof sms_campaigns_status)[keyof typeof sms_campaigns_status];
export declare const popups_frequency: {
    readonly always: "always";
    readonly once_per_session: "once_per_session";
    readonly once_per_day: "once_per_day";
    readonly once_per_week: "once_per_week";
};
export type popups_frequency = (typeof popups_frequency)[keyof typeof popups_frequency];
export declare const ebooks_twitter_card: {
    readonly summary: "summary";
    readonly summary_large_image: "summary_large_image";
};
export type ebooks_twitter_card = (typeof ebooks_twitter_card)[keyof typeof ebooks_twitter_card];
export declare const email_campaigns_schedule_type: {
    readonly immediate: "immediate";
    readonly scheduled: "scheduled";
    readonly automated: "automated";
};
export type email_campaigns_schedule_type = (typeof email_campaigns_schedule_type)[keyof typeof email_campaigns_schedule_type];
export declare const articles_schema_type: {
    readonly Article: "Article";
    readonly BlogPosting: "BlogPosting";
    readonly NewsArticle: "NewsArticle";
    readonly TechArticle: "TechArticle";
};
export type articles_schema_type = (typeof articles_schema_type)[keyof typeof articles_schema_type];
export declare const email_campaigns_status: {
    readonly draft: "draft";
    readonly scheduled: "scheduled";
    readonly sending: "sending";
    readonly sent: "sent";
    readonly failed: "failed";
};
export type email_campaigns_status = (typeof email_campaigns_status)[keyof typeof email_campaigns_status];
export declare const ebooks_schema_type: {
    readonly Book: "Book";
    readonly Product: "Product";
    readonly DigitalDocument: "DigitalDocument";
};
export type ebooks_schema_type = (typeof ebooks_schema_type)[keyof typeof ebooks_schema_type];
export declare const products_status: {
    readonly draft: "draft";
    readonly published: "published";
    readonly archived: "archived";
};
export type products_status = (typeof products_status)[keyof typeof products_status];
export declare const ebooks_access_type: {
    readonly free: "free";
    readonly members_only: "members_only";
    readonly premium: "premium";
};
export type ebooks_access_type = (typeof ebooks_access_type)[keyof typeof ebooks_access_type];
