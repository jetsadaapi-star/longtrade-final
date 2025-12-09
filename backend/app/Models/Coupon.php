<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Coupon extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'code',
        'description',
        'type',
        'value',
        'min_purchase',
        'max_discount',
        'usage_limit',
        'used_count',
        'valid_from',
        'valid_until',
        'is_active',
    ];

    protected $casts = [
        'value' => 'decimal:2',
        'min_purchase' => 'decimal:2',
        'max_discount' => 'decimal:2',
        'usage_limit' => 'integer',
        'used_count' => 'integer',
        'is_active' => 'boolean',
        'valid_from' => 'datetime',
        'valid_until' => 'datetime',
    ];

    /**
     * ตรวจสอบว่าคูปองใช้งานได้หรือไม่
     */
    public function isValid(): bool
    {
        // ตรวจสอบสถานะ active
        if (!$this->is_active) {
            return false;
        }

        // ตรวจสอบวันที่เริ่มต้น
        if ($this->valid_from && Carbon::now()->isBefore($this->valid_from)) {
            return false;
        }

        // ตรวจสอบวันหมดอายุ
        if ($this->valid_until && Carbon::now()->isAfter($this->valid_until)) {
            return false;
        }

        // ตรวจสอบจำนวนครั้งที่ใช้
        if ($this->usage_limit && $this->used_count >= $this->usage_limit) {
            return false;
        }

        return true;
    }

    /**
     * ตรวจสอบว่าสามารถใช้กับยอดซื้อนี้ได้หรือไม่
     */
    public function canBeUsed(float $amount): bool
    {
        if (!$this->isValid()) {
            return false;
        }

        // ตรวจสอบยอดซื้อขั้นต่ำ
        if ($amount < $this->min_purchase) {
            return false;
        }

        return true;
    }

    /**
     * คำนวณส่วนลด
     */
    public function calculateDiscount(float $amount): float
    {
        if (!$this->canBeUsed($amount)) {
            return 0;
        }

        $discount = 0;

        if ($this->type === 'percentage') {
            $discount = $amount * ($this->value / 100);

            // จำกัดส่วนลดสูงสุด
            if ($this->max_discount && $discount > $this->max_discount) {
                $discount = $this->max_discount;
            }
        } else {
            // fixed_amount
            $discount = $this->value;

            // ส่วนลดต้องไม่เกินยอดซื้อ
            if ($discount > $amount) {
                $discount = $amount;
            }
        }

        return round($discount, 2);
    }

    /**
     * ใช้คูปอง (เพิ่ม used_count)
     */
    public function use(): bool
    {
        if (!$this->isValid()) {
            return false;
        }

        $this->increment('used_count');
        return true;
    }

    /**
     * ยกเลิกการใช้คูปอง (ลด used_count)
     */
    public function unuse(): void
    {
        if ($this->used_count > 0) {
            $this->decrement('used_count');
        }
    }

    /**
     * Scope: คูปองที่ใช้งานได้
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: คูปองที่ยังไม่หมดอายุ
     */
    public function scopeNotExpired($query)
    {
        return $query->where(function ($q) {
            $q->whereNull('valid_until')
                ->orWhere('valid_until', '>=', Carbon::now());
        });
    }

    /**
     * Scope: คูปองที่ยังใช้ได้ (รวมทุกเงื่อนไข)
     */
    public function scopeAvailable($query)
    {
        return $query->active()
            ->notExpired()
            ->where(function ($q) {
                $q->whereNull('valid_from')
                    ->orWhere('valid_from', '<=', Carbon::now());
            })
            ->where(function ($q) {
                $q->whereNull('usage_limit')
                    ->orWhereRaw('used_count < usage_limit');
            });
    }

    /**
     * Get validation error message
     */
    public function getValidationError(float $amount = 0): ?string
    {
        if (!$this->is_active) {
            return 'คูปองนี้ถูกปิดใช้งานแล้ว';
        }

        if ($this->valid_from && Carbon::now()->isBefore($this->valid_from)) {
            return 'คูปองนี้ยังไม่เริ่มใช้งาน';
        }

        if ($this->valid_until && Carbon::now()->isAfter($this->valid_until)) {
            return 'คูปองนี้หมดอายุแล้ว';
        }

        if ($this->usage_limit && $this->used_count >= $this->usage_limit) {
            return 'คูปองนี้ถูกใช้งานครบแล้ว';
        }

        if ($amount > 0 && $amount < $this->min_purchase) {
            return 'ยอดซื้อขั้นต่ำสำหรับคูปองนี้คือ ฿' . number_format((float) $this->min_purchase, 2);
        }

        return null;
    }
}
