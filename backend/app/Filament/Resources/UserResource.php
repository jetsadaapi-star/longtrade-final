<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'ผู้ใช้';
    protected static ?string $modelLabel = 'ผู้ใช้';
    protected static ?string $pluralModelLabel = 'ผู้ใช้ทั้งหมด';
    protected static ?int $navigationSort = 10;
    protected static ?string $navigationGroup = 'ระบบผู้ใช้';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลผู้ใช้')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('ชื่อ')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('email')
                            ->label('อีเมล')
                            ->email()
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),

                        Forms\Components\TextInput::make('phone')
                            ->label('เบอร์โทรศัพท์')
                            ->tel()
                            ->maxLength(20),

                        Forms\Components\FileUpload::make('avatar')
                            ->label('รูปโปรไฟล์')
                            ->image()
                            ->directory('avatars')
                            ->imageEditor(),

                        Forms\Components\Select::make('roles')
                            ->label('บทบาท')
                            ->relationship('roles', 'name')
                            ->multiple()
                            ->preload()
                            ->searchable()
                            ->required()
                            ->options(function () {
                                return Role::all()->mapWithKeys(function ($role) {
                                    $label = match ($role->name) {
                                        'super_admin' => 'ผู้ดูแลระบบสูงสุด',
                                        'admin' => 'ผู้ดูแลระบบ',
                                        'instructor' => 'ผู้สอน',
                                        'student' => 'นักเรียน',
                                        'vip_member' => 'สมาชิก VIP',
                                        default => $role->name,
                                    };
                                    return [$role->id => $label];
                                });
                            })
                            ->helperText('เลือกบทบาทของผู้ใช้ (สามารถเลือกได้หลายบทบาท)'),

                        Forms\Components\DateTimePicker::make('email_verified_at')
                            ->label('ยืนยันอีเมลเมื่อ')
                            ->default(now()),
                    ])->columns(2),

                Forms\Components\Section::make('รหัสผ่าน')
                    ->schema([
                        Forms\Components\TextInput::make('password')
                            ->label('รหัสผ่าน')
                            ->password()
                            ->dehydrateStateUsing(fn($state) => Hash::make($state))
                            ->dehydrated(fn($state) => filled($state))
                            ->required(fn(string $context): bool => $context === 'create')
                            ->minLength(8)
                            ->helperText('ต้องมีอย่างน้อย 8 ตัวอักษร'),

                        Forms\Components\TextInput::make('password_confirmation')
                            ->label('ยืนยันรหัสผ่าน')
                            ->password()
                            ->same('password')
                            ->required(fn(string $context): bool => $context === 'create')
                            ->dehydrated(false),
                    ])->columns(2)
                    ->visible(fn(string $context): bool => $context === 'create'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('avatar')
                    ->label('รูป')
                    ->circular()
                    ->defaultImageUrl(url('/images/default-avatar.png')),

                Tables\Columns\TextColumn::make('name')
                    ->label('ชื่อ')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('email')
                    ->label('อีเมล')
                    ->searchable()
                    ->sortable()
                    ->copyable(),

                Tables\Columns\TextColumn::make('phone')
                    ->label('เบอร์โทร')
                    ->searchable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('roles.name')
                    ->label('บทบาท')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'super_admin' => 'danger',
                        'admin' => 'warning',
                        'instructor' => 'info',
                        'student' => 'success',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'super_admin' => 'ผู้ดูแลระบบสูงสุด',
                        'admin' => 'ผู้ดูแลระบบ',
                        'instructor' => 'ผู้สอน',
                        'student' => 'นักเรียน',
                        default => $state,
                    }),

                Tables\Columns\IconColumn::make('email_verified_at')
                    ->label('ยืนยันอีเมล')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('สร้างเมื่อ')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('roles')
                    ->label('บทบาท')
                    ->relationship('roles', 'name')
                    ->multiple()
                    ->preload(),

                Tables\Filters\TernaryFilter::make('email_verified_at')
                    ->label('สถานะอีเมล')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('ยืนยันแล้ว')
                    ->falseLabel('ยังไม่ยืนยัน')
                    ->queries(
                        true: fn($query) => $query->whereNotNull('email_verified_at'),
                        false: fn($query) => $query->whereNull('email_verified_at'),
                    ),
            ])
            ->actions([
                Tables\Actions\Action::make('verify_email')
                    ->label('ยืนยันอีเมล')
                    ->icon('heroicon-o-check-badge')
                    ->color('success')
                    ->requiresConfirmation()
                    ->action(fn(User $record) => $record->update(['email_verified_at' => now()]))
                    ->visible(fn(User $record) => $record->email_verified_at === null),

                Tables\Actions\Action::make('reset_password')
                    ->label('รีเซ็ตรหัสผ่าน')
                    ->icon('heroicon-o-key')
                    ->color('warning')
                    ->form([
                        Forms\Components\TextInput::make('password')
                            ->label('รหัสผ่านใหม่')
                            ->password()
                            ->required()
                            ->minLength(8),
                    ])
                    ->action(function (User $record, array $data) {
                        $record->update([
                            'password' => Hash::make($data['password']),
                        ]);
                        $record->tokens()->delete();
                    }),

                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('assign_role')
                        ->label('กำหนดบทบาท')
                        ->icon('heroicon-o-user-group')
                        ->form([
                            Forms\Components\Select::make('role')
                                ->label('บทบาท')
                                ->options(function () {
                                    return Role::all()->mapWithKeys(function ($role) {
                                        $label = match ($role->name) {
                                            'super_admin' => 'ผู้ดูแลระบบสูงสุด',
                                            'admin' => 'ผู้ดูแลระบบ',
                                            'instructor' => 'ผู้สอน',
                                            'student' => 'นักเรียน',
                                            'vip_member' => 'สมาชิก VIP',
                                            default => $role->name,
                                        };
                                        return [$role->id => $label];
                                    });
                                })
                                ->required(),
                        ])
                        ->action(function (\Illuminate\Database\Eloquent\Collection $records, array $data) {
                            $role = Role::find($data['role']);
                            foreach ($records as $record) {
                                $record->syncRoles([$role]);
                            }
                        })
                        ->deselectRecordsAfterCompletion()
                        ->successNotificationTitle('กำหนดบทบาทสำเร็จ'),

                    Tables\Actions\BulkAction::make('remove_roles')
                        ->label('ลบบทบาท')
                        ->icon('heroicon-o-x-circle')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->modalHeading('ลบบทบาท')
                        ->modalDescription('คุณแน่ใจหรือไม่ว่าต้องการลบบทบาททั้งหมดจากผู้ใช้ที่เลือก?')
                        ->action(function (\Illuminate\Database\Eloquent\Collection $records) {
                            foreach ($records as $record) {
                                $record->syncRoles([]);
                            }
                        })
                        ->deselectRecordsAfterCompletion()
                        ->successNotificationTitle('ลบบทบาทสำเร็จ'),

                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
