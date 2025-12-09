<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RoleResource\Pages;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleResource extends Resource
{
    protected static ?string $model = Role::class;

    protected static ?string $navigationIcon = 'heroicon-o-shield-check';

    protected static ?string $navigationLabel = 'บทบาทและสิทธิ์';
    protected static ?string $modelLabel = 'บทบาท';
    protected static ?string $pluralModelLabel = 'บทบาทและสิทธิ์';
    protected static ?string $navigationGroup = 'ระบบผู้ใช้';
    protected static ?int $navigationSort = 11;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลบทบาท')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('ชื่อบทบาท (ภาษาอังกฤษ)')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->helperText('ใช้ตัวพิมพ์เล็ก ไม่มีช่องว่าง เช่น admin, instructor'),

                        Forms\Components\Select::make('guard_name')
                            ->label('Guard')
                            ->options([
                                'web' => 'Web',
                                'api' => 'API',
                            ])
                            ->default('web')
                            ->required(),
                    ])->columns(2),

                Forms\Components\Section::make('สิทธิ์การเข้าถึง')
                    ->schema([
                        Forms\Components\CheckboxList::make('permissions')
                            ->label('สิทธิ์')
                            ->relationship('permissions', 'name')
                            ->columns(3)
                            ->searchable()
                            ->bulkToggleable()
                            ->helperText('เลือกสิทธิ์ที่ต้องการให้บทบาทนี้มี'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('ชื่อบทบาท')
                    ->searchable()
                    ->sortable()
                    ->weight('bold')
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'super_admin' => 'ผู้ดูแลระบบสูงสุด',
                        'admin' => 'ผู้ดูแลระบบ',
                        'instructor' => 'ผู้สอน',
                        'student' => 'นักเรียน',
                        'vip_member' => 'สมาชิก VIP',
                        default => $state,
                    })
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'super_admin' => 'danger',
                        'admin' => 'warning',
                        'instructor' => 'info',
                        'student' => 'success',
                        'vip_member' => 'purple',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('users_count')
                    ->label('จำนวนผู้ใช้')
                    ->counts('users')
                    ->sortable()
                    ->badge()
                    ->color('info'),

                Tables\Columns\TextColumn::make('permissions_count')
                    ->label('จำนวนสิทธิ์')
                    ->counts('permissions')
                    ->sortable()
                    ->badge()
                    ->color('success'),

                Tables\Columns\TextColumn::make('guard_name')
                    ->label('Guard')
                    ->badge()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('สร้างเมื่อ')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('guard_name')
                    ->label('Guard')
                    ->options([
                        'web' => 'Web',
                        'api' => 'API',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->visible(fn(Role $record) => !in_array($record->name, ['super_admin']))
                    ->requiresConfirmation()
                    ->modalHeading('ลบบทบาท')
                    ->modalDescription('คุณแน่ใจหรือไม่ว่าต้องการลบบทบาทนี้? การกระทำนี้ไม่สามารถย้อนกลับได้'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->visible(fn() => auth()->user()?->hasRole('super_admin')),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRoles::route('/'),
            'create' => Pages\CreateRole::route('/create'),
            'edit' => Pages\EditRole::route('/{record}/edit'),
        ];
    }
}
