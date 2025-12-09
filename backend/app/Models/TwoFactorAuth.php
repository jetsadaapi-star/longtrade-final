<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TwoFactorAuth extends Model
{
    use HasFactory;

    protected $table = 'two_factor_auth';

    protected $fillable = [
        'user_id',
        'enabled',
        'secret',
        'recovery_codes',
        'enabled_at',
        'last_used_at',
    ];

    protected $casts = [
        'enabled' => 'boolean',
        'recovery_codes' => 'array',
        'enabled_at' => 'datetime',
        'last_used_at' => 'datetime',
    ];

    protected $hidden = [
        'secret',
        'recovery_codes',
    ];

    /**
     * Get the user that owns the 2FA settings
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Generate new recovery codes
     */
    public function generateRecoveryCodes(int $count = 8): array
    {
        $codes = [];
        for ($i = 0; $i < $count; $i++) {
            $codes[] = strtoupper(substr(md5(random_bytes(16)), 0, 8));
        }

        $this->update(['recovery_codes' => $codes]);

        return $codes;
    }

    /**
     * Use a recovery code
     */
    public function useRecoveryCode(string $code): bool
    {
        $codes = $this->recovery_codes ?? [];
        $code = strtoupper($code);

        if (($key = array_search($code, $codes)) !== false) {
            unset($codes[$key]);
            $this->update(['recovery_codes' => array_values($codes)]);
            return true;
        }

        return false;
    }
}
