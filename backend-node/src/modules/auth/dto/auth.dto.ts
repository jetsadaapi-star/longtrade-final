import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({ example: 'John Doe' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    email: string;

    @ApiPropertyOptional({ example: '0812345678' })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ example: 'password123', minLength: 8 })
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}

export class LoginDto {
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123' })
    @IsNotEmpty()
    password: string;
}

export class UpdateProfileDto {
    @ApiPropertyOptional({ example: 'John Doe' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ example: '0812345678' })
    @IsOptional()
    @IsString()
    phone?: string;
}

export class ChangePasswordDto {
    @ApiProperty()
    @IsNotEmpty()
    current_password: string;

    @ApiProperty({ minLength: 8 })
    @IsNotEmpty()
    @MinLength(8)
    new_password: string;
}
