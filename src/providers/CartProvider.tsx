// src/providers/CartProvider.tsx

import { useState } from "react";
import type Drink from "../types";
import { CartContext } from "../context/CartContext";
import { useCounter } from "../hooks/useCounter";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Drink[]>([]);
  const { increment, decrement, reset, setCounter } = useCounter();

  const addToCart = (drink: Drink) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === drink.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === drink.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...drink, quantity: 1 }];
      }
    });
    increment();
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
    increment();
  };

  const decreaseQuantity = (id: number) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart && itemInCart.quantity === 1) {
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
      );
      decrement();
    }
  };

  const removeFromCart = (id: number) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      setCounter((prev) => prev - (itemToRemove.quantity || 0));
    }
    setCart((prev) => prev.filter((d) => d.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    reset();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};