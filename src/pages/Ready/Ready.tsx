
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useCart } from "../../hooks/useCart";
import { useCounter } from "../../hooks/useCounter";
import { useTranslation } from "react-i18next";

const Ready: React.FC = () => {
  const navigate = useNavigate();
  const { reset } = useCounter();
  const { clearCart } = useCart();
  const { t } = useTranslation();

  /*  временно отключим этот блок. 
    Если кнопка заработает, значит, ошибка была здесь.
  */
  // useEffect(() => {
  //   reset();
  //   clearCart();
  // }, [reset, clearCart]);

  const handleBackHome = () => {
    
    reset();
    clearCart();
    navigate(ROUTES.HOME);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1536520002442-39764a41e979?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-white/70 rounded-2xl p-8 shadow-2xl w-[600px] flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-32 h-20 bg-brown-700 rounded-b-full relative z-10"></div>
          <div className="absolute top-2 right-[-18px] w-7 h-12 border-4 border-brown-700 rounded-full z-0"></div>
          <div className="absolute top-[-30px] left-[30%] w-2 h-10 bg-white/70 rounded-full animate-steam"></div>
          <div className="absolute top-[-40px] left-[45%] w-2 h-12 bg-white/60 rounded-full animate-steam delay-200"></div>
          <div className="absolute top-[-50px] left-[60%] w-2 h-14 bg-white/50 rounded-full animate-steam delay-500"></div>
        </div>

        <p className="text-3xl font-bold text-brown-900 animate-pulse mb-2">
          {t('coffeeReady')}
        </p>
        <p className="text-xl font-medium text-brown-800 mb-8">
          {t('readySub')}
        </p>

        <button
          onClick={handleBackHome}
          className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 px-32 rounded-lg shadow-lg transition-all duration-300 text-lg"
        >
          {t('toMainPage')}
        </button>
      </div>

      <style>
        {`
          @keyframes steam {
            0% {
              opacity: 0.6;
              transform: translateY(0) scaleX(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-40px) scaleX(1.2);
            }
          }

          .animate-steam {
            animation: steam 2s infinite ease-in-out;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-500 {
            animation-delay: 0.5s;
          }

          .bg-brown-700 {
            background-color: #5C4033;
          }

          .border-brown-700 {
            border-color: #5C4033;
          }
        `}
      </style>
    </div>
  );
};

export default Ready;