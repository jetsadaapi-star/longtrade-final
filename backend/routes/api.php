<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\IndicatorController;
use App\Http\Controllers\Api\EbookController;
use App\Http\Controllers\Api\ExpertAdvisorController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\SubscriptionController;
use App\Http\Controllers\Api\SocialAuthController;
use App\Http\Controllers\Api\TwoFactorController;
use App\Http\Controllers\Api\ChatGPTController;
use App\Http\Controllers\Api\VerificationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Authentication Routes
Route::prefix('v1/auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    // Protected auth routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/user', [AuthController::class, 'user']);
        Route::put('/profile', [AuthController::class, 'updateProfile']);
        Route::put('/change-password', [AuthController::class, 'changePassword']);

        // 2FA Routes
        Route::prefix('2fa')->group(function () {
            Route::post('/enable', [TwoFactorController::class, 'enable']);
            Route::post('/verify', [TwoFactorController::class, 'verify']);
            Route::post('/disable', [TwoFactorController::class, 'disable']);
            Route::post('/validate', [TwoFactorController::class, 'validate']);
            Route::get('/recovery-codes', [TwoFactorController::class, 'recoveryCodes']);
            Route::post('/regenerate-codes', [TwoFactorController::class, 'regenerateCodes']);
            Route::get('/status', [TwoFactorController::class, 'status']);
        });
    });

    // Social Auth Routes
    Route::prefix('social')->group(function () {
        Route::get('/{provider}/redirect', [SocialAuthController::class, 'redirect']);
        Route::get('/{provider}/callback', [SocialAuthController::class, 'callback']);

        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/{provider}/link', [SocialAuthController::class, 'link']);
            Route::delete('/{provider}/unlink', [SocialAuthController::class, 'unlink']);
            Route::get('/accounts', [SocialAuthController::class, 'accounts']);
        });
    });

    // Verification Routes
    Route::prefix('verification')->middleware('auth:sanctum')->group(function () {
        Route::get('/status', [VerificationController::class, 'status']);
        Route::post('/email/send', [VerificationController::class, 'sendEmailCode']);
        Route::post('/email/verify', [VerificationController::class, 'verifyEmail']);
        Route::post('/phone/send', [VerificationController::class, 'sendPhoneCode']);
        Route::post('/phone/verify', [VerificationController::class, 'verifyPhone']);
    });
});
// Legacy user route
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public API Routes
Route::prefix('v1')->group(function () {

    // Courses
    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/featured', [CourseController::class, 'featured']);
    Route::get('/courses/{slug}', [CourseController::class, 'show']);

    // Video Upload (for admin/authenticated users)
    Route::post('/courses/{slug}/lessons/{lessonId}/upload-video', [CourseController::class, 'uploadVideo']);


    // Articles
    Route::get('/articles', [ArticleController::class, 'index']);
    Route::get('/articles/featured', [ArticleController::class, 'featured']);
    Route::get('/articles/popular', [ArticleController::class, 'popular']);
    Route::get('/articles/search', [ArticleController::class, 'search']);
    Route::get('/articles/category/{categorySlug}', [ArticleController::class, 'byCategory']);
    Route::get('/articles/{slug}', [ArticleController::class, 'show']);
    Route::get('/articles/{slug}/related', [ArticleController::class, 'related']);


    // Indicators
    Route::get('/indicators', [IndicatorController::class, 'index']);
    Route::get('/indicators/featured', [IndicatorController::class, 'featured']);
    Route::get('/indicators/{slug}', [IndicatorController::class, 'show']);

    // Ebooks
    Route::get('/ebooks', [EbookController::class, 'index']);
    Route::get('/ebooks/featured', [EbookController::class, 'featured']);
    Route::get('/ebooks/{slug}', [EbookController::class, 'show']);
    Route::post('/ebooks/{slug}/track-view', [EbookController::class, 'trackView']);

    // Protected E-book routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/ebooks/{slug}/download', [EbookController::class, 'download']);
        Route::get('/user/ebooks', [EbookController::class, 'userEbooks']);
    });

    // Products (Digital Products: EA, Indicators, Scripts)
    Route::get('/products', [App\Http\Controllers\Api\ProductController::class, 'index']);
    Route::get('/products/featured', [App\Http\Controllers\Api\ProductController::class, 'featured']);
    Route::get('/products/category/{category}', [App\Http\Controllers\Api\ProductController::class, 'byCategory']);
    Route::get('/products/{slug}', [App\Http\Controllers\Api\ProductController::class, 'show']);
    Route::post('/products/{slug}/track-view', [App\Http\Controllers\Api\ProductController::class, 'trackView']);

    // Protected Product routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/products/{slug}/download', [App\Http\Controllers\Api\ProductController::class, 'download']);
        Route::get('/products/{slug}/check-access', [App\Http\Controllers\Api\ProductController::class, 'checkAccess']);
        Route::get('/user/products', [App\Http\Controllers\Api\ProductController::class, 'userProducts']);
    });

    // Payment routes
    Route::get('/payment/methods', [PaymentController::class, 'methods']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/payment/create-order', [PaymentController::class, 'createOrder']);
        Route::get('/payment/{paymentId}/status', [PaymentController::class, 'status']);
        Route::post('/payment/{paymentId}/confirm', [PaymentController::class, 'confirm']);
        Route::post('/payment/{paymentId}/cancel', [PaymentController::class, 'cancel']);
        Route::get('/payment/history', [PaymentController::class, 'history']);
    });

    // Expert Advisors
    Route::get('/expert-advisors', [ExpertAdvisorController::class, 'index']);
    Route::get('/expert-advisors/featured', [ExpertAdvisorController::class, 'featured']);
    Route::get('/expert-advisors/{slug}', [ExpertAdvisorController::class, 'show']);

    // Categories
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/categories/{slug}', [CategoryController::class, 'show']);

    // Site Settings
    Route::get('/site-settings', [App\Http\Controllers\Api\SiteSettingController::class, 'index']);

    // Pages
    Route::get('/home-page', [App\Http\Controllers\Api\PageController::class, 'home']);
    Route::get('/pages/{slug}', [App\Http\Controllers\Api\PageController::class, 'show']);

    // Reviews
    Route::get('/reviews/{type}/{slug}', [App\Http\Controllers\Api\ReviewController::class, 'index']);
    Route::get('/reviews/stats/{type}/{slug}', [App\Http\Controllers\Api\ReviewController::class, 'stats']);
    Route::post('/reviews', [App\Http\Controllers\Api\ReviewController::class, 'store']);

    // Coupons
    Route::post('/coupons/validate', [App\Http\Controllers\Api\CouponController::class, 'validate']);
    Route::post('/coupons/apply', [App\Http\Controllers\Api\CouponController::class, 'apply']);
    Route::post('/coupons/cancel', [App\Http\Controllers\Api\CouponController::class, 'cancel']);

    // Marketing - Promotions
    Route::get('/promotions', [App\Http\Controllers\Api\PromotionController::class, 'index']);
    Route::get('/promotions/featured', [App\Http\Controllers\Api\PromotionController::class, 'featured']);
    Route::get('/promotions/{slug}', [App\Http\Controllers\Api\PromotionController::class, 'show']);
    Route::post('/promotions/apply', [App\Http\Controllers\Api\PromotionController::class, 'apply']);
    Route::post('/promotions/{slug}/use', [App\Http\Controllers\Api\PromotionController::class, 'use']);

    // Protected promotion routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/promotions/my-history', [App\Http\Controllers\Api\PromotionController::class, 'userHistory']);
    });

    // Marketing - Popups
    Route::get('/popups/active', [App\Http\Controllers\Api\PopupController::class, 'active']);
    Route::post('/popups/{id}/track', [App\Http\Controllers\Api\PopupController::class, 'track']);
    Route::get('/popups/{id}/stats', [App\Http\Controllers\Api\PopupController::class, 'stats']);

    // Marketing - Analytics
    Route::post('/marketing/track', [App\Http\Controllers\Api\MarketingAnalyticsController::class, 'track']);
    Route::get('/marketing/stats', [App\Http\Controllers\Api\MarketingAnalyticsController::class, 'stats']);
    Route::get('/marketing/overall', [App\Http\Controllers\Api\MarketingAnalyticsController::class, 'overall']);

    // Course System - Public Routes
    Route::post('/enrollments/validate-coupon', [App\Http\Controllers\Api\EnrollmentController::class, 'validateCoupon']);
    Route::get('/certificates/verify/{verificationCode}', [App\Http\Controllers\Api\CertificateController::class, 'verify']);
});

// Protected API Routes (Require Authentication)
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {

    // Subscription Routes
    Route::prefix('subscription')->group(function () {
        Route::get('/plans', [SubscriptionController::class, 'plans'])->withoutMiddleware('auth:sanctum');
        Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);
        Route::get('/current', [SubscriptionController::class, 'current']);
        Route::post('/cancel', [SubscriptionController::class, 'cancel']);
        Route::post('/renew', [SubscriptionController::class, 'renew']);
        Route::post('/upgrade', [SubscriptionController::class, 'upgrade']);
        Route::post('/check-access', [SubscriptionController::class, 'checkAccess']);
    });

    // AI / ChatGPT Routes
    Route::prefix('ai')->group(function () {
        Route::post('/chat', [ChatGPTController::class, 'chat']);
        Route::post('/ask', [ChatGPTController::class, 'ask']);
        Route::post('/analyze-strategy', [ChatGPTController::class, 'analyzeStrategy']);
        Route::get('/status', [ChatGPTController::class, 'status']);
    });

    // Enrollments
    Route::get('/enrollments', [App\Http\Controllers\Api\EnrollmentController::class, 'index']);
    Route::post('/enrollments', [App\Http\Controllers\Api\EnrollmentController::class, 'store']);
    Route::get('/enrollments/{id}', [App\Http\Controllers\Api\EnrollmentController::class, 'show']);

    // Quiz
    Route::post('/courses/{courseId}/quiz/submit', [App\Http\Controllers\Api\QuizController::class, 'submit']);
    Route::get('/courses/{courseId}/quiz/attempts', [App\Http\Controllers\Api\QuizController::class, 'attempts']);
    Route::get('/courses/{courseId}/quiz/best-attempt', [App\Http\Controllers\Api\QuizController::class, 'bestAttempt']);

    // Progress
    Route::get('/courses/{courseId}/progress', [App\Http\Controllers\Api\ProgressController::class, 'show']);
    Route::post('/courses/{courseId}/progress/complete-lesson', [App\Http\Controllers\Api\ProgressController::class, 'completeLesson']);
    Route::get('/courses/{courseId}/progress/completions', [App\Http\Controllers\Api\ProgressController::class, 'completions']);

    // Certificates
    Route::get('/certificates', [App\Http\Controllers\Api\CertificateController::class, 'index']);
    Route::post('/courses/{courseId}/certificate/generate', [App\Http\Controllers\Api\CertificateController::class, 'generate']);
    Route::get('/certificates/{id}', [App\Http\Controllers\Api\CertificateController::class, 'show']);
});

Route::get('/test-route', function () {
    return 'test';
});
