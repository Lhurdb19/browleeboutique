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

  updateUser: (updatedData) => set((state) => {
    const newUser = { ...state.user, ...updatedData };
    localStorage.setItem('user', JSON.stringify(newUser)); // Persist to localStorage
    return { user: newUser };
  })
}));



// import { create } from "zustand";

// const getUserFromLocalStorage = () => {
//   const storedUser = localStorage.getItem('user');
//   return storedUser ? JSON.parse(storedUser) : null;
// };

// export const useAuthStore = create((set) => ({
//   user: getUserFromLocalStorage(),
//   login: (userData) => {
//     localStorage.setItem('user', JSON.stringify(userData));
//     set({ user: userData });
//   },

//   logout: () => {
//     localStorage.removeItem('user');
//     set({ user: null });
//   },

//   updateUser: (updatedData) => set((state) => {
//     const newUser = { ...state.user, ...updatedData };
//     localStorage.setItem('user', JSON.stringify(newUser)); // Persist to localStorage
//     return { user: newUser };
//   })
// }));