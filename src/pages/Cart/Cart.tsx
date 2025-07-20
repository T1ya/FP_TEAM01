import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useCounter } from "../../hooks/useCounter";
import { ROUTES } from "../../constants/routes";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { decrement } = useCounter();
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">🛒 Ваша корзина</h2>

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
                className="flex items-center gap-4 bg-white p-4 rounded shadow"
              >
                <img
                  src={
                    Array.isArray(drink.image) ? drink.image[0] : drink.image
                  }
                  alt={drink.title}
                  width={80}
                  className="rounded"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{drink.title}</h3>
                  <p className="text-sm text-gray-600">{drink.description}</p>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(drink.id);
                    decrement();
                  }}
                  className="text-red-500 hover:text-red-700 font-bold text-xl"
                  title="Удалить из корзины"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t pt-4 flex flex-col items-end gap-4">
            <p className="text-xl font-bold">Итого: ${total.toFixed(2)}</p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Очистить всё
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
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
