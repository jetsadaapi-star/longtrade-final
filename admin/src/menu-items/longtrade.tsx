// types
import { NavItemType } from 'types/menu';

// icons
import { Book1, Category, Profile2User, ShoppingCart, Setting2, Element3, DocumentText } from 'iconsax-react';

// ==============================|| LONGTRADE ADMIN MENU ||============================== //

const longtrade: NavItemType = {
    id: 'longtrade',
    title: 'LongTrade',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: Element3
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/longtrade/users',
            icon: Profile2User
        },
        {
            id: 'content',
            title: 'Content',
            type: 'collapse',
            icon: Book1,
            children: [
                {
                    id: 'courses',
                    title: 'Courses',
                    type: 'item',
                    url: '/longtrade/courses'
                },
                {
                    id: 'articles',
                    title: 'Articles',
                    type: 'item',
                    url: '/longtrade/articles'
                },
                {
                    id: 'ebooks',
                    title: 'E-books',
                    type: 'item',
                    url: '/longtrade/ebooks'
                }
            ]
        },
        {
            id: 'products',
            title: 'Products',
            type: 'collapse',
            icon: ShoppingCart,
            children: [
                {
                    id: 'indicators',
                    title: 'Indicators',
                    type: 'item',
                    url: '/longtrade/indicators'
                },
                {
                    id: 'expert-advisors',
                    title: 'Expert Advisors',
                    type: 'item',
                    url: '/longtrade/expert-advisors'
                },
                {
                    id: 'all-products',
                    title: 'All Products',
                    type: 'item',
                    url: '/longtrade/products'
                }
            ]
        },
        {
            id: 'categories',
            title: 'Categories',
            type: 'item',
            url: '/longtrade/categories',
            icon: Category
        },
        {
            id: 'orders',
            title: 'Orders & Subscriptions',
            type: 'collapse',
            icon: DocumentText,
            children: [
                {
                    id: 'enrollments',
                    title: 'Enrollments',
                    type: 'item',
                    url: '/longtrade/enrollments'
                },
                {
                    id: 'subscriptions',
                    title: 'Subscriptions',
                    type: 'item',
                    url: '/longtrade/subscriptions'
                }
            ]
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'collapse',
            icon: Setting2,
            children: [
                {
                    id: 'site-settings',
                    title: 'Site Settings',
                    type: 'item',
                    url: '/longtrade/settings'
                },
                {
                    id: 'promotions',
                    title: 'Promotions',
                    type: 'item',
                    url: '/longtrade/promotions'
                }
            ]
        }
    ]
};

export default longtrade;
