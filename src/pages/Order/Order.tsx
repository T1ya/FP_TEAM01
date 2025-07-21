import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export default function Order() {
  const navigate = useNavigate();

  const handleHotDrink = () => navigate(ROUTES.HOT);
  const handleIcedDrink = () => navigate(ROUTES.ICED);

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1536520002442-39764a41e979?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-white/70 rounded-2xl p-12 shadow-xl w-[600px] flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-8 text-brown-900 drop-shadow">
          Выберите напиток
        </h2>
        <div className="flex flex-col gap-5 w-full">
          <button
            type="button"
            onClick={handleHotDrink}
            className="bg-[#8B5E3C] hover:bg-[#734A2D] text-white text-xl py-4 px-6 rounded-lg shadow transition-all duration-300"
          >
            ☕ Горячие напитки
          </button>
          <button
            type="button"
            onClick={handleIcedDrink}
            className="bg-[#D2B48C] hover:bg-[#b39b7a] text-brown-900 text-xl py-4 px-6 rounded-lg shadow transition-all duration-300"
          >
            🧊 Холодные напитки
          </button>
        </div>
      </div>
    </div>
  );
}