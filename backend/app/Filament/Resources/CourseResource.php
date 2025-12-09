<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseResource\Pages;
use App\Models\Course;
use App\Models\Category;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class CourseResource extends Resource
{
    protected static ?string $model = Course::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';
    protected static ?string $navigationGroup = 'เนื้อหา';
    protected static ?string $navigationLabel = 'คอร์สเรียน';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Tabs')
                    ->tabs([
                        // Tab 1: ข้อมูลพื้นฐาน
                        Forms\Components\Tabs\Tab::make('ข้อมูลพื้นฐาน')
                            ->icon('heroicon-o-information-circle')
                            ->schema([
                                Forms\Components\Section::make('ข้อมูลคอร์ส')
                                    ->schema([
                                        Forms\Components\TextInput::make('title')
                                            ->label('ชื่อคอร์ส')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(
                                                fn(string $operation, $state, Forms\Set $set) =>
                                                $operation === 'create' ? $set('slug', Str::slug($state)) : null
                                            )
                                            ->columnSpanFull(),

                                        Forms\Components\TextInput::make('slug')
                                            ->label('Slug (URL)')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true)
                                            ->helperText('ใช้สำหรับ URL ของคอร์ส')
                                            ->columnSpanFull(),

                                        Forms\Components\Select::make('category_id')
                                            ->label('หมวดหมู่')
                                            ->relationship('category', 'name')
                                            ->required()
                                            ->searchable()
                                            ->preload()
                                            ->createOptionForm([
                                                Forms\Components\TextInput::make('name')
                                                    ->label('ชื่อหมวดหมู่')
                                                    ->required(),
                                                Forms\Components\TextInput::make('slug')
                                                    ->label('Slug')
                                                    ->required(),
                                            ]),

                                        Forms\Components\Select::make('level')
                                            ->label('ระดับความยาก')
                                            ->options([
                                                'beginner' => 'เริ่มต้น',
                                                'intermediate' => 'ปานกลาง',
                                                'advanced' => 'ขั้นสูง',
                                                'all' => 'ทุกระดับ',
                                            ])
                                            ->default('all')
                                            ->required(),

                                        Forms\Components\TextInput::make('price')
                                            ->label('ราคา')
                                            ->numeric()
                                            ->prefix('฿')
                                            ->required()
                                            ->default(0),

                                        Forms\Components\TextInput::make('original_price')
                                            ->label('ราคาเต็ม (ก่อนลด)')
                                            ->numeric()
                                            ->prefix('฿')
                                            ->helperText('ถ้าไม่มีส่วนลด ให้ใส่เท่ากับราคาปกติ'),

                                        Forms\Components\TextInput::make('hours')
                                            ->label('จำนวนชั่วโมง')
                                            ->numeric()
                                            ->step(0.1)
                                            ->suffix('ชม.')
                                            ->helperText('เช่น 2.5 สำหรับ 2 ชั่วโมง 30 นาที'),

                                        Forms\Components\TextInput::make('lessons_count')
                                            ->label('จำนวนบทเรียน')
                                            ->numeric()
                                            ->default(0)
                                            ->helperText('จะอัพเดทอัตโนมัติจากจำนวน lessons'),

                                        Forms\Components\TextInput::make('order')
                                            ->label('ลำดับการแสดง')
                                            ->numeric()
                                            ->default(0)
                                            ->helperText('เลขน้อยแสดงก่อน'),
                                    ])->columns(2),

                                Forms\Components\Section::make('รายละเอียด')
                                    ->schema([
                                        Forms\Components\RichEditor::make('description')
                                            ->label('คำอธิบายคอร์ส')
                                            ->required()
                                            ->columnSpanFull()
                                            ->toolbarButtons([
                                                'bold',
                                                'italic',
                                                'underline',
                                                'bulletList',
                                                'orderedList',
                                                'link',
                                                'undo',
                                                'redo',
                                            ]),

                                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('cover')
                                            ->label('รูปปกคอร์ส')
                                            ->buttonLabel('เลือกรูปภาพ')
                                            ->helperText('ขนาดแนะนำ: 1280x720px')
                                            ->columnSpanFull(),
                                    ]),

                                Forms\Components\Section::make('สถานะ')
                                    ->schema([
                                        Forms\Components\Toggle::make('is_published')
                                            ->label('เผยแพร่คอร์ส')
                                            ->default(true)
                                            ->helperText('เปิดเพื่อให้ผู้ใช้เห็นคอร์สนี้'),

                                        Forms\Components\Toggle::make('is_featured')
                                            ->label('คอร์สแนะนำ')
                                            ->default(false)
                                            ->helperText('แสดงในหน้าแรกและหน้าคอร์สแนะนำ'),
                                    ])->columns(2),
                            ]),

                        // Tab 2: เนื้อหาคอร์ส
                        Forms\Components\Tabs\Tab::make('เนื้อหาคอร์ส')
                            ->icon('heroicon-o-book-open')
                            ->schema([
                                Forms\Components\Section::make('Sections และ Lessons')
                                    ->description('จัดการเนื้อหาคอร์สแบ่งเป็น Sections และ Lessons')
                                    ->schema([
                                        Forms\Components\Repeater::make('sections')
                                            ->label('Sections')
                                            ->schema([
                                                Forms\Components\TextInput::make('id')
                                                    ->label('Section ID')
                                                    ->default(fn() => 'section-' . Str::random(8))
                                                    ->required()
                                                    ->disabled()
                                                    ->dehydrated(),

                                                Forms\Components\TextInput::make('title')
                                                    ->label('ชื่อ Section')
                                                    ->required()
                                                    ->columnSpanFull(),

                                                Forms\Components\Repeater::make('lessons')
                                                    ->label('Lessons')
                                                    ->schema([
                                                        Forms\Components\TextInput::make('id')
                                                            ->label('Lesson ID')
                                                            ->default(fn() => 'lesson-' . Str::random(8))
                                                            ->required()
                                                            ->disabled()
                                                            ->dehydrated(),

                                                        Forms\Components\TextInput::make('title')
                                                            ->label('ชื่อบทเรียน')
                                                            ->required()
                                                            ->columnSpanFull(),

                                                        Forms\Components\Select::make('video_type')
                                                            ->label('ประเภทวิดีโอ')
                                                            ->options([
                                                                'youtube' => 'YouTube',
                                                                'upload' => 'อัพโหลดวิดีโอ',
                                                            ])
                                                            ->default('youtube')
                                                            ->live()
                                                            ->required(),

                                                        Forms\Components\TextInput::make('video_id')
                                                            ->label('YouTube Video ID หรือ URL')
                                                            ->helperText('แปะ URL เต็มได้เลย (เช่น youtube.com/watch?v=...) หรือใส่แค่ ID')
                                                            ->placeholder('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                                                            ->visible(fn(Forms\Get $get) => $get('video_type') === 'youtube')
                                                            ->live(onBlur: true)
                                                            ->afterStateUpdated(function ($state, Forms\Set $set) {
                                                                if (empty($state))
                                                                    return;

                                                                // Regex to extract YouTube ID
                                                                $pattern = '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i';
                                                                if (preg_match($pattern, $state, $matches)) {
                                                                    $set('video_id', $matches[1]);
                                                                }
                                                            }),

                                                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('video_file')
                                                            ->label('ไฟล์วิดีโอ')
                                                            ->buttonLabel('เลือกวิดีโอจากคลัง / อัพโหลดใหม่')
                                                            ->acceptedFileTypes(['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'])
                                                            ->visible(fn(Forms\Get $get) => $get('video_type') === 'upload'),

                                                        Forms\Components\TextInput::make('duration')
                                                            ->label('ระยะเวลา')
                                                            ->placeholder('10:30')
                                                            ->helperText('รูปแบบ: MM:SS หรือ HH:MM:SS'),

                                                        Forms\Components\Textarea::make('description')
                                                            ->label('คำอธิบาย')
                                                            ->rows(3)
                                                            ->columnSpanFull(),
                                                    ])
                                                    ->columns(2)
                                                    ->defaultItems(1)
                                                    ->reorderable()
                                                    ->collapsible()
                                                    ->itemLabel(fn(array $state): ?string => $state['title'] ?? null)
                                                    ->addActionLabel('เพิ่มบทเรียน')
                                                    ->columnSpanFull(),
                                            ])
                                            ->columns(1)
                                            ->defaultItems(1)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn(array $state): ?string => $state['title'] ?? null)
                                            ->addActionLabel('เพิ่ม Section')
                                            ->columnSpanFull(),
                                    ]),

                                Forms\Components\Section::make('สิ่งที่จะได้เรียนรู้')
                                    ->schema([
                                        Forms\Components\Repeater::make('what_you_learn')
                                            ->label('รายการสิ่งที่จะได้เรียนรู้')
                                            ->simple(
                                                Forms\Components\TextInput::make('item')
                                                    ->label('รายการ')
                                                    ->required()
                                            )
                                            ->defaultItems(3)
                                            ->addActionLabel('เพิ่มรายการ')
                                            ->columnSpanFull(),
                                    ]),

                                Forms\Components\Section::make('ความต้องการ')
                                    ->schema([
                                        Forms\Components\Repeater::make('requirements')
                                            ->label('สิ่งที่ต้องเตรียม')
                                            ->simple(
                                                Forms\Components\TextInput::make('item')
                                                    ->label('รายการ')
                                                    ->required()
                                            )
                                            ->defaultItems(2)
                                            ->addActionLabel('เพิ่มรายการ')
                                            ->columnSpanFull(),
                                    ]),
                            ]),

                        // Tab 3: แบบทดสอบ
                        Forms\Components\Tabs\Tab::make('แบบทดสอบ')
                            ->icon('heroicon-o-clipboard-document-check')
                            ->schema([
                                Forms\Components\Section::make('Quiz Questions')
                                    ->description('สร้างแบบทดสอบสำหรับคอร์สนี้')
                                    ->schema([
                                        Forms\Components\Repeater::make('quiz')
                                            ->label('คำถาม')
                                            ->schema([
                                                Forms\Components\TextInput::make('id')
                                                    ->label('Question ID')
                                                    ->default(fn() => rand(1, 9999))
                                                    ->numeric()
                                                    ->required(),

                                                Forms\Components\Textarea::make('question')
                                                    ->label('คำถาม')
                                                    ->required()
                                                    ->rows(2)
                                                    ->columnSpanFull(),

                                                Forms\Components\Repeater::make('options')
                                                    ->label('ตัวเลือก')
                                                    ->simple(
                                                        Forms\Components\TextInput::make('option')
                                                            ->label('ตัวเลือก')
                                                            ->required()
                                                    )
                                                    ->defaultItems(4)
                                                    ->minItems(2)
                                                    ->maxItems(6)
                                                    ->addActionLabel('เพิ่มตัวเลือก')
                                                    ->columnSpanFull(),

                                                Forms\Components\Select::make('correct_answer')
                                                    ->label('คำตอบที่ถูกต้อง')
                                                    ->options([
                                                        0 => 'ตัวเลือกที่ 1',
                                                        1 => 'ตัวเลือกที่ 2',
                                                        2 => 'ตัวเลือกที่ 3',
                                                        3 => 'ตัวเลือกที่ 4',
                                                        4 => 'ตัวเลือกที่ 5',
                                                        5 => 'ตัวเลือกที่ 6',
                                                    ])
                                                    ->required()
                                                    ->helperText('เลือก index ของคำตอบที่ถูกต้อง (เริ่มจาก 0)'),

                                                Forms\Components\Textarea::make('explanation')
                                                    ->label('คำอธิบาย (ไม่บังคับ)')
                                                    ->rows(2)
                                                    ->columnSpanFull(),
                                            ])
                                            ->columns(2)
                                            ->defaultItems(2)
                                            ->reorderable()
                                            ->collapsible()
                                            ->itemLabel(fn(array $state): ?string => $state['question'] ?? 'คำถามใหม่')
                                            ->addActionLabel('เพิ่มคำถาม')
                                            ->columnSpanFull(),
                                    ]),
                            ]),

                        // Tab 4: การตั้งค่า
                        Forms\Components\Tabs\Tab::make('การตั้งค่า')
                            ->icon('heroicon-o-cog-6-tooth')
                            ->schema([
                                Forms\Components\Section::make('การเข้าถึง')
                                    ->schema([
                                        Forms\Components\TextInput::make('unlock_code')
                                            ->label('รหัสปลดล็อค')
                                            ->maxLength(255)
                                            ->helperText('รหัสที่ผู้ใช้ต้องกรอกเพื่อเข้าถึงคอร์ส (ถ้ามี)')
                                            ->columnSpanFull(),
                                    ]),

                                Forms\Components\Section::make('SEO')
                                    ->description('ตั้งค่า SEO สำหรับคอร์สนี้')
                                    ->schema([
                                        Forms\Components\TextInput::make('meta_title')
                                            ->label('Meta Title')
                                            ->maxLength(60)
                                            ->helperText('ชื่อที่แสดงใน search engine (แนะนำไม่เกิน 60 ตัวอักษร)')
                                            ->columnSpanFull(),

                                        Forms\Components\Textarea::make('meta_description')
                                            ->label('Meta Description')
                                            ->maxLength(160)
                                            ->rows(3)
                                            ->helperText('คำอธิบายที่แสดงใน search engine (แนะนำไม่เกิน 160 ตัวอักษร)')
                                            ->columnSpanFull(),

                                        Forms\Components\TextInput::make('meta_keywords')
                                            ->label('Meta Keywords')
                                            ->helperText('คำค้นหา คั่นด้วยเครื่องหมายจุลภาค')
                                            ->columnSpanFull(),

                                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('og_image')
                                            ->label('OG Image (สำหรับ Social Media)')
                                            ->buttonLabel('เลือกรูปภาพ')
                                            ->helperText('รูปที่แสดงเมื่อแชร์ใน Facebook, Twitter, etc.')
                                            ->columnSpanFull(),
                                    ]),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('cover')
                    ->label('ปก')
                    ->circular(),

                Tables\Columns\TextColumn::make('title')
                    ->label('ชื่อคอร์ส')
                    ->searchable()
                    ->sortable()
                    ->limit(50),

                Tables\Columns\TextColumn::make('category.name')
                    ->label('หมวดหมู่')
                    ->sortable()
                    ->badge(),

                Tables\Columns\TextColumn::make('price')
                    ->label('ราคา')
                    ->money('THB')
                    ->sortable(),

                Tables\Columns\TextColumn::make('lessons_count')
                    ->label('บทเรียน')
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('level')
                    ->label('ระดับ')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'beginner' => 'success',
                        'intermediate' => 'warning',
                        'advanced' => 'danger',
                        default => 'gray',
                    }),

                Tables\Columns\IconColumn::make('is_published')
                    ->label('เผยแพร่')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\IconColumn::make('is_featured')
                    ->label('แนะนำ')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('สร้างเมื่อ')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('category', 'name')
                    ->label('หมวดหมู่'),

                Tables\Filters\SelectFilter::make('level')
                    ->label('ระดับ')
                    ->options([
                        'beginner' => 'เริ่มต้น',
                        'intermediate' => 'ปานกลาง',
                        'advanced' => 'ขั้นสูง',
                        'all' => 'ทุกระดับ',
                    ]),

                Tables\Filters\TernaryFilter::make('is_published')
                    ->label('เผยแพร่'),

                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('แนะนำ'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            \App\Filament\Resources\CourseResource\RelationManagers\EnrollmentsRelationManager::class,
            \App\Filament\Resources\CourseResource\RelationManagers\QuizAttemptsRelationManager::class,
            \App\Filament\Resources\CourseResource\RelationManagers\CertificatesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourses::route('/'),
            'create' => Pages\CreateCourse::route('/create'),
            'view' => Pages\ViewCourse::route('/{record}'),
            'edit' => Pages\EditCourse::route('/{record}/edit'),
        ];
    }
}
