<?php

namespace Database\Seeders;

use App\Models\SystemSetting;
use Illuminate\Database\Seeder;

class SystemSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // Email Settings
            ['key' => 'email_provider', 'value' => 'log', 'type' => 'string', 'group' => 'email', 'description' => 'Email provider (smtp, sendgrid, ses, log)'],
            ['key' => 'email_from_address', 'value' => 'noreply@longtrade.com', 'type' => 'string', 'group' => 'email', 'description' => 'From email address'],
            ['key' => 'email_from_name', 'value' => 'LongTrade Platform', 'type' => 'string', 'group' => 'email', 'description' => 'From name'],
            ['key' => 'smtp_host', 'value' => '', 'type' => 'string', 'group' => 'email', 'description' => 'SMTP host'],
            ['key' => 'smtp_port', 'value' => '587', 'type' => 'integer', 'group' => 'email', 'description' => 'SMTP port'],
            ['key' => 'smtp_username', 'value' => '', 'type' => 'string', 'group' => 'email', 'description' => 'SMTP username'],
            ['key' => 'smtp_password', 'value' => '', 'type' => 'string', 'group' => 'email', 'description' => 'SMTP password'],
            ['key' => 'smtp_encryption', 'value' => 'tls', 'type' => 'string', 'group' => 'email', 'description' => 'SMTP encryption (tls, ssl)'],

            // SMS Settings
            ['key' => 'sms_provider', 'value' => 'log', 'type' => 'string', 'group' => 'sms', 'description' => 'SMS provider (log, twilio, custom)'],
            ['key' => 'sms_from_number', 'value' => '', 'type' => 'string', 'group' => 'sms', 'description' => 'SMS from number'],
            ['key' => 'twilio_account_sid', 'value' => '', 'type' => 'string', 'group' => 'sms', 'description' => 'Twilio Account SID'],
            ['key' => 'twilio_auth_token', 'value' => '', 'type' => 'string', 'group' => 'sms', 'description' => 'Twilio Auth Token'],
            ['key' => 'twilio_from_number', 'value' => '', 'type' => 'string', 'group' => 'sms', 'description' => 'Twilio from number'],

            // Verification Settings
            ['key' => 'verification_required', 'value' => 'false', 'type' => 'boolean', 'group' => 'verification', 'description' => 'Require verification after registration'],
            ['key' => 'verification_code_length', 'value' => '6', 'type' => 'integer', 'group' => 'verification', 'description' => 'Verification code length'],
            ['key' => 'verification_code_expires_minutes', 'value' => '15', 'type' => 'integer', 'group' => 'verification', 'description' => 'Code expiration time in minutes'],
        ];

        foreach ($settings as $setting) {
            SystemSetting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }

        $this->command->info('System settings seeded successfully!');
    }
}
