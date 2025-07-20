import { useState } from "react";
import type Drink from "../types";
import { CartContext } from "../context/CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Drink[]>([]);

  const addToCart = (drink: Drink) => {
    setCart((prev) => [...prev, drink]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((d) => d.id != id));
  };

  const clearCart = () => setCart([]);

  return(
    <CartContext.Provider value = {{cart, addToCart, removeFromCart, clearCart}}>
        {children}
        </CartContext.Provider>
  )
};
