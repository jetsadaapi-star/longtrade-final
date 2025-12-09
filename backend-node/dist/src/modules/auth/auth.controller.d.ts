import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, UpdateProfileDto, ChangePasswordDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    logout(): Promise<{
        success: boolean;
        message: string;
    }>;
    getUser(req: any): Promise<{
        success: boolean;
        data: any;
    }>;
    updateProfile(req: any, dto: UpdateProfileDto): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    changePassword(req: any, dto: ChangePasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
