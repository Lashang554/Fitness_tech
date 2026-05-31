import type { AuthUser } from '../types/auth.types';

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
};

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
};
