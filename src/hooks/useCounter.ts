import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be use withtin CounterProvider");
  }
  const { setCounter, counter } = context;

  function increment() {
    setCounter((prev: number) => prev + 1);
  }
  function decrement() {
    setCounter((prev: number) => prev - 1);
  }
  function reset() {
    setCounter(0);
  }

  return { counter, increment, decrement, reset };
};