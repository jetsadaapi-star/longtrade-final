// ============= Site Settings =============
export interface SiteSettings {
    site_name: string;
    site_description: string | null;
    logo: string | null;
    logo_url?: string;
    favicon: string | null;
    favicon_url?: string;
    contact_email: string | null;
    contact_phone: string | null;
    address: string | null;
    facebook_url: string | null;
    line_url: string | null;
    tiktok_url: string | null;
    youtube_url: string | null;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'}/site-settings`, {
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!res.ok) {
            throw new Error('Failed to fetch site settings');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching site settings:', error);
        return null;
    }
}

// ============= Courses =============
export interface LessonVideo {
    type: 'youtube' | 'upload';
    youtube_id?: string;
    video_url?: string;
    thumbnail_url?: string;
    duration?: number;
    status?: 'processing' | 'ready' | 'failed';
    file_size?: number;
}

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    videoId?: string;
    youtubeId?: string;
    video?: LessonVideo;
    video_type?: 'youtube' | 'upload';
    video_file?: string;
}


export interface Section {
    id: string;
    title: string;
    lessons: Lesson[];
}

export interface QuizChoice {
    id: string;
    label: string;
}

export interface QuizQuestion {
    id: string;
    title: string;
    q?: string | { label: string };
    choices: QuizChoice[];
    answerId: string;
}

export interface CourseQuiz {
    passingScore: number;
    questions: QuizQuestion[];
}

export interface Instructor {
    name: string;
    role: string;
    avatar?: string;
}

export interface Category {
    id: number;
    slug: string;
    name: string;
    description?: string;
}

export interface Course {
    id: number;
    slug: string;
    title: string;
    description: string;
    cover: string;
    hours: string;
    price: number;
    original_price?: number;
    level?: string;
    lessons_count?: number;
    what_you_learn?: string[];
    requirements?: string[];
    is_published: boolean;
    is_featured: boolean;
    category_id?: number;
    category?: Category;
    unlock_code?: string;
    sections?: Section[];
    quiz?: CourseQuiz;
    average_rating?: number;
    reviews_count?: number;
    created_at?: string;
    updated_at?: string;
}

export interface CoursesResponse {
    data: Course[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

/**
 * Fetch all courses with optional filters
 */
export async function getCourses(params?: {
    category?: string;
    level?: string;
    per_page?: number;
    page?: number;
}): Promise<CoursesResponse | null> {
    try {
        const queryParams = new URLSearchParams();
        if (params?.category) queryParams.append('category', params.category);
        if (params?.level) queryParams.append('level', params.level);
        if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
        if (params?.page) queryParams.append('page', params.page.toString());

        const url = `${API_BASE_URL}/courses${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch courses');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching courses:', error);
        return null;
    }
}

/**
 * Fetch a single course by slug
 */
export async function getCourseBySlug(slug: string): Promise<Course | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/courses/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch course: ${slug}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching course ${slug}:`, error);
        return null;
    }
}

/**
 * Fetch featured courses
 */
export async function getFeaturedCourses(): Promise<Course[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/courses/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch featured courses');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching featured courses:', error);
        return null;
    }
}

// ============= Indicators =============
export interface Indicator {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    price: number;
    original_price?: number;
    platform?: string;
    features?: string[];
    download_link?: string;
    is_published: boolean;
    is_featured: boolean;
    downloads_count?: number;
    category_id?: number;
    category?: Category;
    average_rating?: number;
    reviews_count?: number;
    created_at?: string;
    updated_at?: string;
}

export interface IndicatorsResponse {
    data: Indicator[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export async function getIndicators(params?: {
    category?: string;
    platform?: string;
    per_page?: number;
    page?: number;
}): Promise<IndicatorsResponse | null> {
    try {
        const queryParams = new URLSearchParams();
        if (params?.category) queryParams.append('category', params.category);
        if (params?.platform) queryParams.append('platform', params.platform);
        if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
        if (params?.page) queryParams.append('page', params.page.toString());

        const url = `${API_BASE_URL}/indicators${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch indicators');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching indicators:', error);
        return null;
    }
}

export async function getIndicatorBySlug(slug: string): Promise<Indicator | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/indicators/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch indicator: ${slug}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching indicator ${slug}:`, error);
        return null;
    }
}

export async function getFeaturedIndicators(): Promise<Indicator[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/indicators/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch featured indicators');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching featured indicators:', error);
        return null;
    }
}

// ============= Ebooks =============
export interface Ebook {
    id: number;
    slug: string;
    title: string;
    description: string;
    cover_image: string;
    price: number;
    original_price?: number;
    pages?: number;
    format?: string;
    file_path?: string;
    preview_link?: string;
    is_published: boolean;
    is_featured: boolean;
    downloads_count?: number;
    category_id?: number;
    category?: Category;
    average_rating?: number;
    reviews_count?: number;
    created_at?: string;
    updated_at?: string;
}

export interface EbooksResponse {
    data: Ebook[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export async function getEbooks(params?: {
    category?: string;
    format?: string;
    per_page?: number;
    page?: number;
}): Promise<EbooksResponse | null> {
    try {
        const queryParams = new URLSearchParams();
        if (params?.category) queryParams.append('category', params.category);
        if (params?.format) queryParams.append('format', params.format);
        if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
        if (params?.page) queryParams.append('page', params.page.toString());

        const url = `${API_BASE_URL}/ebooks${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch ebooks');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching ebooks:', error);
        return null;
    }
}

export async function getEbookBySlug(slug: string): Promise<Ebook | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/ebooks/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch ebook: ${slug}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching ebook ${slug}:`, error);
        return null;
    }
}

export async function getFeaturedEbooks(): Promise<Ebook[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/ebooks/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch featured ebooks');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching featured ebooks:', error);
        return null;
    }
}

// ============= Expert Advisors =============
export interface ExpertAdvisor {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    price: number;
    original_price?: number;
    platform?: string;
    features?: string[];
    strategy?: string;
    download_link?: string;
    is_published: boolean;
    is_featured: boolean;
    downloads_count?: number;
    category_id?: number;
    category?: Category;
    average_rating?: number;
    reviews_count?: number;
    created_at?: string;
    updated_at?: string;
}

export interface ExpertAdvisorsResponse {
    data: ExpertAdvisor[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export async function getExpertAdvisors(params?: {
    category?: string;
    platform?: string;
    per_page?: number;
    page?: number;
}): Promise<ExpertAdvisorsResponse | null> {
    try {
        const queryParams = new URLSearchParams();
        if (params?.category) queryParams.append('category', params.category);
        if (params?.platform) queryParams.append('platform', params.platform);
        if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
        if (params?.page) queryParams.append('page', params.page.toString());

        const url = `${API_BASE_URL}/expert-advisors${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch expert advisors');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching expert advisors:', error);
        return null;
    }
}

export async function getExpertAdvisorBySlug(slug: string): Promise<ExpertAdvisor | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/expert-advisors/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch expert advisor: ${slug}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching expert advisor ${slug}:`, error);
        return null;
    }
}

export async function getFeaturedExpertAdvisors(): Promise<ExpertAdvisor[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/expert-advisors/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch featured expert advisors');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching featured expert advisors:', error);
        return null;
    }
}

// ============= Categories =============
export async function getCategories(): Promise<Category[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/categories`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch categories');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        return null;
    }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/categories/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch category: ${slug}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching category ${slug}:`, error);
        return null;
    }
}

// ============= Articles =============
export interface Article {
    id: number;
    slug: string;
    title: string;
    excerpt?: string;
    content: string;
    featured_image?: string;
    is_published: boolean;
    is_featured: boolean;
    views_count?: number;
    category_id?: number;
    category?: Category;
    author_id?: number;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
}

export interface ArticlesResponse {
    data: Article[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export async function getArticles(params?: {
    category?: string;
    per_page?: number;
    page?: number;
}): Promise<ArticlesResponse | null> {
    try {
        const queryParams = new URLSearchParams();
        if (params?.category) queryParams.append('category', params.category);
        if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
        if (params?.page) queryParams.append('page', params.page.toString());

        const url = `${API_BASE_URL}/articles${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch articles');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching articles:', error);
        return null;
    }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/articles/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch article: ${slug}`);
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching article ${slug}:`, error);
        return null;
    }
}

export async function getFeaturedArticles(): Promise<Article[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/articles/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch featured articles');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching featured articles:', error);
        return null;
    }
}

// ============= Products (Unified: EA, Indicators, Scripts) =============
export interface Product {
    id: number;
    slug: string;
    name: string;
    description: string;
    category: 'expert_advisors' | 'indicators' | 'scripts';
    category_label: string;
    price: number;
    formatted_price: string;
    access_type: 'free' | 'premium' | 'members_only';
    file_version?: string;
    downloads_count: number;
    views_count: number;
    rating?: number;
    is_featured: boolean;
    thumbnail?: {
        url: string;
        name: string;
    };
    featured_image?: {
        url: string;
        name: string;
    };
    created_at?: string;
    updated_at?: string;
}

export interface ProductsResponse {
    data: Product[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

/**
 * Fetch all products (EA, Indicators, Scripts) with optional filters
 */
export async function getProducts(params?: {
    category?: 'expert_advisors' | 'indicators' | 'scripts' | 'all';
    access_type?: 'free' | 'premium' | 'members_only';
    per_page?: number;
    page?: number;
    sort_by?: 'created_at' | 'popular' | 'price';
}): Promise<ProductsResponse | null> {
    try {
        const queryParams = new URLSearchParams();
        if (params?.category && params.category !== 'all') queryParams.append('category', params.category);
        if (params?.access_type) queryParams.append('access_type', params.access_type);
        if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.sort_by) queryParams.append('sort_by', params.sort_by);

        const url = `${API_BASE_URL}/products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }

        const result = await res.json();
        // Backend returns { success: true, data: {...} }
        return result.success ? result.data : null;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
}

/**
 * Fetch a single product by slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/products/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch product: ${slug}`);
        }

        const result = await res.json();
        return result.success ? result.data : null;
    } catch (error) {
        console.error(`Error fetching product ${slug}:`, error);
        return null;
    }
}

/**
 * Fetch featured products
 */
export async function getFeaturedProducts(): Promise<Product[] | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/products/featured`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch featured products');
        }

        const result = await res.json();
        return result.success ? result.data : null;
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return null;
    }
}

// ============= Auth API =============
export interface LoginResponse {
    user: {
        id: number;
        name: string;
        email: string;
        role?: string;
    };
    access_token: string;
}

export async function login(email: string, password: string): Promise<LoginResponse | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error('Login failed');
        }

        const data = await res.json();
        if (data.access_token && typeof window !== 'undefined') {
            localStorage.setItem('token', data.access_token);
        }
        return data;
    } catch (error) {
        console.error('Login error:', error);
        return null;
    }
}

export async function register(name: string, email: string, password: string): Promise<LoginResponse | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        if (!res.ok) {
            throw new Error('Registration failed');
        }

        const data = await res.json();
        if (data.access_token && typeof window !== 'undefined') {
            localStorage.setItem('token', data.access_token);
        }
        return data;
    } catch (error) {
        console.error('Register error:', error);
        return null;
    }
}

export async function getAuthUser(): Promise<any> {
    try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return null;

        const res = await fetch(`${API_BASE_URL}/auth/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
            throw new Error('Failed to get user');
        }

        return res.json();
    } catch (error) {
        console.error('Get user error:', error);
        return null;
    }
}

export async function logout(): Promise<boolean> {
    try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) return true;

        await fetch(`${API_BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
        });

        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
        }
        return true;
    } catch (error) {
        console.error('Logout error:', error);
        return false;
    }
}
