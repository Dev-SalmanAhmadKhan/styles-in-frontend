// store/productsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/utils/data";
import { Product } from "@/utils/types";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: products,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
