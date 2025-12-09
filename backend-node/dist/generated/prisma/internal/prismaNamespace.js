"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment_settingsScalarFieldEnum = exports.Password_reset_tokensScalarFieldEnum = exports.PagesScalarFieldEnum = exports.Model_has_rolesScalarFieldEnum = exports.Model_has_permissionsScalarFieldEnum = exports.MigrationsScalarFieldEnum = exports.MediaScalarFieldEnum = exports.Marketing_analyticsScalarFieldEnum = exports.Lesson_videosScalarFieldEnum = exports.Lesson_completionsScalarFieldEnum = exports.JobsScalarFieldEnum = exports.Job_batchesScalarFieldEnum = exports.IndicatorsScalarFieldEnum = exports.Failed_jobsScalarFieldEnum = exports.Expert_advisorsScalarFieldEnum = exports.EnrollmentsScalarFieldEnum = exports.Email_templatesScalarFieldEnum = exports.Email_campaignsScalarFieldEnum = exports.EbooksScalarFieldEnum = exports.CoursesScalarFieldEnum = exports.Course_schedulesScalarFieldEnum = exports.CouponsScalarFieldEnum = exports.CertificatesScalarFieldEnum = exports.CategoriesScalarFieldEnum = exports.Cache_locksScalarFieldEnum = exports.CacheScalarFieldEnum = exports.BookingsScalarFieldEnum = exports.ArticlesScalarFieldEnum = exports.Article_viewsScalarFieldEnum = exports.Api_settingsScalarFieldEnum = exports.Activity_logsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.mediaOrderByRelevanceFieldEnum = exports.marketing_analyticsOrderByRelevanceFieldEnum = exports.lesson_videosOrderByRelevanceFieldEnum = exports.lesson_completionsOrderByRelevanceFieldEnum = exports.jobsOrderByRelevanceFieldEnum = exports.job_batchesOrderByRelevanceFieldEnum = exports.indicatorsOrderByRelevanceFieldEnum = exports.failed_jobsOrderByRelevanceFieldEnum = exports.expert_advisorsOrderByRelevanceFieldEnum = exports.email_templatesOrderByRelevanceFieldEnum = exports.email_campaignsOrderByRelevanceFieldEnum = exports.ebooksOrderByRelevanceFieldEnum = exports.coursesOrderByRelevanceFieldEnum = exports.couponsOrderByRelevanceFieldEnum = exports.certificatesOrderByRelevanceFieldEnum = exports.categoriesOrderByRelevanceFieldEnum = exports.cache_locksOrderByRelevanceFieldEnum = exports.cacheOrderByRelevanceFieldEnum = exports.articlesOrderByRelevanceFieldEnum = exports.article_viewsOrderByRelevanceFieldEnum = exports.api_settingsOrderByRelevanceFieldEnum = exports.activity_logsOrderByRelevanceFieldEnum = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueFilter = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.Verification_codesScalarFieldEnum = exports.UsersScalarFieldEnum = exports.User_subscriptionsScalarFieldEnum = exports.User_profilesScalarFieldEnum = exports.Two_factor_authScalarFieldEnum = exports.System_settingsScalarFieldEnum = exports.Subscription_plansScalarFieldEnum = exports.Social_accountsScalarFieldEnum = exports.Sms_campaignsScalarFieldEnum = exports.Site_settingsScalarFieldEnum = exports.SessionsScalarFieldEnum = exports.RolesScalarFieldEnum = exports.Role_has_permissionsScalarFieldEnum = exports.ReviewsScalarFieldEnum = exports.Quiz_attemptsScalarFieldEnum = exports.PromotionsScalarFieldEnum = exports.Promotion_userScalarFieldEnum = exports.ProductsScalarFieldEnum = exports.Product_screenshotsScalarFieldEnum = exports.PopupsScalarFieldEnum = exports.Personal_access_tokensScalarFieldEnum = exports.PermissionsScalarFieldEnum = void 0;
exports.defineExtension = exports.verification_codesOrderByRelevanceFieldEnum = exports.usersOrderByRelevanceFieldEnum = exports.user_subscriptionsOrderByRelevanceFieldEnum = exports.user_profilesOrderByRelevanceFieldEnum = exports.two_factor_authOrderByRelevanceFieldEnum = exports.system_settingsOrderByRelevanceFieldEnum = exports.subscription_plansOrderByRelevanceFieldEnum = exports.social_accountsOrderByRelevanceFieldEnum = exports.sms_campaignsOrderByRelevanceFieldEnum = exports.site_settingsOrderByRelevanceFieldEnum = exports.sessionsOrderByRelevanceFieldEnum = exports.rolesOrderByRelevanceFieldEnum = exports.reviewsOrderByRelevanceFieldEnum = exports.promotionsOrderByRelevanceFieldEnum = exports.productsOrderByRelevanceFieldEnum = exports.popupsOrderByRelevanceFieldEnum = exports.personal_access_tokensOrderByRelevanceFieldEnum = exports.permissionsOrderByRelevanceFieldEnum = exports.payment_settingsOrderByRelevanceFieldEnum = exports.password_reset_tokensOrderByRelevanceFieldEnum = exports.pagesOrderByRelevanceFieldEnum = exports.model_has_rolesOrderByRelevanceFieldEnum = exports.model_has_permissionsOrderByRelevanceFieldEnum = exports.migrationsOrderByRelevanceFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.1.0",
    engine: "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    activity_logs: 'activity_logs',
    api_settings: 'api_settings',
    article_views: 'article_views',
    articles: 'articles',
    bookings: 'bookings',
    cache: 'cache',
    cache_locks: 'cache_locks',
    categories: 'categories',
    certificates: 'certificates',
    coupons: 'coupons',
    course_schedules: 'course_schedules',
    courses: 'courses',
    ebooks: 'ebooks',
    email_campaigns: 'email_campaigns',
    email_templates: 'email_templates',
    enrollments: 'enrollments',
    expert_advisors: 'expert_advisors',
    failed_jobs: 'failed_jobs',
    indicators: 'indicators',
    job_batches: 'job_batches',
    jobs: 'jobs',
    lesson_completions: 'lesson_completions',
    lesson_videos: 'lesson_videos',
    marketing_analytics: 'marketing_analytics',
    media: 'media',
    migrations: 'migrations',
    model_has_permissions: 'model_has_permissions',
    model_has_roles: 'model_has_roles',
    pages: 'pages',
    password_reset_tokens: 'password_reset_tokens',
    payment_settings: 'payment_settings',
    permissions: 'permissions',
    personal_access_tokens: 'personal_access_tokens',
    popups: 'popups',
    product_screenshots: 'product_screenshots',
    products: 'products',
    promotion_user: 'promotion_user',
    promotions: 'promotions',
    quiz_attempts: 'quiz_attempts',
    reviews: 'reviews',
    role_has_permissions: 'role_has_permissions',
    roles: 'roles',
    sessions: 'sessions',
    site_settings: 'site_settings',
    sms_campaigns: 'sms_campaigns',
    social_accounts: 'social_accounts',
    subscription_plans: 'subscription_plans',
    system_settings: 'system_settings',
    two_factor_auth: 'two_factor_auth',
    user_profiles: 'user_profiles',
    user_subscriptions: 'user_subscriptions',
    users: 'users',
    verification_codes: 'verification_codes'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Activity_logsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    log_name: 'log_name',
    description: 'description',
    subject_type: 'subject_type',
    subject_id: 'subject_id',
    event: 'event',
    causer_type: 'causer_type',
    causer_id: 'causer_id',
    properties: 'properties',
    batch_uuid: 'batch_uuid',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Api_settingsScalarFieldEnum = {
    id: 'id',
    category: 'category',
    key: 'key',
    name: 'name',
    value: 'value',
    description: 'description',
    is_encrypted: 'is_encrypted',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Article_viewsScalarFieldEnum = {
    id: 'id',
    article_id: 'article_id',
    user_id: 'user_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    viewed_at: 'viewed_at'
};
exports.ArticlesScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    title: 'title',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    focus_keyword: 'focus_keyword',
    og_title: 'og_title',
    og_description: 'og_description',
    og_image: 'og_image',
    twitter_card: 'twitter_card',
    twitter_title: 'twitter_title',
    twitter_description: 'twitter_description',
    twitter_image: 'twitter_image',
    canonical_url: 'canonical_url',
    schema_type: 'schema_type',
    schema_data: 'schema_data',
    seo_score: 'seo_score',
    excerpt: 'excerpt',
    content: 'content',
    featured_image: 'featured_image',
    author: 'author',
    read_time: 'read_time',
    is_published: 'is_published',
    is_featured: 'is_featured',
    published_at: 'published_at',
    category_id: 'category_id',
    tags: 'tags',
    views_count: 'views_count',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.BookingsScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CacheScalarFieldEnum = {
    key: 'key',
    value: 'value',
    expiration: 'expiration'
};
exports.Cache_locksScalarFieldEnum = {
    key: 'key',
    owner: 'owner',
    expiration: 'expiration'
};
exports.CategoriesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    type: 'type',
    icon: 'icon',
    color: 'color',
    order: 'order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CertificatesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    enrollment_id: 'enrollment_id',
    certificate_number: 'certificate_number',
    issued_date: 'issued_date',
    verification_code: 'verification_code',
    pdf_path: 'pdf_path',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CouponsScalarFieldEnum = {
    id: 'id',
    code: 'code',
    description: 'description',
    type: 'type',
    value: 'value',
    min_purchase: 'min_purchase',
    max_discount: 'max_discount',
    usage_limit: 'usage_limit',
    used_count: 'used_count',
    valid_from: 'valid_from',
    valid_until: 'valid_until',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Course_schedulesScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CoursesScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    og_image: 'og_image',
    og_description: 'og_description',
    canonical_url: 'canonical_url',
    schema_markup: 'schema_markup',
    cover: 'cover',
    price: 'price',
    original_price: 'original_price',
    hours: 'hours',
    level: 'level',
    lessons_count: 'lessons_count',
    what_you_learn: 'what_you_learn',
    requirements: 'requirements',
    is_published: 'is_published',
    is_featured: 'is_featured',
    average_rating: 'average_rating',
    reviews_count: 'reviews_count',
    order: 'order',
    category_id: 'category_id',
    unlock_code: 'unlock_code',
    sections: 'sections',
    quiz: 'quiz',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.EbooksScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    title: 'title',
    author: 'author',
    pages_count: 'pages_count',
    description: 'description',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    focus_keyword: 'focus_keyword',
    og_title: 'og_title',
    og_description: 'og_description',
    og_image: 'og_image',
    twitter_card: 'twitter_card',
    twitter_title: 'twitter_title',
    twitter_description: 'twitter_description',
    twitter_image: 'twitter_image',
    canonical_url: 'canonical_url',
    schema_type: 'schema_type',
    schema_data: 'schema_data',
    seo_score: 'seo_score',
    cover_image: 'cover_image',
    price: 'price',
    original_price: 'original_price',
    pages: 'pages',
    format: 'format',
    file_path: 'file_path',
    preview_link: 'preview_link',
    is_published: 'is_published',
    access_type: 'access_type',
    preview_pages: 'preview_pages',
    preview_percentage: 'preview_percentage',
    is_featured: 'is_featured',
    average_rating: 'average_rating',
    reviews_count: 'reviews_count',
    downloads_count: 'downloads_count',
    views_count: 'views_count',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Email_campaignsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    subject: 'subject',
    preview_text: 'preview_text',
    from_name: 'from_name',
    from_email: 'from_email',
    reply_to: 'reply_to',
    html_content: 'html_content',
    plain_text_content: 'plain_text_content',
    template_id: 'template_id',
    target_audience: 'target_audience',
    segment_filter: 'segment_filter',
    recipient_count: 'recipient_count',
    schedule_type: 'schedule_type',
    scheduled_at: 'scheduled_at',
    automation_trigger: 'automation_trigger',
    status: 'status',
    is_active: 'is_active',
    sent_count: 'sent_count',
    delivered_count: 'delivered_count',
    opened_count: 'opened_count',
    clicked_count: 'clicked_count',
    bounced_count: 'bounced_count',
    unsubscribed_count: 'unsubscribed_count',
    is_ab_test: 'is_ab_test',
    ab_test_variant: 'ab_test_variant',
    sent_at: 'sent_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Email_templatesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    category: 'category',
    subject: 'subject',
    html_content: 'html_content',
    plain_text_content: 'plain_text_content',
    available_variables: 'available_variables',
    thumbnail_url: 'thumbnail_url',
    is_active: 'is_active',
    is_default: 'is_default',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.EnrollmentsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    coupon_id: 'coupon_id',
    enrollment_date: 'enrollment_date',
    completion_date: 'completion_date',
    status: 'status',
    payment_status: 'payment_status',
    progress_percentage: 'progress_percentage',
    original_price: 'original_price',
    final_price: 'final_price',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Expert_advisorsScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    image: 'image',
    price: 'price',
    original_price: 'original_price',
    platform: 'platform',
    features: 'features',
    strategy: 'strategy',
    download_link: 'download_link',
    is_published: 'is_published',
    is_featured: 'is_featured',
    average_rating: 'average_rating',
    reviews_count: 'reviews_count',
    downloads_count: 'downloads_count',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Failed_jobsScalarFieldEnum = {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
};
exports.IndicatorsScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    image: 'image',
    price: 'price',
    original_price: 'original_price',
    platform: 'platform',
    features: 'features',
    download_link: 'download_link',
    is_published: 'is_published',
    is_featured: 'is_featured',
    average_rating: 'average_rating',
    reviews_count: 'reviews_count',
    downloads_count: 'downloads_count',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Job_batchesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    total_jobs: 'total_jobs',
    pending_jobs: 'pending_jobs',
    failed_jobs: 'failed_jobs',
    failed_job_ids: 'failed_job_ids',
    options: 'options',
    cancelled_at: 'cancelled_at',
    created_at: 'created_at',
    finished_at: 'finished_at'
};
exports.JobsScalarFieldEnum = {
    id: 'id',
    queue: 'queue',
    payload: 'payload',
    attempts: 'attempts',
    reserved_at: 'reserved_at',
    available_at: 'available_at',
    created_at: 'created_at'
};
exports.Lesson_completionsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    section_id: 'section_id',
    lesson_id: 'lesson_id',
    completed_at: 'completed_at',
    video_progress: 'video_progress',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Lesson_videosScalarFieldEnum = {
    id: 'id',
    course_id: 'course_id',
    lesson_id: 'lesson_id',
    video_type: 'video_type',
    youtube_id: 'youtube_id',
    file_path: 'file_path',
    file_size: 'file_size',
    duration: 'duration',
    mime_type: 'mime_type',
    thumbnail_path: 'thumbnail_path',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Marketing_analyticsScalarFieldEnum = {
    id: 'id',
    campaign_type: 'campaign_type',
    campaign_id: 'campaign_id',
    user_id: 'user_id',
    session_id: 'session_id',
    event_type: 'event_type',
    event_data: 'event_data',
    page_url: 'page_url',
    referrer: 'referrer',
    device_type: 'device_type',
    browser: 'browser',
    created_at: 'created_at'
};
exports.MediaScalarFieldEnum = {
    id: 'id',
    disk: 'disk',
    directory: 'directory',
    visibility: 'visibility',
    name: 'name',
    path: 'path',
    original_path: 'original_path',
    optimized_path: 'optimized_path',
    optimization_status: 'optimization_status',
    original_size: 'original_size',
    optimized_size: 'optimized_size',
    compression_ratio: 'compression_ratio',
    width: 'width',
    height: 'height',
    size: 'size',
    type: 'type',
    ext: 'ext',
    alt: 'alt',
    title: 'title',
    description: 'description',
    caption: 'caption',
    exif: 'exif',
    curations: 'curations',
    created_at: 'created_at',
    updated_at: 'updated_at',
    tenant_id: 'tenant_id'
};
exports.MigrationsScalarFieldEnum = {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
};
exports.Model_has_permissionsScalarFieldEnum = {
    permission_id: 'permission_id',
    model_type: 'model_type',
    model_id: 'model_id'
};
exports.Model_has_rolesScalarFieldEnum = {
    role_id: 'role_id',
    model_type: 'model_type',
    model_id: 'model_id'
};
exports.PagesScalarFieldEnum = {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    custom_css: 'custom_css',
    is_active: 'is_active',
    is_home: 'is_home',
    seo_title: 'seo_title',
    seo_description: 'seo_description',
    seo_keywords: 'seo_keywords',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Password_reset_tokensScalarFieldEnum = {
    email: 'email',
    token: 'token',
    created_at: 'created_at'
};
exports.Payment_settingsScalarFieldEnum = {
    id: 'id',
    key: 'key',
    name: 'name',
    is_enabled: 'is_enabled',
    configuration: 'configuration',
    sort_order: 'sort_order',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PermissionsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    guard_name: 'guard_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Personal_access_tokensScalarFieldEnum = {
    id: 'id',
    tokenable_type: 'tokenable_type',
    tokenable_id: 'tokenable_id',
    name: 'name',
    token: 'token',
    abilities: 'abilities',
    last_used_at: 'last_used_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PopupsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    title: 'title',
    content: 'content',
    trigger_type: 'trigger_type',
    trigger_value: 'trigger_value',
    display_type: 'display_type',
    position: 'position',
    width: 'width',
    height: 'height',
    target_pages: 'target_pages',
    target_user_type: 'target_user_type',
    frequency: 'frequency',
    image_url: 'image_url',
    button_text: 'button_text',
    button_url: 'button_url',
    button_color: 'button_color',
    background_color: 'background_color',
    is_active: 'is_active',
    starts_at: 'starts_at',
    ends_at: 'ends_at',
    impressions: 'impressions',
    clicks: 'clicks',
    conversions: 'conversions',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Product_screenshotsScalarFieldEnum = {
    id: 'id',
    product_id: 'product_id',
    media_id: 'media_id',
    order: 'order',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ProductsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    price: 'price',
    access_type: 'access_type',
    file_path: 'file_path',
    file_size: 'file_size',
    file_version: 'file_version',
    requirements: 'requirements',
    installation_guide: 'installation_guide',
    demo_url: 'demo_url',
    thumbnail_id: 'thumbnail_id',
    featured_image_id: 'featured_image_id',
    downloads_count: 'downloads_count',
    views_count: 'views_count',
    rating: 'rating',
    status: 'status',
    is_featured: 'is_featured',
    published_at: 'published_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Promotion_userScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    promotion_id: 'promotion_id',
    usage_count: 'usage_count',
    discount_amount: 'discount_amount',
    order_amount: 'order_amount',
    used_at: 'used_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PromotionsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    type: 'type',
    discount_type: 'discount_type',
    discount_value: 'discount_value',
    max_discount_amount: 'max_discount_amount',
    min_purchase_amount: 'min_purchase_amount',
    applicable_to: 'applicable_to',
    applicable_ids: 'applicable_ids',
    starts_at: 'starts_at',
    ends_at: 'ends_at',
    is_active: 'is_active',
    usage_limit: 'usage_limit',
    usage_per_user: 'usage_per_user',
    current_usage: 'current_usage',
    banner_image: 'banner_image',
    badge_text: 'badge_text',
    badge_color: 'badge_color',
    priority: 'priority',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Quiz_attemptsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    score: 'score',
    total_questions: 'total_questions',
    percentage: 'percentage',
    passed: 'passed',
    answers: 'answers',
    attempted_at: 'attempted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ReviewsScalarFieldEnum = {
    id: 'id',
    reviewable_type: 'reviewable_type',
    reviewable_id: 'reviewable_id',
    user_name: 'user_name',
    user_email: 'user_email',
    rating: 'rating',
    title: 'title',
    comment: 'comment',
    is_approved: 'is_approved',
    is_verified_purchase: 'is_verified_purchase',
    ip_address: 'ip_address',
    approved_at: 'approved_at',
    approved_by: 'approved_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Role_has_permissionsScalarFieldEnum = {
    permission_id: 'permission_id',
    role_id: 'role_id'
};
exports.RolesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    guard_name: 'guard_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SessionsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload',
    last_activity: 'last_activity'
};
exports.Site_settingsScalarFieldEnum = {
    id: 'id',
    site_name: 'site_name',
    site_description: 'site_description',
    logo: 'logo',
    favicon: 'favicon',
    contact_email: 'contact_email',
    contact_address: 'contact_address',
    contact_line: 'contact_line',
    contact_facebook: 'contact_facebook',
    contact_twitter: 'contact_twitter',
    contact_instagram: 'contact_instagram',
    contact_youtube: 'contact_youtube',
    business_hours: 'business_hours',
    tax_id: 'tax_id',
    company_name: 'company_name',
    contact_phone: 'contact_phone',
    address: 'address',
    facebook_url: 'facebook_url',
    line_url: 'line_url',
    tiktok_url: 'tiktok_url',
    youtube_url: 'youtube_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    header_menu: 'header_menu',
    header_style: 'header_style',
    header_colors: 'header_colors',
    footer_menu: 'footer_menu',
    cta_text: 'cta_text',
    cta_link: 'cta_link',
    footer_text: 'footer_text',
    footer_columns: 'footer_columns',
    footer_social_links: 'footer_social_links',
    footer_style: 'footer_style',
    footer_colors: 'footer_colors',
    theme_colors: 'theme_colors',
    theme_font_heading: 'theme_font_heading',
    theme_font_body: 'theme_font_body',
    theme_layout: 'theme_layout',
    theme_dark_mode: 'theme_dark_mode',
    theme_glassmorphism: 'theme_glassmorphism'
};
exports.Sms_campaignsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    message: 'message',
    sender_name: 'sender_name',
    target_audience: 'target_audience',
    segment_filter: 'segment_filter',
    recipient_count: 'recipient_count',
    schedule_type: 'schedule_type',
    scheduled_at: 'scheduled_at',
    recurrence_pattern: 'recurrence_pattern',
    status: 'status',
    is_active: 'is_active',
    sent_count: 'sent_count',
    delivered_count: 'delivered_count',
    failed_count: 'failed_count',
    clicked_count: 'clicked_count',
    estimated_cost: 'estimated_cost',
    actual_cost: 'actual_cost',
    sent_at: 'sent_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.Social_accountsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    provider: 'provider',
    provider_id: 'provider_id',
    provider_token: 'provider_token',
    provider_refresh_token: 'provider_refresh_token',
    token_expires_at: 'token_expires_at',
    avatar: 'avatar',
    provider_data: 'provider_data',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Subscription_plansScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    billing_cycle: 'billing_cycle',
    trial_days: 'trial_days',
    features: 'features',
    limitations: 'limitations',
    max_courses: 'max_courses',
    max_downloads_per_month: 'max_downloads_per_month',
    max_ebooks: 'max_ebooks',
    max_products: 'max_products',
    ai_chat_access: 'ai_chat_access',
    ai_messages_per_month: 'ai_messages_per_month',
    sort_order: 'sort_order',
    is_popular: 'is_popular',
    is_active: 'is_active',
    badge_text: 'badge_text',
    badge_color: 'badge_color',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.System_settingsScalarFieldEnum = {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type',
    group: 'group',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Two_factor_authScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    enabled: 'enabled',
    secret: 'secret',
    recovery_codes: 'recovery_codes',
    enabled_at: 'enabled_at',
    last_used_at: 'last_used_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_profilesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    bio: 'bio',
    address: 'address',
    city: 'city',
    country: 'country',
    interests: 'interests',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_subscriptionsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    subscription_plan_id: 'subscription_plan_id',
    status: 'status',
    started_at: 'started_at',
    expires_at: 'expires_at',
    cancelled_at: 'cancelled_at',
    trial_ends_at: 'trial_ends_at',
    payment_id: 'payment_id',
    amount_paid: 'amount_paid',
    payment_method: 'payment_method',
    payment_reference: 'payment_reference',
    auto_renew: 'auto_renew',
    stripe_subscription_id: 'stripe_subscription_id',
    usage_stats: 'usage_stats',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    role: 'role',
    email_verified_at: 'email_verified_at',
    phone_verified_at: 'phone_verified_at',
    password: 'password',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Verification_codesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    code: 'code',
    contact: 'contact',
    expires_at: 'expires_at',
    verified: 'verified',
    verified_at: 'verified_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.activity_logsOrderByRelevanceFieldEnum = {
    log_name: 'log_name',
    description: 'description',
    subject_type: 'subject_type',
    event: 'event',
    causer_type: 'causer_type',
    batch_uuid: 'batch_uuid',
    ip_address: 'ip_address',
    user_agent: 'user_agent'
};
exports.api_settingsOrderByRelevanceFieldEnum = {
    category: 'category',
    key: 'key',
    name: 'name',
    value: 'value',
    description: 'description'
};
exports.article_viewsOrderByRelevanceFieldEnum = {
    ip_address: 'ip_address',
    user_agent: 'user_agent'
};
exports.articlesOrderByRelevanceFieldEnum = {
    slug: 'slug',
    title: 'title',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    focus_keyword: 'focus_keyword',
    og_title: 'og_title',
    og_description: 'og_description',
    og_image: 'og_image',
    twitter_title: 'twitter_title',
    twitter_description: 'twitter_description',
    twitter_image: 'twitter_image',
    canonical_url: 'canonical_url',
    excerpt: 'excerpt',
    content: 'content',
    featured_image: 'featured_image',
    author: 'author'
};
exports.cacheOrderByRelevanceFieldEnum = {
    key: 'key',
    value: 'value'
};
exports.cache_locksOrderByRelevanceFieldEnum = {
    key: 'key',
    owner: 'owner'
};
exports.categoriesOrderByRelevanceFieldEnum = {
    name: 'name',
    slug: 'slug',
    description: 'description',
    type: 'type',
    icon: 'icon',
    color: 'color'
};
exports.certificatesOrderByRelevanceFieldEnum = {
    certificate_number: 'certificate_number',
    verification_code: 'verification_code',
    pdf_path: 'pdf_path'
};
exports.couponsOrderByRelevanceFieldEnum = {
    code: 'code',
    description: 'description'
};
exports.coursesOrderByRelevanceFieldEnum = {
    slug: 'slug',
    title: 'title',
    description: 'description',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    og_image: 'og_image',
    og_description: 'og_description',
    canonical_url: 'canonical_url',
    cover: 'cover',
    hours: 'hours',
    level: 'level',
    what_you_learn: 'what_you_learn',
    requirements: 'requirements',
    unlock_code: 'unlock_code'
};
exports.ebooksOrderByRelevanceFieldEnum = {
    slug: 'slug',
    title: 'title',
    author: 'author',
    description: 'description',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    meta_keywords: 'meta_keywords',
    focus_keyword: 'focus_keyword',
    og_title: 'og_title',
    og_description: 'og_description',
    og_image: 'og_image',
    twitter_title: 'twitter_title',
    twitter_description: 'twitter_description',
    twitter_image: 'twitter_image',
    canonical_url: 'canonical_url',
    cover_image: 'cover_image',
    format: 'format',
    file_path: 'file_path',
    preview_link: 'preview_link',
    preview_pages: 'preview_pages'
};
exports.email_campaignsOrderByRelevanceFieldEnum = {
    name: 'name',
    subject: 'subject',
    preview_text: 'preview_text',
    from_name: 'from_name',
    from_email: 'from_email',
    reply_to: 'reply_to',
    html_content: 'html_content',
    plain_text_content: 'plain_text_content',
    automation_trigger: 'automation_trigger',
    ab_test_variant: 'ab_test_variant'
};
exports.email_templatesOrderByRelevanceFieldEnum = {
    name: 'name',
    subject: 'subject',
    html_content: 'html_content',
    plain_text_content: 'plain_text_content',
    thumbnail_url: 'thumbnail_url'
};
exports.expert_advisorsOrderByRelevanceFieldEnum = {
    slug: 'slug',
    title: 'title',
    description: 'description',
    image: 'image',
    platform: 'platform',
    features: 'features',
    strategy: 'strategy',
    download_link: 'download_link'
};
exports.failed_jobsOrderByRelevanceFieldEnum = {
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception'
};
exports.indicatorsOrderByRelevanceFieldEnum = {
    slug: 'slug',
    title: 'title',
    description: 'description',
    image: 'image',
    platform: 'platform',
    features: 'features',
    download_link: 'download_link'
};
exports.job_batchesOrderByRelevanceFieldEnum = {
    id: 'id',
    name: 'name',
    failed_job_ids: 'failed_job_ids',
    options: 'options'
};
exports.jobsOrderByRelevanceFieldEnum = {
    queue: 'queue',
    payload: 'payload'
};
exports.lesson_completionsOrderByRelevanceFieldEnum = {
    section_id: 'section_id',
    lesson_id: 'lesson_id'
};
exports.lesson_videosOrderByRelevanceFieldEnum = {
    lesson_id: 'lesson_id',
    youtube_id: 'youtube_id',
    file_path: 'file_path',
    mime_type: 'mime_type',
    thumbnail_path: 'thumbnail_path'
};
exports.marketing_analyticsOrderByRelevanceFieldEnum = {
    session_id: 'session_id',
    page_url: 'page_url',
    referrer: 'referrer',
    device_type: 'device_type',
    browser: 'browser'
};
exports.mediaOrderByRelevanceFieldEnum = {
    disk: 'disk',
    directory: 'directory',
    visibility: 'visibility',
    name: 'name',
    path: 'path',
    original_path: 'original_path',
    optimized_path: 'optimized_path',
    type: 'type',
    ext: 'ext',
    alt: 'alt',
    title: 'title',
    description: 'description',
    caption: 'caption',
    exif: 'exif',
    curations: 'curations'
};
exports.migrationsOrderByRelevanceFieldEnum = {
    migration: 'migration'
};
exports.model_has_permissionsOrderByRelevanceFieldEnum = {
    model_type: 'model_type'
};
exports.model_has_rolesOrderByRelevanceFieldEnum = {
    model_type: 'model_type'
};
exports.pagesOrderByRelevanceFieldEnum = {
    title: 'title',
    slug: 'slug',
    content: 'content',
    custom_css: 'custom_css',
    seo_title: 'seo_title',
    seo_description: 'seo_description',
    seo_keywords: 'seo_keywords'
};
exports.password_reset_tokensOrderByRelevanceFieldEnum = {
    email: 'email',
    token: 'token'
};
exports.payment_settingsOrderByRelevanceFieldEnum = {
    key: 'key',
    name: 'name'
};
exports.permissionsOrderByRelevanceFieldEnum = {
    name: 'name',
    guard_name: 'guard_name'
};
exports.personal_access_tokensOrderByRelevanceFieldEnum = {
    tokenable_type: 'tokenable_type',
    name: 'name',
    token: 'token',
    abilities: 'abilities'
};
exports.popupsOrderByRelevanceFieldEnum = {
    name: 'name',
    title: 'title',
    content: 'content',
    image_url: 'image_url',
    button_text: 'button_text',
    button_url: 'button_url',
    button_color: 'button_color',
    background_color: 'background_color'
};
exports.productsOrderByRelevanceFieldEnum = {
    name: 'name',
    slug: 'slug',
    description: 'description',
    file_path: 'file_path',
    file_version: 'file_version',
    requirements: 'requirements',
    installation_guide: 'installation_guide',
    demo_url: 'demo_url'
};
exports.promotionsOrderByRelevanceFieldEnum = {
    name: 'name',
    slug: 'slug',
    description: 'description',
    banner_image: 'banner_image',
    badge_text: 'badge_text',
    badge_color: 'badge_color'
};
exports.reviewsOrderByRelevanceFieldEnum = {
    reviewable_type: 'reviewable_type',
    user_name: 'user_name',
    user_email: 'user_email',
    title: 'title',
    comment: 'comment',
    ip_address: 'ip_address'
};
exports.rolesOrderByRelevanceFieldEnum = {
    name: 'name',
    guard_name: 'guard_name'
};
exports.sessionsOrderByRelevanceFieldEnum = {
    id: 'id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload'
};
exports.site_settingsOrderByRelevanceFieldEnum = {
    site_name: 'site_name',
    site_description: 'site_description',
    logo: 'logo',
    favicon: 'favicon',
    contact_email: 'contact_email',
    contact_address: 'contact_address',
    contact_line: 'contact_line',
    contact_facebook: 'contact_facebook',
    contact_twitter: 'contact_twitter',
    contact_instagram: 'contact_instagram',
    contact_youtube: 'contact_youtube',
    business_hours: 'business_hours',
    tax_id: 'tax_id',
    company_name: 'company_name',
    contact_phone: 'contact_phone',
    address: 'address',
    facebook_url: 'facebook_url',
    line_url: 'line_url',
    tiktok_url: 'tiktok_url',
    youtube_url: 'youtube_url',
    header_style: 'header_style',
    cta_text: 'cta_text',
    cta_link: 'cta_link',
    footer_text: 'footer_text',
    footer_style: 'footer_style',
    theme_font_heading: 'theme_font_heading',
    theme_font_body: 'theme_font_body',
    theme_layout: 'theme_layout'
};
exports.sms_campaignsOrderByRelevanceFieldEnum = {
    name: 'name',
    message: 'message',
    sender_name: 'sender_name',
    recurrence_pattern: 'recurrence_pattern'
};
exports.social_accountsOrderByRelevanceFieldEnum = {
    provider: 'provider',
    provider_id: 'provider_id',
    provider_token: 'provider_token',
    provider_refresh_token: 'provider_refresh_token',
    avatar: 'avatar'
};
exports.subscription_plansOrderByRelevanceFieldEnum = {
    name: 'name',
    slug: 'slug',
    description: 'description',
    billing_cycle: 'billing_cycle',
    badge_text: 'badge_text',
    badge_color: 'badge_color'
};
exports.system_settingsOrderByRelevanceFieldEnum = {
    key: 'key',
    value: 'value',
    type: 'type',
    group: 'group',
    description: 'description'
};
exports.two_factor_authOrderByRelevanceFieldEnum = {
    secret: 'secret'
};
exports.user_profilesOrderByRelevanceFieldEnum = {
    bio: 'bio',
    address: 'address',
    city: 'city',
    country: 'country'
};
exports.user_subscriptionsOrderByRelevanceFieldEnum = {
    status: 'status',
    payment_method: 'payment_method',
    payment_reference: 'payment_reference',
    stripe_subscription_id: 'stripe_subscription_id'
};
exports.usersOrderByRelevanceFieldEnum = {
    name: 'name',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    password: 'password',
    remember_token: 'remember_token'
};
exports.verification_codesOrderByRelevanceFieldEnum = {
    code: 'code',
    contact: 'contact'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map