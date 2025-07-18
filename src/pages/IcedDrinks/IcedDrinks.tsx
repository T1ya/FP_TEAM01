import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

interface Drink {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string | string[];
}

export const IcedDrinks = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const res = await fetch("https://api.sampleapis.com/coffee/iced");
        if (!res.ok) {
          throw new Error("Failed to fetch drinks");
        }
        const data: Drink[] = await res.json();
        setDrinks(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchDrinks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {drinks.map((drink) => (
      <div
        key={drink.id}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        {drink.image && (
          <img
            src={Array.isArray(drink.image) ? drink.image[0] : drink.image}
            alt={drink.title}
            className="w-full h-48 object-cover"
          />
        )}
        {/* <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{drink.title}</h2>
          <p className="text-sm text-gray-700">{drink.description}</p> */}
           <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{drink.title}</h2>
          <p className="text-sm text-gray-700 flex-grow">{drink.description}</p>
          <Link
            to={ROUTES.ADDONS}
            className="mt-2 inline-block bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-1 px-3 rounded"
          >
            Add-ons
          </Link>
        </div>
      </div>
    ))}
  </div>
);
};