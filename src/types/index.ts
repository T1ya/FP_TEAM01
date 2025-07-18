import type { ReactNode } from "react";

export interface Drink   {
    price: ReactNode;
    title: string,
    description: string,
    ingredients: string[],
    image: string[] | string,
    id:number
  }
