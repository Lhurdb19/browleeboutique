import { create } from "zustand";

// Zustand store for shipping details
const useShippingDetails = create((set) => ({
  fullname: '',
  email: '',
  phoneNumber: '',
  second_phone: '',  // Optional
  address: '',
  city: '',
  state: '',
  setShippingDetails: (details) => set(() => ({ ...details })),
  clearShippingDetails: () => set(() => ({
    fullname: '',
    email: '',
    phoneNumber: '',
    second_phone: '',
    address: '',
    city: '',
    state: '',
  })),
}));

export default useShippingDetails;