import { create } from "zustand";

interface IStore {
  product: any[];
  updateProduct: (newProduct: any[]) => void;
  values: string;
  updateValue: (newValue: any) => void;
}

export const useProductStore = create<IStore>((set) => ({
  product: [],
  updateProduct: (newProduct: any[]) => {
    set({ product: newProduct });
  },
  values: '',
  updateValue: (newValue: any) => {
    set({ values: newValue });
  },
}));
 