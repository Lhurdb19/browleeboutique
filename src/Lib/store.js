import { create } from "zustand";

const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

export const useAuthStore = create((set) => ({
  user: getUserFromLocalStorage(),
  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    set({ user: userData });
  },
  
  Logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));