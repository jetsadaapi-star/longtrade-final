<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;

class SiteSettingController extends Controller
{
    public function index()
    {
        $settings = SiteSetting::first();

        if (!$settings) {
            return response()->json([
                'site_name' => 'LongTrade Academy',
                'site_description' => '',
                'logo' => null,
                'favicon' => null,
                'contact_email' => '',
                'contact_phone' => '',
                'address' => '',
                'facebook_url' => '',
                'line_url' => '',
                'tiktok_url' => '',
                'youtube_url' => '',
                'header_menu' => [],
                'footer_menu' => [],
                'cta_text' => 'สอบถามข้อมูล',
                'cta_link' => '',
                'footer_text' => '',
            ]);
        }

        // Append full URL for images
        $data = $settings->toArray();
        if ($settings->logo) {
            $data['logo_url'] = asset('storage/' . $settings->logo);
        }
        if ($settings->favicon) {
            $data['favicon_url'] = asset('storage/' . $settings->favicon);
        }

        return response()->json($data);
    }
}
