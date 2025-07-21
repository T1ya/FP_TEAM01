import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.ORDER);
  };

  return (
    <section
      className="flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605478088100-7d6a48b3a4f3?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-2xl w-[600px] flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6 text-brown-900 drop-shadow">
          Добро пожаловать!
        </h1>
        <p className="text-2xl font-semibold text-brown-800 mb-8">
          Здесь варят самый вкусный кофе. <br /> Закажи чашечку прямо сейчас!
        </p>
        <button
  onClick={handleClick}
  className="bg-[#8B5E3C] hover:bg-[#734A2D] text-white text-xl font-semibold py-4 px-6 w-full rounded-lg shadow transition-all duration-300"
>
  ☕ Заказать
</button>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};