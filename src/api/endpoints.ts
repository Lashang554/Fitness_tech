import { env } from '../config/env';

export const API_ENDPOINTS = {
  baseUrl: env.apiUrl,
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  workouts: '/workouts',
  nutrition: '/nutrition',
} as const;
