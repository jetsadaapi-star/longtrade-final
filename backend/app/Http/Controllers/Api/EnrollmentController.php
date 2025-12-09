<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use App\Models\Course;
use App\Models\Coupon;
use App\Models\Payment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class EnrollmentController extends Controller
{
    /**
     * Get user's enrollments
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $enrollments = Enrollment::where('user_id', $user->id)
            ->with(['course', 'coupon'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($enrollments);
    }

    /**
     * Create new enrollment
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'course_id' => 'required|exists:courses,id',
            'coupon_code' => 'nullable|string|exists:coupons,code',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();
        $course = Course::findOrFail($request->course_id);

        // Check if already enrolled
        $existing = Enrollment::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->first();

        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'คุณได้ลงทะเบียนคอร์สนี้แล้ว'
            ], 400);
        }

        DB::beginTransaction();
        try {
            $originalPrice = $course->price;
            $finalPrice = $originalPrice;
            $coupon = null;

            // Apply coupon if provided
            if ($request->coupon_code) {
                $coupon = Coupon::where('code', $request->coupon_code)->first();

                if (!$coupon || !$coupon->isValid()) {
                    DB::rollBack();
                    return response()->json([
                        'success' => false,
                        'message' => $coupon ? $coupon->getValidationError($originalPrice) : 'คูปองไม่ถูกต้อง'
                    ], 400);
                }

                if (!$coupon->canBeUsed($originalPrice)) {
                    DB::rollBack();
                    return response()->json([
                        'success' => false,
                        'message' => $coupon->getValidationError($originalPrice)
                    ], 400);
                }

                $discount = $coupon->calculateDiscount($originalPrice);
                $finalPrice = $originalPrice - $discount;
            }

            // Create enrollment
            $enrollment = Enrollment::create([
                'user_id' => $user->id,
                'course_id' => $course->id,
                'coupon_id' => $coupon?->id,
                'enrollment_date' => now(),
                'status' => 'pending',
                'payment_status' => $finalPrice > 0 ? 'pending' : 'paid',
                'original_price' => $originalPrice,
                'final_price' => $finalPrice,
            ]);

            // If free course, activate immediately
            if ($finalPrice == 0) {
                $enrollment->update(['status' => 'active']);
                if ($coupon) {
                    $coupon->use();
                }
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'ลงทะเบียนสำเร็จ',
                'data' => $enrollment->load(['course', 'coupon'])
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'เกิดข้อผิดพลาด: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get enrollment details
     */
    public function show(Request $request, $id): JsonResponse
    {
        $user = $request->user();

        $enrollment = Enrollment::where('id', $id)
            ->where('user_id', $user->id)
            ->with(['course', 'coupon', 'payments', 'certificate'])
            ->firstOrFail();

        return response()->json($enrollment);
    }

    /**
     * Validate coupon
     */
    public function validateCoupon(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string',
            'course_id' => 'required|exists:courses,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $coupon = Coupon::where('code', $request->code)->first();
        $course = Course::findOrFail($request->course_id);

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => 'ไม่พบคูปองนี้'
            ], 404);
        }

        $error = $coupon->getValidationError($course->price);
        if ($error) {
            return response()->json([
                'success' => false,
                'message' => $error
            ], 400);
        }

        $discount = $coupon->calculateDiscount($course->price);
        $finalPrice = $course->price - $discount;

        return response()->json([
            'success' => true,
            'data' => [
                'coupon' => $coupon,
                'original_price' => $course->price,
                'discount' => $discount,
                'final_price' => $finalPrice,
            ]
        ]);
    }
}
