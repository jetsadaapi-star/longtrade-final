<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PaymentService
{
    /**
     * Create a new order for a product.
     */
    public function createOrder(array $data): Order
    {
        return DB::transaction(function () use ($data) {
            $order = Order::create([
                'order_number' => Order::generateOrderNumber(),
                'user_id' => $data['user_id'],
                'orderable_type' => $data['orderable_type'],
                'orderable_id' => $data['orderable_id'],
                'subtotal' => $data['amount'],
                'tax' => $data['tax'] ?? 0,
                'discount' => $data['discount'] ?? 0,
                'total_amount' => $data['amount'],
                'currency' => $data['currency'] ?? 'THB',
                'status' => 'pending',
                'payment_status' => 'unpaid',
                'customer_name' => $data['customer_name'],
                'customer_email' => $data['customer_email'],
                'customer_phone' => $data['customer_phone'] ?? null,
                'items' => $data['items'] ?? null,
                'metadata' => $data['metadata'] ?? null,
            ]);

            return $order;
        });
    }

    /**
     * Create a payment for an order.
     */
    public function createPayment(Order $order, string $paymentMethod, array $additionalData = []): Payment
    {
        $payment = Payment::create([
            'user_id' => $order->user_id,
            'order_id' => $order->id,
            'payment_method' => $paymentMethod,
            'amount' => $order->total_amount,
            'currency' => $order->currency,
            'status' => 'pending',
            'provider' => $additionalData['provider'] ?? 'manual',
            'customer_name' => $order->customer_name,
            'customer_email' => $order->customer_email,
            'customer_phone' => $order->customer_phone,
            'payment_data' => $additionalData,
        ]);

        return $payment;
    }

    /**
     * Process PromptPay payment (generate QR code).
     */
    public function processPromptPay(Payment $payment): array
    {
        // In production, integrate with Thai QR Payment API
        // For now, return mock QR data

        $qrData = $this->generatePromptPayQR(
            '0123456789', // PromptPay ID (phone or tax ID)
            (float) $payment->amount
        );

        $payment->update([
            'status' => 'processing',
            'payment_data' => [
                'qr_code' => $qrData,
                'expires_at' => now()->addMinutes(15)->toISOString(),
            ],
        ]);

        return [
            'qr_code' => $qrData,
            'amount' => $payment->amount,
            'expires_at' => now()->addMinutes(15)->toISOString(),
        ];
    }

    /**
     * Generate PromptPay QR Code data.
     */
    private function generatePromptPayQR(string $promptpayId, float $amount): string
    {
        // This is a simplified version
        // In production, use proper Thai QR Payment library
        return base64_encode("PROMPTPAY:{$promptpayId}:AMOUNT:{$amount}");
    }

    /**
     * Process Bank Transfer payment.
     */
    public function processBankTransfer(Payment $payment, array $bankDetails): array
    {
        $payment->update([
            'status' => 'processing',
            'payment_data' => [
                'bank_name' => $bankDetails['bank_name'] ?? 'ธนาคารกสิกรไทย',
                'account_number' => $bankDetails['account_number'] ?? '123-4-56789-0',
                'account_name' => $bankDetails['account_name'] ?? 'LongTrade Academy',
                'transfer_deadline' => now()->addDays(1)->toISOString(),
            ],
        ]);

        return $payment->payment_data;
    }

    /**
     * Process Stripe test payment.
     */
    public function processStripeTest(Payment $payment): array
    {
        // Mock Stripe payment for testing
        $payment->update([
            'status' => 'processing',
            'provider' => 'stripe_test',
            'payment_data' => [
                'test_mode' => true,
                'card_number' => '4242 4242 4242 4242', // Test card
                'instructions' => 'Use test card: 4242 4242 4242 4242, any future date, any CVC',
            ],
        ]);

        return [
            'test_mode' => true,
            'publishable_key' => 'pk_test_mock_key',
            'client_secret' => 'pi_test_' . uniqid(),
        ];
    }

    /**
     * Confirm payment (manual verification or webhook).
     */
    public function confirmPayment(Payment $payment, array $data = []): bool
    {
        try {
            DB::transaction(function () use ($payment, $data) {
                $payment->update([
                    'status' => 'completed',
                    'paid_at' => now(),
                    'transaction_id' => $data['transaction_id'] ?? uniqid('txn_'),
                    'provider_response' => json_encode($data),
                ]);

                // Update order status
                $payment->order->markAsPaid();
            });

            return true;
        } catch (\Exception $e) {
            Log::error('Payment confirmation failed', [
                'payment_id' => $payment->id,
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }

    /**
     * Cancel payment.
     */
    public function cancelPayment(Payment $payment): bool
    {
        $payment->update([
            'status' => 'cancelled',
        ]);

        $payment->order->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
        ]);

        return true;
    }
}
