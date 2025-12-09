<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExpertAdvisorResource\Pages;
use App\Filament\Resources\ExpertAdvisorResource\RelationManagers;
use App\Models\ExpertAdvisor;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ExpertAdvisorResource extends Resource
{
    protected static ?string $model = ExpertAdvisor::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'Expert Advisor (EA)';
    protected static ?string $modelLabel = 'Expert Advisor';
    protected static ?string $pluralModelLabel = 'Expert Advisors ทั้งหมด';

    protected static bool $shouldRegisterNavigation = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูล EA')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('ชื่อ EA')
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
                            ->required(),
                        Forms\Components\TextInput::make('price')
                            ->label('ราคา')
                            ->numeric()
                            ->prefix('฿'),
                        Forms\Components\TextInput::make('version')
                            ->label('เวอร์ชัน')
                            ->maxLength(255),
                        Forms\Components\FileUpload::make('image')
                            ->label('รูปปก')
                            ->image()
                            ->directory('expert-advisors')
                            ->columnSpanFull(),
                        Forms\Components\FileUpload::make('file_path')
                            ->label('ไฟล์ดาวน์โหลด')
                            ->directory('expert-advisors/files')
                            ->columnSpanFull(),
                        Forms\Components\RichEditor::make('description')
                            ->label('รายละเอียด')
                            ->columnSpanFull(),
                        Forms\Components\RichEditor::make('features')
                            ->label('คุณสมบัติเด่น')
                            ->columnSpanFull(),
                        Forms\Components\Toggle::make('is_featured')
                            ->label('แนะนำ (Featured)')
                            ->default(false),
                        Forms\Components\Toggle::make('is_published')
                            ->label('เผยแพร่')
                            ->default(true),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
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
            'index' => Pages\ListExpertAdvisors::route('/'),
            'create' => Pages\CreateExpertAdvisor::route('/create'),
            'view' => Pages\ViewExpertAdvisor::route('/{record}'),
            'edit' => Pages\EditExpertAdvisor::route('/{record}/edit'),
        ];
    }
}
