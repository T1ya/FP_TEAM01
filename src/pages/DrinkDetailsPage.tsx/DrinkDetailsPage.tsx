import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type Drink from "../../types";
import { useCart } from "../../hooks/useCart";
import { useTranslation } from "react-i18next";
import { getDrinkTranslationKey } from "../../i18n";

export default function DrinkDetailsPage() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${type}/${id}`)
      .then((res) => res.json())
      .then((data) => setDrink(data))
      .catch(console.error);
  }, [type, id]);

  if (!drink) {
    return <div>{t('loadingDrink')}</div>;
  }
  
  const drinkKey = getDrinkTranslationKey(drink.title);

  return (
    <div className="container mx-auto p-8">
        <button onClick={() => navigate(-1)} className="mb-4 bg-gray-200 px-4 py-2 rounded">
            {t('backButton')}
        </button>
        <div className="bg-white rounded-lg shadow-xl p-6 md:flex gap-8">
            <img src={Array.isArray(drink.image) ? drink.image[0] : drink.image} alt={drink.title} className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0" />
            <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">
                  {drinkKey ? t(`${drinkKey}_title`) : drink.title}
                </h1>
                
                <p className="text-gray-700 mb-4">
                  {drinkKey ? t(`${drinkKey}_desc`) : drink.description}
                </p>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">{t('ingredients')}:</h2>
                    <ul className="list-disc list-inside">
                        <li>
                          {drinkKey ? t(`${drinkKey}_ingredients`) : (Array.isArray(drink.ingredients) ? drink.ingredients.join(", ") : "Нет данных")}
                        </li>
                    </ul>
                </div>
                <button 
                    onClick={() => addToCart(drink)} 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    {t('addToCart')}
                </button>
            </div>
        </div>
    </div>
  );
}