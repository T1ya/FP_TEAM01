// src/context/CounterContext.tsx

import { createContext, type Dispatch, type SetStateAction,  } from "react";

interface CounterContextType {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  // Добавляем setCounter в тип
  setCounter: Dispatch<SetStateAction<number>>; 
}

export const CounterContext = createContext<CounterContextType | null>(null);