import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants/routes";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.ORDER);
  };
return (
    <section
      className="flex flex-col items-center justify-center w-full h-[70vh] text-white bg-cover bg-center rounded-xl"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-center">
        Здесь варят самый вкусный кофе
      </h1>
      <p className="text-xl md:text-2xl mb-6 drop-shadow-md text-center">
        Закажи сейчас!
      </p>
      <button 
        onClick={handleClick}
        className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-6 rounded-lg shadow">
        Заказать
      </button>
    </section>
  )
}