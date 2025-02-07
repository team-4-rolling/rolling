import { create } from "zustand";

const useLoading = create((set) => ({
  isLoading: false,
  setIsLoading: (state) => set({ isLoading: state }),
}));

export default useLoading;
