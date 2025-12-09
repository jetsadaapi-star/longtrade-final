export declare class RegisterDto {
    name: string;
    email: string;
    phone?: string;
    password: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class UpdateProfileDto {
    name?: string;
    phone?: string;
}
export declare class ChangePasswordDto {
    current_password: string;
    new_password: string;
}
