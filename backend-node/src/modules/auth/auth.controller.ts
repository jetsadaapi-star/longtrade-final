import { Controller, Post, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, UpdateProfileDto, ChangePasswordDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller('v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Post('login')
    @ApiOperation({ summary: 'Login with email and password' })
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Logout user' })
    async logout() {
        return { success: true, message: 'Logged out successfully' };
    }

    @Get('user')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current user profile' })
    async getUser(@Request() req) {
        return this.authService.getUser(BigInt(req.user.sub));
    }

    @Put('profile')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update user profile' })
    async updateProfile(@Request() req, @Body() dto: UpdateProfileDto) {
        return this.authService.updateProfile(BigInt(req.user.sub), dto);
    }

    @Put('change-password')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Change user password' })
    async changePassword(@Request() req, @Body() dto: ChangePasswordDto) {
        return this.authService.changePassword(BigInt(req.user.sub), dto);
    }
}
