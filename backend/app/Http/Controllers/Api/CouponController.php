<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CouponController extends Controller
{
    /**
     * Validate a coupon code
     */
    public function validate(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string',
            'amount' => 'required|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $coupon = Coupon::where('code', strtoupper($request->code))->first();

        if (!$coupon) {
            return response()->json([
                'valid' => false,
                'message' => 'ไม่พบรหัสคูปองนี้',
            ], 404);
        }

        // Check if coupon can be used
        $errorMessage = $coupon->getValidationError($request->amount);

        if ($errorMessage) {
            return response()->json([
                'valid' => false,
                'message' => $errorMessage,
            ], 400);
        }

        // Calculate discount
        $discount = $coupon->calculateDiscount($request->amount);
        $finalAmount = $request->amount - $discount;

        return response()->json([
            'valid' => true,
            'message' => 'คูปองใช้งานได้',
            'coupon' => [
                'code' => $coupon->code,
                'description' => $coupon->description,
                'type' => $coupon->type,
                'value' => $coupon->value,
            ],
            'discount' => $discount,
            'original_amount' => $request->amount,
            'final_amount' => $finalAmount,
        ]);
    }

    /**
     * Apply/use a coupon (increment used_count)
     */
    public function apply(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string',
            'amount' => 'required|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $coupon = Coupon::where('code', strtoupper($request->code))->first();

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => 'ไม่พบรหัสคูปองนี้',
            ], 404);
        }

        // Validate and use coupon
        if (!$coupon->canBeUsed($request->amount)) {
            $errorMessage = $coupon->getValidationError($request->amount);
            return response()->json([
                'success' => false,
                'message' => $errorMessage,
            ], 400);
        }

        // Use the coupon
        $success = $coupon->use();

        if (!$success) {
            return response()->json([
                'success' => false,
                'message' => 'ไม่สามารถใช้คูปองนี้ได้',
            ], 400);
        }

        $discount = $coupon->calculateDiscount($request->amount);
        $finalAmount = $request->amount - $discount;

        return response()->json([
            'success' => true,
            'message' => 'ใช้คูปองสำเร็จ',
            'discount' => $discount,
            'original_amount' => $request->amount,
            'final_amount' => $finalAmount,
        ]);
    }

    /**
     * Cancel coupon usage (decrement used_count)
     */
    public function cancel(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $coupon = Coupon::where('code', strtoupper($request->code))->first();

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => 'ไม่พบรหัสคูปองนี้',
            ], 404);
        }

        $coupon->unuse();

        return response()->json([
            'success' => true,
            'message' => 'ยกเลิกการใช้คูปองสำเร็จ',
        ]);
    }
}
