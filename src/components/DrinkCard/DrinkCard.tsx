import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import type Drink from "../../types";
import { useTranslation } from "react-i18next";
import { getDrinkTranslationKey } from "../../i18n";

interface Props {
  drink: Drink;
  type?: "hot" | "iced";
  showAddToCart?: boolean;
  showLink?: boolean;
}

export default function DrinkCard({
  drink,
  type = "hot",
  showAddToCart = true,
  showLink = true,
}: Props) {
  const { addToCart } = useCart();
  const { t } = useTranslation();

  
  const drinkKey = getDrinkTranslationKey(drink.title);

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300">
      <div className="relative">
        <img
          src={Array.isArray(drink.image) ? drink.image[0] : drink.image}
          alt={drink.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          ${drink.price}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        
        <h2 className="text-lg font-semibold text-gray-900">
          {drinkKey ? t(`${drinkKey}_title`) : drink.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {drinkKey ? t(`${drinkKey}_desc`) : drink.description}
        </p>
        
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">{t('ingredients')}:</span>{" "}
          {drinkKey ? t(`${drinkKey}_ingredients`) : (Array.isArray(drink.ingredients) ? drink.ingredients.join(", ") : "Нет данных")}
        </div>
        
        <div className="mt-auto flex justify-center gap-2">
          {showAddToCart && (
            <button
              onClick={() => addToCart(drink)}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded"
            >
              {t('addToCart')}
            </button>
          )}
          {showLink && (
            <Link
              to={`/drinks/${type}/${drink.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded text-center"
            >
              {t('details')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}