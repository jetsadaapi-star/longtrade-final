'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Package, Star, ShoppingCart, Loader2, X, Save, DollarSign, Boxes } from 'lucide-react';
import { adminProducts, adminCategories } from '@/lib/admin-api';

interface Product {
    id: string;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    price: number;
    original_price?: number;
    stock: number;
    sku?: string;
    is_published: boolean;
    is_featured: boolean;
    sales_count: number;
    category_id?: string;
    created_at: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        description: '',
        price: 0,
        original_price: 0,
        stock: 0,
        sku: '',
        is_published: false,
        is_featured: false,
    });

    useEffect(() => {
        loadProducts();
    }, [page]);

    const loadProducts = async () => {
        setIsLoading(true);
        const result = await adminProducts.getAll({ page, limit: 12 });
        if (result.data) {
            setProducts(result.data.data || result.data || []);
            setTotal(result.data.meta?.total || result.data.length || 0);
        }
        setIsLoading(false);
    };

    const openCreateModal = () => {
        setFormData({ name: '', slug: '', description: '', price: 0, original_price: 0, stock: 0, sku: '', is_published: false, is_featured: false });
        setSelectedProduct(null);
        setModalMode('create');
        setShowModal(true);
    };

    const openEditModal = (product: Product) => {
        setFormData({
            name: product.name || '',
            slug: product.slug || '',
            description: product.description || '',
            price: product.price || 0,
            original_price: product.original_price || 0,
            stock: product.stock || 0,
            sku: product.sku || '',
            is_published: product.is_published || false,
            is_featured: product.is_featured || false,
        });
        setSelectedProduct(product);
        setModalMode('edit');
        setShowModal(true);
    };

    const openViewModal = (product: Product) => {
        setSelectedProduct(product);
        setModalMode('view');
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const submitData = { ...formData, slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-') };
            if (modalMode === 'create') {
                await adminProducts.create(submitData);
            } else if (modalMode === 'edit' && selectedProduct) {
                await adminProducts.update(parseInt(selectedProduct.id), submitData);
            }
            setShowModal(false);
            loadProducts();
        } catch (error) {
            console.error('Error saving product:', error);
            alert('เกิดข้อผิดพลาดในการบันทึก');
        }

        setIsSaving(false);
    };

    const handleDelete = async (product: Product) => {
        if (confirm(`คุณต้องการลบสินค้า "${product.name}" หรือไม่?`)) {
            await adminProducts.delete(parseInt(product.id));
            loadProducts();
        }
    };

    const filteredProducts = products.filter(product =>
        !searchQuery || product.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const inStockCount = products.filter(p => p.stock > 0).length;
    const totalSales = products.reduce((sum, p) => sum + (p.sales_count || 0), 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">จัดการสินค้า</h1>
                    <p className="text-gray-500 mt-1">จัดการสินค้าและสต๊อก</p>
                </div>
                <button
                    onClick={openCreateModal}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all font-medium"
                >
                    <Plus size={20} />
                    <span>เพิ่มสินค้าใหม่</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'สินค้าทั้งหมด', value: total, color: 'from-orange-500 to-pink-600', icon: <Package size={20} /> },
                    { label: 'มีสินค้า', value: inStockCount, color: 'from-emerald-500 to-teal-600', icon: <Boxes size={20} /> },
                    { label: 'หมดสต๊อก', value: total - inStockCount, color: 'from-rose-500 to-red-600', icon: <Package size={20} /> },
                    { label: 'ยอดขายรวม', value: totalSales, color: 'from-blue-500 to-cyan-600', icon: <ShoppingCart size={20} /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value.toLocaleString()}</p>
                            </div>
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white opacity-80`}>{stat.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="ค้นหาสินค้า..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                </div>
            </div>

            {/* Products Grid */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                </div>
            ) : filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
                    <Package className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500">ไม่พบสินค้า</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                            {/* Product Image */}
                            <div className="h-48 bg-gradient-to-br from-orange-500 to-pink-600 relative overflow-hidden">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Package className="text-white/30" size={64} />
                                    </div>
                                )}
                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                    {product.is_featured && (
                                        <span className="bg-amber-500 text-white px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow">
                                            <Star size={12} /> แนะนำ
                                        </span>
                                    )}
                                </div>
                                {product.stock <= 0 && (
                                    <div className="absolute top-3 right-3 bg-rose-500 text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                                        หมดสต๊อก
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <span>สต๊อก: {product.stock}</span>
                                    <span>{product.sales_count || 0} ขายแล้ว</span>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        {product.original_price && product.original_price > product.price && (
                                            <span className="text-sm text-gray-400 line-through">฿{Number(product.original_price).toLocaleString()}</span>
                                        )}
                                        <span className="text-xl font-bold text-orange-600 ml-2">
                                            ฿{Number(product.price).toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                                    <button onClick={() => openViewModal(product)} className="flex-1 p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm font-medium">
                                        <Eye size={16} /> ดู
                                    </button>
                                    <button onClick={() => openEditModal(product)} className="flex-1 p-2.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm font-medium">
                                        <Edit size={16} /> แก้ไข
                                    </button>
                                    <button onClick={() => handleDelete(product)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden my-8">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-5 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                                {modalMode === 'create' ? 'เพิ่มสินค้าใหม่' : modalMode === 'edit' ? 'แก้ไขสินค้า' : 'รายละเอียดสินค้า'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto">
                            {modalMode === 'view' && selectedProduct ? (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                                    <p className="text-gray-600">{selectedProduct.description || 'ไม่มีคำอธิบาย'}</p>

                                    <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-5">
                                        <div>
                                            <p className="text-sm text-gray-500">ราคา</p>
                                            <p className="text-xl font-bold text-orange-600">฿{Number(selectedProduct.price).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">สต๊อก</p>
                                            <p className="font-medium text-gray-900">{selectedProduct.stock} ชิ้น</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">SKU</p>
                                            <p className="font-medium text-gray-900">{selectedProduct.sku || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">ยอดขาย</p>
                                            <p className="font-medium text-gray-900">{selectedProduct.sales_count || 0}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ปิด
                                        </button>
                                        <button onClick={() => openEditModal(selectedProduct)} className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2">
                                            <Edit size={18} /> แก้ไข
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อสินค้า *</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
                                            placeholder="ชื่อสินค้า"
                                            required
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">คำอธิบาย</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700 resize-none"
                                            placeholder="คำอธิบายสินค้า..."
                                        />
                                    </div>

                                    {/* Price Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ราคา (บาท) *</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="number"
                                                    value={formData.price}
                                                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                                                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
                                                    required
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ราคาเดิม</label>
                                            <input
                                                type="number"
                                                value={formData.original_price}
                                                onChange={(e) => setFormData({ ...formData, original_price: parseFloat(e.target.value) || 0 })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
                                                min="0"
                                            />
                                        </div>
                                    </div>

                                    {/* Stock & SKU */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">จำนวนสต๊อก</label>
                                            <input
                                                type="number"
                                                value={formData.stock}
                                                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
                                                min="0"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">SKU</label>
                                            <input
                                                type="text"
                                                value={formData.sku}
                                                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
                                                placeholder="รหัสสินค้า"
                                            />
                                        </div>
                                    </div>

                                    {/* Toggles */}
                                    <div className="flex flex-wrap gap-6 py-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.is_published}
                                                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                                                className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                            />
                                            <span className="text-gray-700 font-medium">เผยแพร่</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.is_featured}
                                                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                                                className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                            />
                                            <span className="text-gray-700 font-medium">แนะนำ</span>
                                        </label>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                                        <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ยกเลิก
                                        </button>
                                        <button type="submit" disabled={isSaving} className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50">
                                            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                            {modalMode === 'create' ? 'เพิ่ม' : 'บันทึก'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
