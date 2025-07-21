export default interface Drink {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string[] | string;
  price: number;
  quantity?: number;
}
