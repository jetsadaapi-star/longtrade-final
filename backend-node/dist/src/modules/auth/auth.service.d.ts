import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto, UpdateProfileDto, ChangePasswordDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: any;
            token: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        success: boolean;
        message: string;
        data: {
            user: any;
            token: string;
        };
    }>;
    getUser(userId: bigint): Promise<{
        success: boolean;
        data: any;
    }>;
    updateProfile(userId: bigint, dto: UpdateProfileDto): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    changePassword(userId: bigint, dto: ChangePasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    validateUser(userId: bigint): Promise<any>;
    private generateToken;
    private excludePassword;
}
