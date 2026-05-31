import { apiClient } from '../client';
import type { AuthUser, LoginPayload, RegisterPayload } from '../../types/auth.types';

export const authService = {
  login(payload: LoginPayload) {
    return apiClient<AuthUser>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  register(payload: RegisterPayload) {
    return apiClient<AuthUser>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
