// src/pages/Cart/Cart.tsx

import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { ROUTES } from "../../constants/routes";

export default function Cart() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0
  );
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-4xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-300">🛒 Ваша корзина</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">
          Пока пусто — добавьте напитки ☕
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((drink) => (
              <li
                key={drink.id}
                
                className="relative flex flex-col md:flex-row items-stretch gap-4 bg-white/60 p-4 rounded-xl shadow-lg"
              >
                <img
                  src={
                    Array.isArray(drink.image) ? drink.image[0] : drink.image
                  }
                  alt={drink.title}
                  className="w-24 md:w-32 object-cover rounded-lg flex-shrink-0"
                />

                
                <div className="flex-grow flex flex-col pb-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">{drink.title}</h3>
                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                      {drink.description}
                    </p>
                    <p className="text-lg font-bold text-green-700 mt-1">
                      ${drink.price}
                    </p>
                  </div>
                </div>
                
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(drink.id)}
                    className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-full hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">
                    {drink.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(drink.id)}
                    className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-full hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(drink.id);
                  }}
                  className="absolute top-2 right-3 text-red-500 hover:text-red-700 font-bold text-2xl"
                  title="Удалить из корзины"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-gray-400 pt-4 flex flex-col items-end gap-4">
            <p className="text-2xl font-bold text-blue-600">Итого: ${total.toFixed(2)}</p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg font-semibold"
              >
                Очистить всё
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                onClick={() => navigate(ROUTES.BREWING)}
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}