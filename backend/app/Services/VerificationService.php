<?php

namespace App\Services;

use App\Models\User;
use App\Models\VerificationCode;
use App\Models\SystemSetting;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class VerificationService
{
    /**
     * Send email verification code
     */
    public function sendEmailVerification(User $user): VerificationCode
    {
        // Invalidate previous codes
        VerificationCode::where('user_id', $user->id)
            ->where('type', 'email')
            ->where('verified', false)
            ->delete();

        // Get settings
        $codeLength = SystemSetting::get('verification_code_length', 6);
        $expiresMinutes = SystemSetting::get('verification_code_expires_minutes', 15);

        // Generate new code
        $code = VerificationCode::create([
            'user_id' => $user->id,
            'type' => 'email',
            'code' => VerificationCode::generateCode($codeLength),
            'contact' => $user->email,
            'expires_at' => Carbon::now()->addMinutes($expiresMinutes),
        ]);

        // Send email
        $this->sendEmail($user->email, $code->code);

        return $code;
    }

    /**
     * Send phone verification code
     */
    public function sendPhoneVerification(User $user): VerificationCode
    {
        if (!$user->phone) {
            throw new \Exception('Phone number not provided');
        }

        // Invalidate previous codes
        VerificationCode::where('user_id', $user->id)
            ->where('type', 'phone')
            ->where('verified', false)
            ->delete();

        // Get settings
        $codeLength = SystemSetting::get('verification_code_length', 6);
        $expiresMinutes = SystemSetting::get('verification_code_expires_minutes', 15);

        // Generate new code
        $code = VerificationCode::create([
            'user_id' => $user->id,
            'type' => 'phone',
            'code' => VerificationCode::generateCode($codeLength),
            'contact' => $user->phone,
            'expires_at' => Carbon::now()->addMinutes($expiresMinutes),
        ]);

        // Send SMS
        $this->sendSMS($user->phone, $code->code);

        return $code;
    }

    /**
     * Verify code
     */
    public function verifyCode(User $user, string $type, string $code): bool
    {
        $verification = VerificationCode::where('user_id', $user->id)
            ->where('type', $type)
            ->where('code', $code)
            ->where('verified', false)
            ->first();

        if (!$verification) {
            throw new \Exception('Invalid verification code');
        }

        if ($verification->isExpired()) {
            throw new \Exception('Verification code has expired');
        }

        // Mark as verified
        $verification->update([
            'verified' => true,
            'verified_at' => now(),
        ]);

        // Update user verification status
        if ($type === 'email') {
            $user->update(['email_verified_at' => now()]);
        } elseif ($type === 'phone') {
            $user->update(['phone_verified_at' => now()]);
        }

        return true;
    }

    /**
     * Send email (using configured provider)
     */
    protected function sendEmail(string $email, string $code): void
    {
        $provider = SystemSetting::get('email_provider', 'log');

        if ($provider === 'log') {
            Log::info("Email verification code for {$email}: {$code}");
            return;
        }

        // TODO: Implement actual email sending based on provider
        // For now, just log
        Log::info("Email verification code for {$email}: {$code}");
    }

    /**
     * Send SMS (using configured provider)
     */
    protected function sendSMS(string $phone, string $code): void
    {
        $provider = SystemSetting::get('sms_provider', 'log');

        if ($provider === 'log') {
            Log::info("SMS verification code for {$phone}: {$code}");
            return;
        }

        // TODO: Implement actual SMS sending based on provider
        // For now, just log
        Log::info("SMS verification code for {$phone}: {$code}");
    }
}
