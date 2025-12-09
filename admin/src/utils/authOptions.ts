// next
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// project-imports
import axios from 'utils/axios';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          // Call NestJS backend /auth/login endpoint
          const response = await axios.post('/auth/login', {
            email: credentials?.email,
            password: credentials?.password
          });

          if (response.data && response.data.user) {
            const user = response.data.user;
            user.accessToken = response.data.access_token;
            return user;
          }

          return null;
        } catch (e: any) {
          const errorMessage = e?.message || e?.response?.data?.message || 'Invalid credentials!';
          throw new Error(errorMessage);
        }
      }
    }),
    CredentialsProvider({
      id: 'register',
      name: 'Register',
      credentials: {
        name: { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter Name' },
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          // Call NestJS backend /auth/register endpoint
          const response = await axios.post('/auth/register', {
            name: credentials?.name,
            email: credentials?.email,
            password: credentials?.password
          });

          if (response.data && response.data.user) {
            const user = response.data.user;
            user.accessToken = response.data.access_token;
            return user;
          }

          return null;
        } catch (e: any) {
          const errorMessage = e?.message || e?.response?.data?.message || 'Registration failed!';
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        // @ts-ignore
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.provider = token.provider;
        session.token = token;
        if (session.user) {
          session.user.id = token.id as string;
          session.user.email = token.email as string;
          session.user.name = token.name as string;
        }
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_APP_JWT_TIMEOUT!) || 604800 // 7 days
  },
  jwt: {
    secret: process.env.NEXT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
};
