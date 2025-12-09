// Admin API Service for CRUD operations
// Connects to NestJS backend at localhost:3001

const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3001/api/v1';

// Helper to get auth token
function getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('admin_token');
}

// Set token after login
export function setAdminToken(token: string): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('admin_token', token);
    }
}

// Clear token on logout
export function clearAdminToken(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_token');
    }
}

// Check if admin is authenticated
export function isAdminAuthenticated(): boolean {
    return !!getToken();
}

// Generic API request helper
async function adminRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<{ data: T | null; error: string | null }> {
    const token = getToken();

    try {
        const response = await fetch(`${ADMIN_API_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                ...options.headers,
            },
        });

        if (response.status === 401) {
            clearAdminToken();
            if (typeof window !== 'undefined') {
                window.location.href = '/admin/login';
            }
            return { data: null, error: 'Unauthorized' };
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return { data: null, error: errorData.message || `Error: ${response.status}` };
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error: any) {
        console.error('Admin API Error:', error);
        return { data: null, error: error.message || 'Network error' };
    }
}

// ========================= AUTH =========================
export const adminAuth = {
    login: async (email: string, password: string) => {
        const result = await adminRequest<any>('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        // Backend returns { success, data: { user, token } }
        const token = result.data?.data?.token || result.data?.token;
        const user = result.data?.data?.user || result.data?.user;

        if (token) {
            setAdminToken(token);
        }

        // Return user at expected path for login page
        return {
            data: user ? { user, token } : null,
            error: result.error
        };
    },


    logout: async () => {
        await adminRequest('/auth/logout', { method: 'POST' });
        clearAdminToken();
    },

    getUser: () => adminRequest<any>('/auth/user'),
};

// ========================= USERS =========================
export const adminUsers = {
    getAll: (params?: { page?: number; limit?: number; search?: string; role?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        if (params?.role) query.append('role', params.role);
        return adminRequest<any>(`/admin/users?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/users/${id}`),

    create: (data: any) => adminRequest<any>('/admin/users', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/users/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= COURSES =========================
export const adminCourses = {
    getAll: (params?: { page?: number; limit?: number; search?: string; category_id?: number }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        if (params?.category_id) query.append('category_id', params.category_id.toString());
        return adminRequest<any>(`/admin/courses?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/courses/${id}`),

    create: (data: any) => adminRequest<any>('/admin/courses', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/courses/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/courses/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= ARTICLES =========================
export const adminArticles = {
    getAll: (params?: { page?: number; limit?: number; search?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        return adminRequest<any>(`/admin/articles?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/articles/${id}`),

    create: (data: any) => adminRequest<any>('/admin/articles', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/articles/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/articles/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= EBOOKS =========================
export const adminEbooks = {
    getAll: (params?: { page?: number; limit?: number; search?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        return adminRequest<any>(`/admin/ebooks?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/ebooks/${id}`),

    create: (data: any) => adminRequest<any>('/admin/ebooks', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/ebooks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/ebooks/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= PRODUCTS =========================
export const adminProducts = {
    getAll: (params?: { page?: number; limit?: number; search?: string; category?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        if (params?.category) query.append('category', params.category);
        return adminRequest<any>(`/admin/products?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/products/${id}`),

    create: (data: any) => adminRequest<any>('/admin/products', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/products/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= INDICATORS =========================
export const adminIndicators = {
    getAll: (params?: { page?: number; limit?: number; search?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        return adminRequest<any>(`/admin/indicators?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/indicators/${id}`),

    create: (data: any) => adminRequest<any>('/admin/indicators', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/indicators/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/indicators/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= EXPERT ADVISORS =========================
export const adminExpertAdvisors = {
    getAll: (params?: { page?: number; limit?: number; search?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.search) query.append('search', params.search);
        return adminRequest<any>(`/admin/expert-advisors?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/expert-advisors/${id}`),

    create: (data: any) => adminRequest<any>('/admin/expert-advisors', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/expert-advisors/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/expert-advisors/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= CATEGORIES =========================
export const adminCategories = {
    getAll: (params?: { type?: string }) => {
        const query = new URLSearchParams();
        if (params?.type) query.append('type', params.type);
        return adminRequest<any>(`/admin/categories?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/categories/${id}`),

    create: (data: any) => adminRequest<any>('/admin/categories', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/categories/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/categories/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= ENROLLMENTS =========================
export const adminEnrollments = {
    getAll: (params?: { page?: number; limit?: number; status?: string }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        if (params?.status) query.append('status', params.status);
        return adminRequest<any>(`/admin/enrollments?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/enrollments/${id}`),

    update: (id: number, data: any) => adminRequest<any>(`/admin/enrollments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
};

// ========================= PROMOTIONS =========================
export const adminPromotions = {
    getAll: (params?: { page?: number; limit?: number }) => {
        const query = new URLSearchParams();
        if (params?.page) query.append('page', params.page.toString());
        if (params?.limit) query.append('limit', params.limit.toString());
        return adminRequest<any>(`/admin/promotions?${query.toString()}`);
    },

    getById: (id: number) => adminRequest<any>(`/admin/promotions/${id}`),

    create: (data: any) => adminRequest<any>('/admin/promotions', {
        method: 'POST',
        body: JSON.stringify(data),
    }),

    update: (id: number, data: any) => adminRequest<any>(`/admin/promotions/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),

    delete: (id: number) => adminRequest<any>(`/admin/promotions/${id}`, {
        method: 'DELETE',
    }),
};

// ========================= SITE SETTINGS =========================
export const adminSettings = {
    get: () => adminRequest<any>('/admin/site-settings'),

    update: (data: any) => adminRequest<any>('/admin/site-settings', {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
};

// ========================= DASHBOARD STATS =========================
export const adminDashboard = {
    getStats: () => adminRequest<any>('/admin/dashboard/stats'),
    getRecentActivity: () => adminRequest<any>('/admin/dashboard/activity'),
    getTopContent: () => adminRequest<any>('/admin/dashboard/top-content'),
};
