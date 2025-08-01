import { useEffect, useState } from "react";
import type Drink from "../../types";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import { getPriceByType } from "../../utils/getPriceByType";


export const IcedDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const type = "iced";

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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {drinks.map((drink) => (
          <li key={drink.id}>
            <DrinkCard drink={drink} type="iced" />
          </li>
        ))}
      </ul>
    </div>
  );
};


//     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//     {drinks.map((drink) => (
//       <div
//         key={drink.id}
//         className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
//       >
//         {drink.image && (
//           <img
//             src={Array.isArray(drink.image) ? drink.image[0] : drink.image}
//             alt={drink.title}
//             className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
//           />
//         )}       
//            <div className="p-4 flex flex-col gap-2 flex-1">
//           <h2 className="text-lg font-semibold">{drink.title}</h2>
//           <p className="text-sm text-gray-700 flex-grow">{drink.description}</p>
//           <Link
//             to={`/drinks/iced/${drink.id}`}
//              className="mt-auto inline-block bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded text-center w-full"
//           >
//             Add-ons
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>
// );

