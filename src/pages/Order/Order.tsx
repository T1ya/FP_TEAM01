import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export default function Order() {
  const navigate = useNavigate();

  const handleHotDrink = () => navigate(ROUTES.HOT);
  const handleIcedDrink = () => navigate(ROUTES.ICED);

  return (
    <div className=" flex flex-col items-center justify-center text-gray-800 p-6">
      <h2 className="text-4xl font-bold mb-6 text-center drop-shadow">
        Выберите напиток
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          type="button"
          onClick={handleHotDrink}
          className="bg-red-500 hover:bg-red-600 text-white text-lg py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
        >
          Горячие напитки
        </button>

        <button
          type="button"
          onClick={handleIcedDrink}
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
        >
          Холодные напитки
        </button>
      </div>
    </div>
  );
}
