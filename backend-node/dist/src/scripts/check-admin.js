"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function checkAdmin() {
    const user = await prisma.users.findUnique({
        where: { email: 'admin@longtrade.com' },
        select: { id: true, name: true, email: true, role: true }
    });
    console.log('Admin User:', JSON.stringify(user, (k, v) => typeof v === 'bigint' ? v.toString() : v, 2));
    const roles = await prisma.roles.findMany();
    console.log('\nRoles table:', JSON.stringify(roles.map(r => ({ ...r, id: r.id.toString() })), null, 2));
    await prisma.$disconnect();
}
checkAdmin();
//# sourceMappingURL=check-admin.js.map