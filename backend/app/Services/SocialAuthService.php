<?php

namespace App\Services;

use App\Models\User;
use App\Models\SocialAccount;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SocialAuthService
{
    /**
     * Handle social login redirect
     */
    public function redirectToProvider(string $provider): \Symfony\Component\HttpFoundation\RedirectResponse
    {
        $this->validateProvider($provider);

        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle social login callback
     */
    public function handleProviderCallback(string $provider): array
    {
        $this->validateProvider($provider);

        try {
            $socialUser = Socialite::driver($provider)->user();

            // Find or create user
            $user = $this->findOrCreateUser($socialUser, $provider);

            // Create or update social account
            $this->updateSocialAccount($user, $socialUser, $provider);

            // Generate auth token
            $token = $user->createToken('social-login')->plainTextToken;

            return [
                'user' => $user,
                'token' => $token,
                'provider' => $provider,
            ];
        } catch (\Exception $e) {
            throw new \Exception("Social login failed: " . $e->getMessage());
        }
    }

    /**
     * Find or create user from social data
     */
    private function findOrCreateUser($socialUser, string $provider): User
    {
        // Check if social account exists
        $socialAccount = SocialAccount::where('provider', $provider)
            ->where('provider_id', $socialUser->getId())
            ->first();

        if ($socialAccount) {
            return $socialAccount->user;
        }

        // Check if user exists with same email
        $user = User::where('email', $socialUser->getEmail())->first();

        if (!$user) {
            // Create new user
            $user = User::create([
                'name' => $socialUser->getName() ?? $socialUser->getNickname() ?? 'User',
                'email' => $socialUser->getEmail() ?? $socialUser->getId() . '@' . $provider . '.local',
                'password' => Hash::make(Str::random(32)), // Random password
                'email_verified_at' => now(), // Auto-verify social logins
            ]);
        }

        return $user;
    }

    /**
     * Update or create social account
     */
    private function updateSocialAccount(User $user, $socialUser, string $provider): SocialAccount
    {
        return SocialAccount::updateOrCreate(
            [
                'user_id' => $user->id,
                'provider' => $provider,
            ],
            [
                'provider_id' => $socialUser->getId(),
                'provider_token' => $socialUser->token,
                'provider_refresh_token' => $socialUser->refreshToken ?? null,
                'token_expires_at' => $socialUser->expiresIn ? now()->addSeconds($socialUser->expiresIn) : null,
                'avatar' => $socialUser->getAvatar(),
                'provider_data' => [
                    'name' => $socialUser->getName(),
                    'nickname' => $socialUser->getNickname(),
                    'email' => $socialUser->getEmail(),
                ],
            ]
        );
    }

    /**
     * Link social account to existing user
     */
    public function linkAccount(User $user, string $provider): array
    {
        $this->validateProvider($provider);

        try {
            $socialUser = Socialite::driver($provider)->user();

            // Check if this social account is already linked to another user
            $existingAccount = SocialAccount::where('provider', $provider)
                ->where('provider_id', $socialUser->getId())
                ->where('user_id', '!=', $user->id)
                ->first();

            if ($existingAccount) {
                throw new \Exception('This social account is already linked to another user');
            }

            // Create or update social account
            $socialAccount = $this->updateSocialAccount($user, $socialUser, $provider);

            return [
                'success' => true,
                'provider' => $provider,
                'social_account' => $socialAccount,
            ];
        } catch (\Exception $e) {
            throw new \Exception("Account linking failed: " . $e->getMessage());
        }
    }

    /**
     * Unlink social account
     */
    public function unlinkAccount(User $user, string $provider): bool
    {
        $this->validateProvider($provider);

        $socialAccount = SocialAccount::where('user_id', $user->id)
            ->where('provider', $provider)
            ->first();

        if (!$socialAccount) {
            throw new \Exception('Social account not found');
        }

        // Check if user has password (prevent account lockout)
        if (!$user->password && $user->socialAccounts()->count() === 1) {
            throw new \Exception('Cannot unlink last social account without setting a password first');
        }

        return $socialAccount->delete();
    }

    /**
     * Get user's linked social accounts
     */
    public function getLinkedAccounts(User $user): array
    {
        return $user->socialAccounts->map(function ($account) {
            return [
                'provider' => $account->provider,
                'provider_id' => $account->provider_id,
                'avatar' => $account->avatar,
                'linked_at' => $account->created_at,
            ];
        })->toArray();
    }

    /**
     * Validate provider
     */
    private function validateProvider(string $provider): void
    {
        $allowedProviders = ['line', 'facebook', 'google'];

        if (!in_array($provider, $allowedProviders)) {
            throw new \Exception("Invalid provider: {$provider}");
        }
    }

    /**
     * Refresh social account token
     */
    public function refreshToken(SocialAccount $socialAccount): bool
    {
        if (!$socialAccount->provider_refresh_token) {
            return false;
        }

        try {
            $socialUser = Socialite::driver($socialAccount->provider)
                ->refreshToken($socialAccount->provider_refresh_token)
                ->user();

            $socialAccount->update([
                'provider_token' => $socialUser->token,
                'provider_refresh_token' => $socialUser->refreshToken ?? $socialAccount->provider_refresh_token,
                'token_expires_at' => $socialUser->expiresIn ? now()->addSeconds($socialUser->expiresIn) : null,
            ]);

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
