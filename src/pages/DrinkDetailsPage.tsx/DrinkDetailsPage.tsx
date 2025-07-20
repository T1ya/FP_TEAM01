import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type Drink from "../../types";
import { getPriceByType } from "../../utils/getPriceByType";
import { useCart } from "../../hooks/useCart";
import { useCounter } from "../../hooks/useCounter";

export default function DrinkDetailPage() {
  const navigate = useNavigate();
  const { type, id } = useParams<{ type: string; id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const { addToCart } = useCart();
  const { increment } = useCounter();

  useEffect(() => {
    async function loadDrink() {
      if (!type || !id) return;
      const res = await fetch(
        `https://api.sampleapis.com/coffee/${type}/${id}`
      );
      const data = await res.json();
      setDrink({ ...data, price: getPriceByType(type) });
    }

    loadDrink();
  }, [type, id]);

  if (!drink) return <p className="p-6 text-gray-500">Загрузка напитка...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={Array.isArray(drink.image) ? drink.image[0] : drink.image}
          alt={drink.title}
          className="w-full md:w-1/2 h-auto rounded-xl object-cover"
        />

        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{drink.title}</h1>
          <p className="text-gray-600 text-lg">{drink.description}</p>

          <div className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Ингредиенты:</span>{" "}
            {drink.ingredients.join(", ")}
          </div>

          <div className="text-2xl font-bold text-green-700 mt-2">
            ${drink.price}
          </div>

          <button
            onClick={() => {
              addToCart(drink);
              increment();
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Добавить в корзину
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600 hover:text-blue-600 mb-6"
          >
            ← Назад
          </button>
        </div>
      </div>
    </div>
  );
}
