import axios from 'axios';

// LongTrade API Configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

// Create axios instance
export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

// Handle response errors
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

// ========================= AUTH API =========================
export const authAPI = {
    login: async (email: string, password: string) => {
        const response = await apiClient.post('/auth/login', { email, password });
        return response.data;
    },

    register: async (name: string, email: string, password: string) => {
        const response = await apiClient.post('/auth/register', { name, email, password });
        return response.data;
    },

    getUser: async () => {
        const response = await apiClient.get('/auth/user');
        return response.data;
    },

    logout: async () => {
        const response = await apiClient.post('/auth/logout');
        return response.data;
    },
};

// ========================= USERS API =========================
export const usersAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/users?page=${page}&limit=${limit}`);
        return response.data;
    },

    getById: async (id: string) => {
        const response = await apiClient.get(`/users/${id}`);
        return response.data;
    },

    create: async (userData: any) => {
        const response = await apiClient.post('/users', userData);
        return response.data;
    },

    update: async (id: string, userData: any) => {
        const response = await apiClient.put(`/users/${id}`, userData);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await apiClient.delete(`/users/${id}`);
        return response.data;
    },
};

// ========================= COURSES API =========================
export const coursesAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/courses?page=${page}&limit=${limit}`);
        return response.data;
    },

    getFeatured: async (limit = 6) => {
        const response = await apiClient.get(`/courses/featured?limit=${limit}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get(`/courses/${slug}`);
        return response.data;
    },
};

// ========================= ARTICLES API =========================
export const articlesAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/articles?page=${page}&limit=${limit}`);
        return response.data;
    },

    getFeatured: async (limit = 6) => {
        const response = await apiClient.get(`/articles/featured?limit=${limit}`);
        return response.data;
    },

    getPopular: async (limit = 5) => {
        const response = await apiClient.get(`/articles/popular?limit=${limit}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get(`/articles/${slug}`);
        return response.data;
    },
};

// ========================= PRODUCTS API =========================
export const productsAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/products?page=${page}&limit=${limit}`);
        return response.data;
    },

    getFeatured: async (limit = 6) => {
        const response = await apiClient.get(`/products/featured?limit=${limit}`);
        return response.data;
    },

    getByCategory: async (category: string, page = 1, limit = 10) => {
        const response = await apiClient.get(`/products/category/${category}?page=${page}&limit=${limit}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get(`/products/${slug}`);
        return response.data;
    },
};

// ========================= EBOOKS API =========================
export const ebooksAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/ebooks?page=${page}&limit=${limit}`);
        return response.data;
    },

    getFeatured: async (limit = 3) => {
        const response = await apiClient.get(`/ebooks/featured?limit=${limit}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get(`/ebooks/${slug}`);
        return response.data;
    },
};

// ========================= INDICATORS API =========================
export const indicatorsAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/indicators?page=${page}&limit=${limit}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get(`/indicators/${slug}`);
        return response.data;
    },
};

// ========================= EXPERT ADVISORS API =========================
export const expertAdvisorsAPI = {
    getAll: async (page = 1, limit = 10) => {
        const response = await apiClient.get(`/expert-advisors?page=${page}&limit=${limit}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await apiClient.get(`/expert-advisors/${slug}`);
        return response.data;
    },
};

export default apiClient;
