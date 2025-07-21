import { createContext } from "react";
import type Drink from "../types";

interface CartContextType {
  cart: Drink[];
  addToCart: (drink: Drink) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);
