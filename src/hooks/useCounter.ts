// src/hooks/useCounter.ts

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be use withtin CounterProvider");
  }
  // Теперь мы получаем setCounter из контекста
  const { counter, setCounter } = context;

  function increment() {
    setCounter((prev: number) => prev + 1);
  }
  function decrement() {
    setCounter((prev: number) => (prev > 0 ? prev - 1 : 0));
  }
  function reset() {
    setCounter(0);
  }

  // И возвращаем его вместе с остальными функциями
  return { counter, increment, decrement, reset, setCounter };
};