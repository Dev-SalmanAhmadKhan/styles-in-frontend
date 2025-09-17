import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/store/cartSlice";
import { Product } from "@/utils/types";

export const useCart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  return {
    items,
    cartCount,
    cartTotal,
    addToCart: (product: Product, quantity: number) =>
      dispatch(addToCart({ product, quantity })),
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    updateQuantity: (id: number, quantity: number) =>
      dispatch(updateQuantity({ id, quantity })),
    clearCart: () => dispatch(clearCart()),
  };
};
