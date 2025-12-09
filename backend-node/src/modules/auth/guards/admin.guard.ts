import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException('Access token is required');
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET || 'your-secret-key',
            });

            // Get user from database
            const user = await this.prisma.users.findUnique({
                where: { id: BigInt(payload.sub) },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                },
            });

            if (!user) {
                throw new UnauthorizedException('User not found');
            }

            // Check if user is admin
            const role = String(user.role);
            if (role !== 'admin' && role !== 'superadmin') {
                throw new ForbiddenException('Admin access required');
            }

            // Attach user to request
            request.user = {
                sub: user.id.toString(),
                email: user.email,
                name: user.name,
                role: user.role,
            };

            return true;
        } catch (error) {
            if (error instanceof ForbiddenException) {
                throw error;
            }
            throw new UnauthorizedException('Invalid or expired token');
        }
    }

    private extractTokenFromHeader(request: any): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
