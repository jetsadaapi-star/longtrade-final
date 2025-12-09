<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSettingResource\Pages;
use App\Filament\Resources\SiteSettingResource\RelationManagers;
use App\Models\SiteSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SiteSettingResource extends Resource
{
    protected static ?string $model = SiteSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationGroup = 'ตั้งค่าระบบ';
    protected static ?string $navigationLabel = 'ตั้งค่าเว็บไซต์ CMS';
    protected static ?string $modelLabel = 'การตั้งค่าเว็บไซต์';
    protected static ?string $pluralModelLabel = 'การตั้งค่าเว็บไซต์';
    protected static ?int $navigationSort = 5;

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Settings')
                    ->tabs([
                        // Tab 1: General Settings
                        Forms\Components\Tabs\Tab::make('ทั่วไป')
                            ->icon('heroicon-o-information-circle')
                            ->schema([
                                Forms\Components\Section::make('ข้อมูลพื้นฐาน')
                                    ->schema([
                                        Forms\Components\TextInput::make('site_name')
                                            ->label('ชื่อเว็บไซต์')
                                            ->required()
                                            ->maxLength(255)
                                            ->default('LongTrade Academy'),
                                        Forms\Components\Textarea::make('site_description')
                                            ->label('คำอธิบายเว็บไซต์')
                                            ->maxLength(500)
                                            ->rows(3),
                                        Forms\Components\TextInput::make('site_tagline')
                                            ->label('สโลแกน')
                                            ->maxLength(255),
                                    ])->columns(1),

                                Forms\Components\Section::make('โลโก้และไอคอน')
                                    ->schema([
                                        Forms\Components\FileUpload::make('logo')
                                            ->label('โลโก้')
                                            ->image()
                                            ->directory('site-settings')
                                            ->visibility('public')
                                            ->imageEditor(),
                                        Forms\Components\FileUpload::make('logo_dark')
                                            ->label('โลโก้ (โหมดมืด)')
                                            ->image()
                                            ->directory('site-settings')
                                            ->visibility('public'),
                                        Forms\Components\FileUpload::make('favicon')
                                            ->label('Favicon')
                                            ->image()
                                            ->directory('site-settings')
                                            ->visibility('public'),
                                    ])->columns(3),
                            ]),

                        // Tab 2: Header & Navbar
                        Forms\Components\Tabs\Tab::make('Header & Navbar')
                            ->icon('heroicon-o-bars-3')
                            ->schema([
                                Forms\Components\Section::make('การตั้งค่า Header')
                                    ->schema([
                                        Forms\Components\Select::make('header_style')
                                            ->label('สไตล์ Header')
                                            ->options([
                                                'default' => 'ปกติ',
                                                'transparent' => 'โปร่งใส',
                                                'sticky' => 'ติดด้านบน',
                                                'sticky-transparent' => 'ติดด้านบน + โปร่งใส',
                                            ])
                                            ->default('sticky'),
                                        Forms\Components\Toggle::make('show_search')
                                            ->label('แสดงช่องค้นหา')
                                            ->default(true),
                                        Forms\Components\Toggle::make('show_language_switcher')
                                            ->label('แสดงตัวเลือกภาษา')
                                            ->default(false),
                                    ])->columns(3),

                                Forms\Components\Section::make('เมนูหลัก (Main Navigation)')
                                    ->schema([
                                        Forms\Components\Repeater::make('header_menu')
                                            ->label('รายการเมนู')
                                            ->schema([
                                                Forms\Components\TextInput::make('label')
                                                    ->label('ชื่อเมนู')
                                                    ->required(),
                                                Forms\Components\TextInput::make('url')
                                                    ->label('ลิงก์')
                                                    ->required(),
                                                Forms\Components\TextInput::make('icon')
                                                    ->label('ไอคอน (Heroicon)')
                                                    ->placeholder('heroicon-o-home'),
                                                Forms\Components\Toggle::make('is_external')
                                                    ->label('เปิดแท็บใหม่'),
                                                Forms\Components\Repeater::make('submenu')
                                                    ->label('เมนูย่อย')
                                                    ->schema([
                                                        Forms\Components\TextInput::make('label')->required(),
                                                        Forms\Components\TextInput::make('url')->required(),
                                                    ])
                                                    ->columns(2)
                                                    ->collapsible(),
                                            ])
                                            ->columns(4)
                                            ->collapsible()
                                            ->itemLabel(fn(array $state): ?string => $state['label'] ?? null),
                                    ]),

                                Forms\Components\Section::make('ปุ่ม CTA')
                                    ->schema([
                                        Forms\Components\TextInput::make('cta_text')
                                            ->label('ข้อความปุ่ม')
                                            ->default('เริ่มเรียนฟรี'),
                                        Forms\Components\TextInput::make('cta_link')
                                            ->label('ลิงก์ปุ่ม')
                                            ->url(),
                                        Forms\Components\ColorPicker::make('cta_color')
                                            ->label('สีปุ่ม'),
                                    ])->columns(3),
                            ]),

                        // Tab 3: Footer
                        Forms\Components\Tabs\Tab::make('Footer')
                            ->icon('heroicon-o-rectangle-group')
                            ->schema([
                                Forms\Components\Section::make('ข้อมูล Footer')
                                    ->schema([
                                        Forms\Components\Textarea::make('footer_text')
                                            ->label('ข้อความลิขสิทธิ์')
                                            ->default('© 2024 LongTrade Academy. All rights reserved.')
                                            ->rows(2),
                                        Forms\Components\RichEditor::make('footer_about')
                                            ->label('เกี่ยวกับเรา (Footer)')
                                            ->toolbarButtons([
                                                'bold',
                                                'italic',
                                                'link',
                                            ]),
                                    ]),

                                Forms\Components\Section::make('เมนู Footer')
                                    ->schema([
                                        Forms\Components\Repeater::make('footer_menu')
                                            ->label('คอลัมน์เมนู')
                                            ->schema([
                                                Forms\Components\TextInput::make('title')
                                                    ->label('หัวข้อคอลัมน์')
                                                    ->required(),
                                                Forms\Components\Repeater::make('links')
                                                    ->label('ลิงก์')
                                                    ->schema([
                                                        Forms\Components\TextInput::make('label')->required(),
                                                        Forms\Components\TextInput::make('url')->required(),
                                                        Forms\Components\Toggle::make('is_external')->label('เปิดแท็บใหม่'),
                                                    ])
                                                    ->columns(3),
                                            ])
                                            ->collapsible()
                                            ->itemLabel(fn(array $state): ?string => $state['title'] ?? null),
                                    ]),
                            ]),

                        // Tab 4: Theme & Colors
                        Forms\Components\Tabs\Tab::make('Theme & Colors')
                            ->icon('heroicon-o-paint-brush')
                            ->schema([
                                Forms\Components\Section::make('ธีมและสี')
                                    ->schema([
                                        Forms\Components\Select::make('theme_mode')
                                            ->label('โหมดธีม')
                                            ->options([
                                                'light' => 'สว่าง',
                                                'dark' => 'มืด',
                                                'auto' => 'อัตโนมัติ',
                                            ])
                                            ->default('auto'),
                                        Forms\Components\ColorPicker::make('primary_color')
                                            ->label('สีหลัก (Primary)')
                                            ->default('#3B82F6'),
                                        Forms\Components\ColorPicker::make('secondary_color')
                                            ->label('สีรอง (Secondary)')
                                            ->default('#8B5CF6'),
                                        Forms\Components\ColorPicker::make('accent_color')
                                            ->label('สีเน้น (Accent)')
                                            ->default('#10B981'),
                                    ])->columns(4),

                                Forms\Components\Section::make('สีพื้นหลัง')
                                    ->schema([
                                        Forms\Components\ColorPicker::make('bg_color_light')
                                            ->label('พื้นหลัง (โหมดสว่าง)')
                                            ->default('#FFFFFF'),
                                        Forms\Components\ColorPicker::make('bg_color_dark')
                                            ->label('พื้นหลัง (โหมดมืด)')
                                            ->default('#0F172A'),
                                    ])->columns(2),

                                Forms\Components\Section::make('ฟอนต์')
                                    ->schema([
                                        Forms\Components\Select::make('font_family')
                                            ->label('ฟอนต์หลัก')
                                            ->options([
                                                'inter' => 'Inter',
                                                'roboto' => 'Roboto',
                                                'poppins' => 'Poppins',
                                                'noto-sans-thai' => 'Noto Sans Thai',
                                                'prompt' => 'Prompt',
                                            ])
                                            ->default('inter'),
                                        Forms\Components\TextInput::make('font_size_base')
                                            ->label('ขนาดฟอนต์พื้นฐาน')
                                            ->default('16px'),
                                    ])->columns(2),
                            ]),

                        // Tab 5: Contact & Social
                        Forms\Components\Tabs\Tab::make('ติดต่อ & Social')
                            ->icon('heroicon-o-chat-bubble-left-right')
                            ->schema([
                                Forms\Components\Section::make('ข้อมูลติดต่อ')
                                    ->schema([
                                        Forms\Components\TextInput::make('contact_email')
                                            ->label('อีเมล')
                                            ->email(),
                                        Forms\Components\TextInput::make('contact_phone')
                                            ->label('เบอร์โทร')
                                            ->tel(),
                                        Forms\Components\Textarea::make('address')
                                            ->label('ที่อยู่')
                                            ->rows(3),
                                        Forms\Components\TextInput::make('google_maps_url')
                                            ->label('Google Maps URL')
                                            ->url(),
                                    ])->columns(2),

                                Forms\Components\Section::make('โซเชียลมีเดีย')
                                    ->schema([
                                        Forms\Components\TextInput::make('facebook_url')
                                            ->label('Facebook')
                                            ->url()
                                            ->prefix('https://'),
                                        Forms\Components\TextInput::make('line_url')
                                            ->label('LINE')
                                            ->url()
                                            ->prefix('https://'),
                                        Forms\Components\TextInput::make('tiktok_url')
                                            ->label('TikTok')
                                            ->url()
                                            ->prefix('https://'),
                                        Forms\Components\TextInput::make('youtube_url')
                                            ->label('YouTube')
                                            ->url()
                                            ->prefix('https://'),
                                        Forms\Components\TextInput::make('instagram_url')
                                            ->label('Instagram')
                                            ->url()
                                            ->prefix('https://'),
                                        Forms\Components\TextInput::make('twitter_url')
                                            ->label('Twitter/X')
                                            ->url()
                                            ->prefix('https://'),
                                    ])->columns(3),
                            ]),

                        // Tab 6: SEO & Analytics
                        Forms\Components\Tabs\Tab::make('SEO & Analytics')
                            ->icon('heroicon-o-chart-bar')
                            ->schema([
                                Forms\Components\Section::make('SEO')
                                    ->schema([
                                        Forms\Components\TextInput::make('meta_title')
                                            ->label('Meta Title')
                                            ->maxLength(60),
                                        Forms\Components\Textarea::make('meta_description')
                                            ->label('Meta Description')
                                            ->maxLength(160)
                                            ->rows(3),
                                        Forms\Components\TagsInput::make('meta_keywords')
                                            ->label('Meta Keywords'),
                                        Forms\Components\FileUpload::make('og_image')
                                            ->label('OG Image (Social Share)')
                                            ->image()
                                            ->directory('site-settings'),
                                    ]),

                                Forms\Components\Section::make('Analytics & Tracking')
                                    ->schema([
                                        Forms\Components\Textarea::make('google_analytics')
                                            ->label('Google Analytics Code')
                                            ->rows(3)
                                            ->placeholder('<!-- Google Analytics -->'),
                                        Forms\Components\Textarea::make('facebook_pixel')
                                            ->label('Facebook Pixel Code')
                                            ->rows(3),
                                        Forms\Components\Textarea::make('custom_head_scripts')
                                            ->label('Custom Head Scripts')
                                            ->rows(3),
                                        Forms\Components\Textarea::make('custom_body_scripts')
                                            ->label('Custom Body Scripts')
                                            ->rows(3),
                                    ])->columns(2),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('site_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('logo')
                    ->searchable(),
                Tables\Columns\TextColumn::make('favicon')
                    ->searchable(),
                Tables\Columns\TextColumn::make('contact_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('contact_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('facebook_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('line_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('tiktok_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('youtube_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSiteSettings::route('/'),
            'create' => Pages\CreateSiteSetting::route('/create'),
            'view' => Pages\ViewSiteSetting::route('/{record}'),
            'edit' => Pages\EditSiteSetting::route('/{record}/edit'),
        ];
    }
}
