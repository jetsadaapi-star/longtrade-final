<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Ebook;
use App\Services\PaymentService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    protected PaymentService $paymentService;

    public function __construct(PaymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    /**
     * Get available payment methods.
     */
    public function methods(): JsonResponse
    {
        $methods = config('payment.methods');
        $bankAccounts = config('payment.bank_accounts');

        return response()->json([
            'methods' => $methods,
            'bank_accounts' => $bankAccounts,
        ]);
    }

    /**
     * Create an order for E-Book purchase.
     */
    public function createOrder(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'ebook_id' => 'required|exists:ebooks,id',
            'payment_method' => 'required|in:bank_transfer,promptpay,stripe',
        ]);

        $user = Auth::user();
        $ebook = Ebook::findOrFail($validated['ebook_id']);

        // Create order
        $order = $this->paymentService->createOrder([
            'user_id' => $user->id,
            'orderable_type' => Ebook::class,
            'orderable_id' => $ebook->id,
            'amount' => (float) $ebook->price,
            'currency' => 'THB',
            'customer_name' => $user->name,
            'customer_email' => $user->email,
            'items' => [
                [
                    'type' => 'ebook',
                    'id' => $ebook->id,
                    'title' => $ebook->title,
                    'price' => $ebook->price,
                    'quantity' => 1,
                ]
            ],
        ]);

        // Create payment
        $payment = $this->paymentService->createPayment(
            $order,
            $validated['payment_method']
        );

        // Process payment based on method
        $paymentData = $this->processPaymentMethod($payment, $validated['payment_method']);

        return response()->json([
            'order' => $order,
            'payment' => $payment,
            'payment_data' => $paymentData,
        ], 201);
    }

    /**
     * Process payment based on selected method.
     */
    private function processPaymentMethod(Payment $payment, string $method): array
    {
        return match ($method) {
            'promptpay' => $this->paymentService->processPromptPay($payment),
            'bank_transfer' => $this->paymentService->processBankTransfer($payment, config('payment.bank_accounts')[0]),
            'stripe' => $this->paymentService->processStripeTest($payment),
            default => [],
        };
    }

    /**
     * Get payment status.
     */
    public function status(string $paymentId): JsonResponse
    {
        $payment = Payment::with('order')->findOrFail($paymentId);

        return response()->json([
            'payment' => $payment,
            'order' => $payment->order,
        ]);
    }

    /**
     * Confirm payment (for testing/manual verification).
     */
    public function confirm(Request $request, string $paymentId): JsonResponse
    {
        $payment = Payment::findOrFail($paymentId);

        $validated = $request->validate([
            'transaction_id' => 'nullable|string',
            'slip_image' => 'nullable|string', // Base64 or URL
        ]);

        $confirmed = $this->paymentService->confirmPayment($payment, $validated);

        if ($confirmed) {
            return response()->json([
                'message' => 'Payment confirmed successfully',
                'payment' => $payment->fresh(),
                'order' => $payment->order->fresh(),
            ]);
        }

        return response()->json([
            'message' => 'Payment confirmation failed',
        ], 500);
    }

    /**
     * Cancel payment.
     */
    public function cancel(string $paymentId): JsonResponse
    {
        $payment = Payment::findOrFail($paymentId);

        $this->paymentService->cancelPayment($payment);

        return response()->json([
            'message' => 'Payment cancelled successfully',
        ]);
    }

    /**
     * Get user's payment history.
     */
    public function history(): JsonResponse
    {
        $user = Auth::user();

        $payments = Payment::with(['order.orderable'])
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($payments);
    }
}
