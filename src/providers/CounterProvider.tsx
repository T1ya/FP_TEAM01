// src/providers/CounterProvider.tsx

import { useState } from "react";
import { CounterContext } from "../context/CounterContext";

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCounter(0);

  return (
    <CounterContext.Provider
      // Добавляем setCounter в value
      value={{ counter, increment, decrement, reset, setCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};