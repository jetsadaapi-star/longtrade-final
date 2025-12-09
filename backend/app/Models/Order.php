<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'order_number',
        'user_id',
        'orderable_type',
        'orderable_id',
        'subtotal',
        'tax',
        'discount',
        'total_amount',
        'currency',
        'status',
        'payment_status',
        'customer_name',
        'customer_email',
        'customer_phone',
        'items',
        'notes',
        'metadata',
        'paid_at',
        'completed_at',
        'cancelled_at',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'tax' => 'decimal:2',
        'discount' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'items' => 'array',
        'metadata' => 'array',
        'paid_at' => 'datetime',
        'completed_at' => 'datetime',
        'cancelled_at' => 'datetime',
    ];

    /**
     * Get the user that owns the order.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the orderable model (Ebook, Course, etc.).
     */
    public function orderable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the payments for the order.
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    /**
     * Generate unique order number.
     */
    public static function generateOrderNumber(): string
    {
        $prefix = 'LT';
        $year = date('Y');
        $lastOrder = self::whereYear('created_at', $year)
            ->orderBy('id', 'desc')
            ->first();

        $number = $lastOrder ? intval(substr($lastOrder->order_number, -5)) + 1 : 1;

        return sprintf('%s-%s-%05d', $prefix, $year, $number);
    }

    /**
     * Check if order is paid.
     */
    public function isPaid(): bool
    {
        return $this->payment_status === 'paid';
    }

    /**
     * Check if order is completed.
     */
    public function isCompleted(): bool
    {
        return $this->status === 'completed';
    }

    /**
     * Mark order as paid.
     */
    public function markAsPaid(): void
    {
        $this->update([
            'payment_status' => 'paid',
            'status' => 'paid',
            'paid_at' => now(),
        ]);
    }
}
