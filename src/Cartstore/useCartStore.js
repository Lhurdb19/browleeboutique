import { create } from 'zustand';


const calculateCartTotals = (cartItems) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCart = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return { cartCount, totalCart };
};

export const useCartStore = create((set) => ({
  cartItems: [], 
  cartCount: 0, 
  totalCart: 0,  

 
  addItemToCart: (item) => set((state) => {
    const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
    let updatedCartItems;
    
    if (existingItem) {
      updatedCartItems = state.cartItems.map(cartItem => 
        cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
      );
    } else {
      updatedCartItems = [...state.cartItems, { ...item, quantity: 1 }];
    }

    const { cartCount, totalCart } = calculateCartTotals(updatedCartItems);

    return { cartItems: updatedCartItems, cartCount, totalCart };
  }),

  // Remove item from cart
  removeItemFromCart: (itemId) => set((state) => {
    const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId);

    if (existingItem && existingItem.quantity > 1) {
      const updatedCartItems = state.cartItems.map(cartItem =>
        cartItem.id === itemId 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
      );
      const { cartCount, totalCart } = calculateCartTotals(updatedCartItems);
      return { cartItems: updatedCartItems, cartCount, totalCart };
    } else {
      const updatedCartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
      const { cartCount, totalCart } = calculateCartTotals(updatedCartItems);
      return { cartItems: updatedCartItems, cartCount, totalCart };
    }
  }),

  // Clear a specific item from the cart
  clearItemFromCart: (itemId) => set((state) => {
    const updatedCartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
    const { cartCount, totalCart } = calculateCartTotals(updatedCartItems);
    return { cartItems: updatedCartItems, cartCount, totalCart };
  }),

  // Clear all items from the cart
  clearCart: () => set(() => ({
    cartItems: [],
    cartCount: 0,
    totalCart: 0
  })),
}));