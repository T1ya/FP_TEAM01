import { createContext } from "react";
import type Drink from "../types";

interface CartContextType {
  cart: Drink[];
  addToCart: (drink: Drink) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);
