import { Users, BookOpen, Package, TrendingUp, DollarSign, Eye, ArrowUpRight, ArrowDownRight, Calendar, MoreHorizontal } from 'lucide-react';

// Stats Card Component
function StatsCard({
    title,
    value,
    icon,
    change,
    changeType,
    gradient
}: {
    title: string;
    value: string;
    icon: React.ReactNode;
    change: string;
    changeType: 'up' | 'down' | 'neutral';
    gradient: string;
}) {
    return (
        <div className="relative bg-white rounded-2xl p-6 shadow-sm shadow-gray-100 border border-gray-100 overflow-hidden group hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
            <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

            <div className="relative flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
                    <div className={`flex items-center gap-1 mt-3 text-sm font-medium ${changeType === 'up' ? 'text-emerald-600' :
                            changeType === 'down' ? 'text-rose-600' :
                                'text-gray-500'
                        }`}>
                        {changeType === 'up' ? <ArrowUpRight size={16} /> : changeType === 'down' ? <ArrowDownRight size={16} /> : null}
                        {change}
                    </div>
                </div>
                <div className={`p-4 rounded-2xl ${gradient}`}>
                    <div className="text-white">{icon}</div>
                </div>
            </div>
        </div>
    );
}

// Chart Card
function ChartCard({ title }: { title: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-100 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal size={20} className="text-gray-400" />
                </button>
            </div>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <p className="text-gray-400">กราฟจะแสดงที่นี่</p>
            </div>
        </div>
    );
}

// Recent Activity
function RecentActivity() {
    const activities = [
        { id: 1, title: 'มีผู้ใช้ใหม่สมัครสมาชิก', user: 'john@example.com', time: '5 นาทีที่แล้ว', color: 'bg-blue-500' },
        { id: 2, title: 'มีการซื้อคอร์สเรียน', user: 'Jane Smith', time: '15 นาทีที่แล้ว', color: 'bg-emerald-500' },
        { id: 3, title: 'เผยแพร่บทความใหม่', user: 'Admin', time: '1 ชั่วโมงที่แล้ว', color: 'bg-purple-500' },
        { id: 4, title: 'อัพเดทสินค้า', user: 'Admin', time: '2 ชั่วโมงที่แล้ว', color: 'bg-orange-500' },
        { id: 5, title: 'สมัครสมาชิกใหม่', user: 'Mike Johnson', time: '3 ชั่วโมงที่แล้ว', color: 'bg-pink-500' },
    ];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-100 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">กิจกรรมล่าสุด</h3>
                <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">ดูทั้งหมด</button>
            </div>
            <div className="space-y-4">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className={`w-10 h-10 ${activity.color} rounded-xl flex items-center justify-center`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                            <p className="text-xs text-gray-500">{activity.user}</p>
                        </div>
                        <p className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Quick Actions
function QuickActions() {
    const actions = [
        { name: 'เพิ่มผู้ใช้', icon: <Users size={20} />, href: '/admin/users/new', gradient: 'from-blue-500 to-blue-600' },
        { name: 'เพิ่มคอร์ส', icon: <BookOpen size={20} />, href: '/admin/courses/new', gradient: 'from-emerald-500 to-teal-600' },
        { name: 'เพิ่มบทความ', icon: <Eye size={20} />, href: '/admin/articles/new', gradient: 'from-purple-500 to-purple-600' },
        { name: 'เพิ่มสินค้า', icon: <Package size={20} />, href: '/admin/products/new', gradient: 'from-orange-500 to-orange-600' },
    ];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-100 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">ทางลัด</h3>
            <div className="grid grid-cols-2 gap-3">
                {actions.map((action) => (
                    <a
                        key={action.name}
                        href={action.href}
                        className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${action.gradient} text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
                    >
                        {action.icon}
                        <span className="text-sm font-medium">{action.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

// Top Content Card
function TopContentCard({ title, items }: {
    title: string;
    items: { name: string; value: string; subValue: string }[]
}) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm shadow-gray-100 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">ดูทั้งหมด</button>
            </div>
            <div className="space-y-4">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
                                {i + 1}
                            </span>
                            <div>
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.subValue}</p>
                            </div>
                        </div>
                        <span className="text-lg font-bold text-emerald-600">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
                    <p className="text-gray-500 mt-1">ยินดีต้อนรับกลับมา! นี่คือภาพรวมของแพลตฟอร์ม</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm text-gray-600">
                    <Calendar size={18} />
                    <span>9 ธ.ค. 2567</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="ผู้ใช้ทั้งหมด"
                    value="1,234"
                    icon={<Users size={24} />}
                    change="+12.5% จากเดือนที่แล้ว"
                    changeType="up"
                    gradient="bg-gradient-to-r from-blue-500 to-blue-600"
                />
                <StatsCard
                    title="คอร์สเรียน"
                    value="48"
                    icon={<BookOpen size={24} />}
                    change="+3 คอร์สใหม่"
                    changeType="up"
                    gradient="bg-gradient-to-r from-purple-500 to-purple-600"
                />
                <StatsCard
                    title="สินค้าทั้งหมด"
                    value="156"
                    icon={<Package size={24} />}
                    change="+8 สินค้าใหม่"
                    changeType="up"
                    gradient="bg-gradient-to-r from-orange-500 to-orange-600"
                />
                <StatsCard
                    title="รายได้"
                    value="฿245K"
                    icon={<DollarSign size={24} />}
                    change="+18.2% จากเดือนที่แล้ว"
                    changeType="up"
                    gradient="bg-gradient-to-r from-emerald-500 to-teal-600"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <ChartCard title="ภาพรวมรายได้" />
                </div>
                <QuickActions />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentActivity />
                </div>
                <TopContentCard
                    title="คอร์สยอดนิยม"
                    items={[
                        { name: 'พื้นฐานการเทรด Forex', value: '฿89K', subValue: '456 ผู้เรียน' },
                        { name: 'Technical Analysis', value: '฿67K', subValue: '389 ผู้เรียน' },
                        { name: 'Risk Management', value: '฿45K', subValue: '321 ผู้เรียน' },
                    ]}
                />
            </div>
        </div>
    );
}
