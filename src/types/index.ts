import type { ReactNode } from "react";

export default interface Drink   {
    price: ReactNode | undefined;
    title: string,
    description: string,
    ingredients: string[],
    image: string[] | string,
    id:number,
    quantity?: number;
  }
