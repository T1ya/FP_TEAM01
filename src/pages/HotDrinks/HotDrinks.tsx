import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type Drink from "../../types";

export const HotDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  useEffect(() => {
    fetchDrinks();
  }, []);

  async function fetchDrinks() {
    try {
      const res = await fetch("https://api.sampleapis.com/coffee/hot");
      const apiDrinks: Drink[] = await res.json();

      setDrinks(apiDrinks);
    } catch (error) {
      console.error("Failed to fetch drinks:", error);
    }
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Products list</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {drinks.map((p) => (
          <li
            key={"product" + p.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col
                       transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={Array.isArray(p.image) ? p.image[0] : p.image}
              alt={p.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {p.description}
              </p>

              <span className="text-1xl font-bold text-green-600 mb-4">
                ${p.price}
              </span>

              <Link
                to={`/drinks/hot/${p.id}`}
                className="mt-auto bg-blue-500 text-white font-bold py-2 px-6 rounded-lg text-center
                           hover:bg-blue-600 transition-colors"
              >
                To product
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
