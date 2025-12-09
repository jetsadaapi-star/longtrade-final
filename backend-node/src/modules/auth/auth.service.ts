import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto, UpdateProfileDto, ChangePasswordDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(dto: RegisterDto) {
        // Check if user exists
        const existingUser = await this.prisma.users.findFirst({
            where: { email: dto.email },
        });

        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(dto.password, 12);

        // Create user
        const user = await this.prisma.users.create({
            data: {
                name: dto.name,
                email: dto.email,
                phone: dto.phone || null,
                password: hashedPassword,
                role: 'student',
            },
        });

        // Generate token
        const token = this.generateToken(user.id);

        return {
            success: true,
            message: 'Registration successful',
            data: {
                user: this.excludePassword(user),
                token,
            },
        };
    }

    async login(dto: LoginDto) {
        // Find user
        const user = await this.prisma.users.findFirst({
            where: { email: dto.email },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Generate token
        const token = this.generateToken(user.id);

        return {
            success: true,
            message: 'Login successful',
            data: {
                user: this.excludePassword(user),
                token,
            },
        };
    }

    async getUser(userId: bigint) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
            include: {
                user_profiles: true,
            },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return {
            success: true,
            data: this.excludePassword(user),
        };
    }

    async updateProfile(userId: bigint, dto: UpdateProfileDto) {
        const user = await this.prisma.users.update({
            where: { id: userId },
            data: {
                name: dto.name,
                phone: dto.phone,
            },
        });

        return {
            success: true,
            message: 'Profile updated successfully',
            data: this.excludePassword(user),
        };
    }

    async changePassword(userId: bigint, dto: ChangePasswordDto) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        // Verify current password
        const isPasswordValid = await bcrypt.compare(dto.current_password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Current password is incorrect');
        }

        // Hash new password and update
        const hashedPassword = await bcrypt.hash(dto.new_password, 12);

        await this.prisma.users.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        return {
            success: true,
            message: 'Password changed successfully',
        };
    }

    async validateUser(userId: bigint) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
        });
        return user ? this.excludePassword(user) : null;
    }

    private generateToken(userId: bigint) {
        return this.jwtService.sign({ sub: userId.toString() });
    }

    private excludePassword(user: any) {
        const { password, ...userWithoutPassword } = user;
        // Convert BigInt to string for JSON serialization
        return JSON.parse(JSON.stringify(userWithoutPassword, (_, v) =>
            typeof v === 'bigint' ? v.toString() : v
        ));
    }
}
