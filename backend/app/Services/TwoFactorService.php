<?php

namespace App\Services;

use App\Models\User;
use App\Models\TwoFactorAuth;
use PragmaRX\Google2FA\Google2FA;
use Illuminate\Support\Facades\Hash;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;

class TwoFactorService
{
    protected Google2FA $google2fa;

    public function __construct()
    {
        $this->google2fa = new Google2FA();
    }

    /**
     * Enable 2FA for user
     */
    public function enable(User $user): array
    {
        // Generate secret
        $secret = $this->google2fa->generateSecretKey();

        // Get or create 2FA record
        $twoFactor = TwoFactorAuth::firstOrCreate(
            ['user_id' => $user->id],
            ['secret' => $secret]
        );

        if (!$twoFactor->secret) {
            $twoFactor->update(['secret' => $secret]);
        }

        // Generate QR code
        $qrCodeUrl = $this->google2fa->getQRCodeUrl(
            config('app.name'),
            $user->email,
            $twoFactor->secret
        );

        $qrCodeSvg = $this->generateQRCode($qrCodeUrl);

        // Generate recovery codes
        $recoveryCodes = $twoFactor->generateRecoveryCodes();

        return [
            'secret' => $twoFactor->secret,
            'qr_code' => $qrCodeSvg,
            'recovery_codes' => $recoveryCodes,
        ];
    }

    /**
     * Verify and activate 2FA
     */
    public function verify(User $user, string $code): bool
    {
        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor || !$twoFactor->secret) {
            return false;
        }

        $valid = $this->google2fa->verifyKey($twoFactor->secret, $code);

        if ($valid) {
            $twoFactor->update([
                'enabled' => true,
                'enabled_at' => now(),
                'last_used_at' => now(),
            ]);
        }

        return $valid;
    }

    /**
     * Disable 2FA
     */
    public function disable(User $user, string $password): bool
    {
        // Verify password
        if (!Hash::check($password, $user->password)) {
            throw new \Exception('Invalid password');
        }

        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor) {
            return false;
        }

        $twoFactor->update([
            'enabled' => false,
            'secret' => null,
            'recovery_codes' => null,
        ]);

        return true;
    }

    /**
     * Validate 2FA code
     */
    public function validateCode(User $user, string $code): bool
    {
        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor || !$twoFactor->enabled) {
            return false;
        }

        $valid = $this->google2fa->verifyKey($twoFactor->secret, $code);

        if ($valid) {
            $twoFactor->update(['last_used_at' => now()]);
        }

        return $valid;
    }

    /**
     * Validate recovery code
     */
    public function validateRecoveryCode(User $user, string $code): bool
    {
        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor || !$twoFactor->enabled) {
            return false;
        }

        $used = $twoFactor->useRecoveryCode($code);

        if ($used) {
            $twoFactor->update(['last_used_at' => now()]);
        }

        return $used;
    }

    /**
     * Regenerate recovery codes
     */
    public function regenerateRecoveryCodes(User $user, string $password): array
    {
        // Verify password
        if (!Hash::check($password, $user->password)) {
            throw new \Exception('Invalid password');
        }

        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor || !$twoFactor->enabled) {
            throw new \Exception('2FA is not enabled');
        }

        return $twoFactor->generateRecoveryCodes();
    }

    /**
     * Check if user has 2FA enabled
     */
    public function isEnabled(User $user): bool
    {
        $twoFactor = $user->twoFactorAuth;

        return $twoFactor && $twoFactor->enabled;
    }

    /**
     * Get remaining recovery codes count
     */
    public function getRemainingRecoveryCodesCount(User $user): int
    {
        $twoFactor = $user->twoFactorAuth;

        if (!$twoFactor) {
            return 0;
        }

        return count($twoFactor->recovery_codes ?? []);
    }

    /**
     * Generate QR code SVG
     */
    private function generateQRCode(string $url): string
    {
        $renderer = new ImageRenderer(
            new RendererStyle(200),
            new SvgImageBackEnd()
        );

        $writer = new Writer($renderer);

        return $writer->writeString($url);
    }

    /**
     * Get 2FA setup status
     */
    public function getStatus(User $user): array
    {
        $twoFactor = $user->twoFactorAuth;

        return [
            'enabled' => $twoFactor && $twoFactor->enabled,
            'enabled_at' => $twoFactor?->enabled_at,
            'last_used_at' => $twoFactor?->last_used_at,
            'recovery_codes_count' => $this->getRemainingRecoveryCodesCount($user),
        ];
    }
}
