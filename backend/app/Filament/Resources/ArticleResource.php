<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Filament\Resources\ArticleResource\RelationManagers;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Database\Eloquent\Collection;


class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'เนื้อหา';
    protected static ?string $navigationLabel = 'บทความ';
    protected static ?string $modelLabel = 'บทความ';
    protected static ?string $pluralModelLabel = 'บทความทั้งหมด';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Article')
                    ->tabs([
                        // Basic Information Tab
                        Forms\Components\Tabs\Tab::make('ข้อมูลพื้นฐาน')
                            ->icon('heroicon-o-document-text')
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->label('หัวข้อบทความ')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null),
                                Forms\Components\TextInput::make('slug')
                                    ->label('Slug (URL)')
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true),
                                Forms\Components\Select::make('category_id')
                                    ->label('หมวดหมู่')
                                    ->relationship('category', 'name')
                                    ->required()
                                    ->searchable()
                                    ->preload(),
                                Forms\Components\TextInput::make('author')
                                    ->label('ผู้เขียน')
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('read_time')
                                    ->label('เวลาอ่าน (นาที)')
                                    ->numeric()
                                    ->minValue(1),
                                Forms\Components\TagsInput::make('tags')
                                    ->label('แท็ก')
                                    ->placeholder('กด Enter เพื่อเพิ่มแท็ก')
                                    ->columnSpanFull(),
                                \Awcodes\Curator\Components\Forms\CuratorPicker::make('featured_image')
                                    ->label('รูปปก')
                                    ->buttonLabel('เลือกรูปภาพ')
                                    ->columnSpanFull(),
                                Forms\Components\Textarea::make('excerpt')
                                    ->label('สรุปย่อ')
                                    ->rows(3)
                                    ->columnSpanFull(),
                                Forms\Components\RichEditor::make('content')
                                    ->label('เนื้อหา')
                                    ->required()
                                    ->columnSpanFull(),
                            ])->columns(2),

                        // SEO Tab
                        Forms\Components\Tabs\Tab::make('SEO')
                            ->icon('heroicon-o-magnifying-glass')
                            ->schema([
                                Forms\Components\Section::make('Meta Tags')
                                    ->description('ข้อมูล SEO สำหรับ Google Search')
                                    ->schema([
                                        Forms\Components\TextInput::make('meta_title')
                                            ->label('Meta Title')
                                            ->maxLength(60)
                                            ->helperText('แนะนำ 30-60 ตัวอักษร')
                                            ->placeholder('ถ้าไม่กรอก จะใช้หัวข้อบทความ'),
                                        Forms\Components\Textarea::make('meta_description')
                                            ->label('Meta Description')
                                            ->rows(3)
                                            ->maxLength(160)
                                            ->helperText('แนะนำ 120-160 ตัวอักษร')
                                            ->placeholder('คำอธิบายที่จะแสดงใน Google Search'),
                                        Forms\Components\TextInput::make('meta_keywords')
                                            ->label('Meta Keywords')
                                            ->placeholder('คำค้นหา, คำสำคัญ, แยกด้วยคอมม่า'),
                                        Forms\Components\TextInput::make('focus_keyword')
                                            ->label('Focus Keyword')
                                            ->helperText('คำค้นหาหลักที่ต้องการให้บทความนี้ติดอันดับ')
                                            ->placeholder('เช่น: เทคนิคเทรด forex'),
                                    ])->columns(2),

                                Forms\Components\Section::make('Open Graph (Facebook)')
                                    ->description('การแสดงผลเมื่อแชร์บน Facebook')
                                    ->schema([
                                        Forms\Components\TextInput::make('og_title')
                                            ->label('OG Title')
                                            ->maxLength(60)
                                            ->placeholder('ถ้าไม่กรอก จะใช้ Meta Title'),
                                        Forms\Components\Textarea::make('og_description')
                                            ->label('OG Description')
                                            ->rows(2)
                                            ->maxLength(200)
                                            ->placeholder('ถ้าไม่กรอก จะใช้ Meta Description'),
                                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('og_image')
                                            ->label('OG Image')
                                            ->buttonLabel('เลือกรูปภาพ')
                                            ->helperText('แนะนำ 1200x630px (ถ้าไม่กรอก จะใช้รูปปก)')
                                            ->columnSpanFull(),
                                    ])->columns(2)->collapsible(),

                                Forms\Components\Section::make('Twitter Card')
                                    ->description('การแสดงผลเมื่อแชร์บน Twitter/X')
                                    ->schema([
                                        Forms\Components\Select::make('twitter_card')
                                            ->label('Card Type')
                                            ->options([
                                                'summary' => 'Summary (รูปเล็ก)',
                                                'summary_large_image' => 'Summary Large Image (รูปใหญ่)',
                                            ])
                                            ->default('summary_large_image'),
                                        Forms\Components\TextInput::make('twitter_title')
                                            ->label('Twitter Title')
                                            ->maxLength(60)
                                            ->placeholder('ถ้าไม่กรอก จะใช้ OG Title'),
                                        Forms\Components\Textarea::make('twitter_description')
                                            ->label('Twitter Description')
                                            ->rows(2)
                                            ->maxLength(200)
                                            ->placeholder('ถ้าไม่กรอก จะใช้ OG Description'),
                                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('twitter_image')
                                            ->label('Twitter Image')
                                            ->buttonLabel('เลือกรูปภาพ')
                                            ->helperText('แนะนำ 1200x675px (ถ้าไม่กรอก จะใช้ OG Image)')
                                            ->columnSpanFull(),
                                    ])->columns(2)->collapsible(),

                                Forms\Components\Section::make('Advanced SEO')
                                    ->description('การตั้งค่า SEO ขั้นสูง')
                                    ->schema([
                                        Forms\Components\TextInput::make('canonical_url')
                                            ->label('Canonical URL')
                                            ->url()
                                            ->placeholder('https://example.com/original-article')
                                            ->helperText('ใช้เมื่อบทความนี้ซ้ำกับที่อื่น'),
                                        Forms\Components\Select::make('schema_type')
                                            ->label('Schema Type')
                                            ->options([
                                                'Article' => 'Article (ทั่วไป)',
                                                'BlogPosting' => 'Blog Posting',
                                                'NewsArticle' => 'News Article',
                                                'TechArticle' => 'Tech Article',
                                            ])
                                            ->default('Article'),
                                        Forms\Components\Placeholder::make('seo_score_display')
                                            ->label('SEO Score')
                                            ->content(fn($record) => $record ? $record->seo_score . '/100' : 'จะคำนวณหลังบันทึก')
                                            ->helperText('คะแนน SEO จะคำนวณอัตโนมัติเมื่อบันทึก'),
                                    ])->columns(3)->collapsible(),
                            ]),

                        // Publishing Tab
                        Forms\Components\Tabs\Tab::make('การเผยแพร่')
                            ->icon('heroicon-o-rocket-launch')
                            ->schema([
                                Forms\Components\Toggle::make('is_published')
                                    ->label('เผยแพร่')
                                    ->default(true)
                                    ->inline(false),
                                Forms\Components\Toggle::make('is_featured')
                                    ->label('แนะนำ (Featured)')
                                    ->default(false)
                                    ->inline(false),
                                Forms\Components\DateTimePicker::make('published_at')
                                    ->label('วันที่เผยแพร่')
                                    ->default(now())
                                    ->required(),
                                Forms\Components\Placeholder::make('views_count_display')
                                    ->label('จำนวนผู้เข้าชม')
                                    ->content(fn($record) => $record ? number_format($record->views_count) . ' ครั้ง' : '0 ครั้ง'),
                            ])->columns(2),
                    ])
                    ->columnSpanFull(),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('featured_image')
                    ->label('รูป')
                    ->circular(),
                Tables\Columns\TextColumn::make('title')
                    ->label('หัวข้อ')
                    ->searchable()
                    ->sortable()
                    ->limit(50)
                    ->tooltip(function (Tables\Columns\TextColumn $column): ?string {
                        $state = $column->getState();
                        if (strlen($state) <= 50) {
                            return null;
                        }
                        return $state;
                    }),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('หมวดหมู่')
                    ->badge()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('seo_score')
                    ->label('SEO Score')
                    ->badge()
                    ->color(fn(int $state): string => match (true) {
                        $state >= 80 => 'success',
                        $state >= 60 => 'warning',
                        default => 'danger',
                    })
                    ->formatStateUsing(fn(int $state): string => $state . '/100')
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_published')
                    ->label('เผยแพร่')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->label('แนะนำ')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\TextColumn::make('views_count')
                    ->label('ผู้เข้าชม')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn(int $state): string => number_format($state)),
                Tables\Columns\TextColumn::make('published_at')
                    ->label('วันที่เผยแพร่')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('author')
                    ->label('ผู้เขียน')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('read_time')
                    ->label('เวลาอ่าน')
                    ->formatStateUsing(fn(?int $state): string => $state ? $state . ' นาที' : '-')
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('สร้างเมื่อ')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('แก้ไขล่าสุด')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_published')
                    ->label('สถานะการเผยแพร่')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('เผยแพร่แล้ว')
                    ->falseLabel('ฉบับร่าง'),
                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('บทความแนะนำ')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('แนะนำ')
                    ->falseLabel('ทั่วไป'),
                Tables\Filters\SelectFilter::make('category_id')
                    ->label('หมวดหมู่')
                    ->relationship('category', 'name')
                    ->searchable()
                    ->preload(),
                Tables\Filters\Filter::make('seo_score')
                    ->form([
                        Forms\Components\Select::make('score_range')
                            ->label('คะแนน SEO')
                            ->options([
                                'high' => 'สูง (80-100)',
                                'medium' => 'ปานกลาง (60-79)',
                                'low' => 'ต่ำ (0-59)',
                            ])
                            ->placeholder('ทั้งหมด'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['score_range'] === 'high',
                                fn(Builder $query): Builder => $query->where('seo_score', '>=', 80),
                            )
                            ->when(
                                $data['score_range'] === 'medium',
                                fn(Builder $query): Builder => $query->whereBetween('seo_score', [60, 79]),
                            )
                            ->when(
                                $data['score_range'] === 'low',
                                fn(Builder $query): Builder => $query->where('seo_score', '<', 60),
                            );
                    }),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('publish')
                        ->label('เผยแพร่')
                        ->icon('heroicon-o-check-circle')
                        ->requiresConfirmation()
                        ->action(fn(Collection $records) => $records->each->update(['is_published' => true]))
                        ->deselectRecordsAfterCompletion(),
                    Tables\Actions\BulkAction::make('unpublish')
                        ->label('ยกเลิกการเผยแพร่')
                        ->icon('heroicon-o-x-circle')
                        ->requiresConfirmation()
                        ->action(fn(Collection $records) => $records->each->update(['is_published' => false]))
                        ->deselectRecordsAfterCompletion(),
                ]),
            ])
            ->defaultSort('published_at', 'desc');
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
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'view' => Pages\ViewArticle::route('/{record}'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
