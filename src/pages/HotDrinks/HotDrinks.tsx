import { useEffect, useState } from "react";
import type Drink from "../../types";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import { getPriceByType } from "../../utils/getPriceByType";

export const HotDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const type = "hot";
  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    try {
      const res = await fetch(`https://api.sampleapis.com/coffee/${type}`);
      const apiDrinks: Drink[] = await res.json();
      const pricedDrinks = apiDrinks.map((drink) => ({
        ...drink,
        price: getPriceByType(type),
      }));

      setDrinks(pricedDrinks);
    } catch (error) {
      console.error("Failed to fetch drinks:", error);
    }
  }

  return (
    <div className="p-8 min-h-screen">
      {/* <h2 className="text-3xl font-bold text-center mb-10">Products list</h2> */}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {drinks.map((drink) => (
          <li key={drink.id}>
            <DrinkCard drink={drink} type="hot" />
          </li>
        ))}
      </ul>
    </div>
  );
};
