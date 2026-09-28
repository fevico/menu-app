import { MenuItem } from "@/utils/menu-data";
import { create } from "zustand";

interface WishlistState {
  wishlist: MenuItem[];
  toggleWishlist: (item: MenuItem) => void;
  getTotalCount: () => number;
}

export const useWishlistStore = create((set) => ({
  wishlist: [],
  toggleWishlist: (item: MenuItem) =>
    set((state: any) => {
      const exists = state.wishlist.some((dish: MenuItem) => dish.id === item.id);
      return {
        wishlist: exists
          ? state.wishlist.filter((dish: MenuItem) => dish.id !== item.id) // Remove if already saved
          : [...state.wishlist, item], // Add full item if not saved
      };
    }),
  getTotalCount: () => get().wishlist.length,
}));