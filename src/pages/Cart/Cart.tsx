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
      <h2 className="text-3xl font-bold mb-6 text-center text-white">🛒 Ваша корзина</h2>

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
                className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-md"
              >
                <img
                  src={
                    Array.isArray(drink.image) ? drink.image[0] : drink.image
                  }
                  alt={drink.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                {/* 1. Убрали md:text-left с этого контейнера */}
                <div className="flex-grow text-center">
                  {/* 2. Добавили md:text-left к текстовым элементам */}
                  <h3 className="text-xl font-semibold md:text-left">{drink.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2 md:text-left">
                    {drink.description}
                  </p>
                  <p className="text-lg font-bold text-green-700 mt-1 md:text-left">
                    ${drink.price}
                  </p>
                  
                  {/* 3. Убрали md:justify-start у счётчика, чтобы он всегда был по центру */}
                  <div className="flex items-center justify-center gap-3 mt-2">
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
                </div>

                <button
                  onClick={() => {
                    removeFromCart(drink.id);
                  }}
                  // 4. Упростили выравнивание кнопки удаления
                  className="text-red-500 hover:text-red-700 font-bold text-2xl ml-auto self-center"
                  title="Удалить из корзины"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t pt-4 flex flex-col items-end gap-4">
            <p className="text-2xl font-bold text-white">Итого: ${total.toFixed(2)}</p>
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