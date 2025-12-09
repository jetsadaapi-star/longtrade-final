// Script to reset admin password to 123456
// Run: npx ts-node src/scripts/reset-admin-password.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function resetAdminPassword() {
    try {
        const newPassword = '123456';
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Try to find by admin role first
        let admin = await prisma.users.findFirst({
            where: { role: 'admin' },
        });

        // If no admin role, try admin@longtrade.com email
        if (!admin) {
            admin = await prisma.users.findUnique({
                where: { email: 'admin@longtrade.com' },
            });
        }

        if (admin) {
            // Update existing admin - set password and ensure role is admin
            await prisma.users.update({
                where: { id: admin.id },
                data: {
                    password: hashedPassword,
                    role: 'admin' as any, // ensure role is admin
                },
            });
            console.log(`✅ Admin password reset successfully!`);
            console.log(`   Email: ${admin.email}`);
            console.log(`   New Password: ${newPassword}`);
        } else {
            // Create new admin user
            const newAdmin = await prisma.users.create({
                data: {
                    name: 'Admin',
                    email: 'admin@longtrade.com',
                    password: hashedPassword,
                    role: 'admin' as any,
                },
            });
            console.log(`✅ New admin user created!`);
            console.log(`   Email: admin@longtrade.com`);
            console.log(`   Password: ${newPassword}`);
        }
    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

resetAdminPassword();
