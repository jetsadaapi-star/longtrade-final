<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, HasApiTokens;

    protected $guard_name = 'web';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'avatar',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'phone_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Relationships
    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function lessonCompletions()
    {
        return $this->hasMany(LessonCompletion::class);
    }

    public function quizAttempts()
    {
        return $this->hasMany(QuizAttempt::class);
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }

    // New Relationships
    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }

    public function twoFactorAuth()
    {
        return $this->hasOne(TwoFactorAuth::class);
    }

    public function subscription()
    {
        return $this->hasOne(UserSubscription::class)
            ->where('status', 'active')
            ->latest();
    }

    public function subscriptions()
    {
        return $this->hasMany(UserSubscription::class);
    }

    public function activityLogs()
    {
        return $this->hasMany(ActivityLog::class);
    }

    /**
     * Relationship: Promotions used by this user
     */
    public function promotions()
    {
        return $this->belongsToMany(Promotion::class, 'promotion_user')
            ->withPivot(['usage_count', 'discount_amount', 'order_amount', 'used_at'])
            ->withTimestamps();
    }

    /**
     * Get promotions ordered by most recent usage
     */
    public function usedPromotions()
    {
        return $this->promotions()->orderBy('promotion_user.used_at', 'desc');
    }

    // Helper Methods
    public function hasActiveSubscription(): bool
    {
        return $this->subscription()->exists() &&
            $this->subscription->isActive();
    }

    public function has2FAEnabled(): bool
    {
        return $this->twoFactorAuth && $this->twoFactorAuth->enabled;
    }

    public function getSubscriptionPlan()
    {
        return $this->subscription?->plan;
    }

    public function canAccessFeature(string $feature): bool
    {
        $plan = $this->getSubscriptionPlan();
        return $plan && $plan->hasFeature($feature);
    }

    public function hasSocialAccount(string $provider): bool
    {
        return $this->socialAccounts()->where('provider', $provider)->exists();
    }
}
