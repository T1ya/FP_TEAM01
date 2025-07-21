import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { cn } from "clsx-for-tailwind";
import { useCounter } from "../../hooks/useCounter";

const baseLink =
  "px-3 py-2 rounded-xl font-semibold transition-all duration-300";
const activeLink = "bg-[#6C3E25] text-white shadow-inner scale-[1.02]";

const inactiveLink = "text-brown-100 hover:bg-[#B97A57]/80 hover:text-white hover:shadow-md hover:scale-105";


export const NavBar = () => {
  const { counter } = useCounter();

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] z-50 bg-[#5C4033]/90 backdrop-blur-lg shadow-md rounded-b-[80px]">

      <div className="max-w-7xl mx-auto px-6 py-2 grid grid-cols-6 items-center gap-2">
        {/* Логотип — 1 колонка */}
        <div className="flex items-center gap-2 text-white text-lg font-bold justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <span>CoffeeBar</span>
        </div>

        {/* Навигация — остальные 5 колонок */}
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) =>
            cn(baseLink, isActive ? activeLink : inactiveLink)
          }
        >
          Главная
        </NavLink>
        <NavLink
          to={ROUTES.ORDER}
          className={({ isActive }) =>
            cn(baseLink, isActive ? activeLink : inactiveLink)
          }
        >
          Выбор
        </NavLink>
        <NavLink
          to={ROUTES.HOT}
          className={({ isActive }) =>
            cn(baseLink, isActive ? activeLink : inactiveLink)
          }
        >
          ☕ Горячие
        </NavLink>
        <NavLink
          to={ROUTES.ICED}
          className={({ isActive }) =>
            cn(baseLink, isActive ? activeLink : inactiveLink)
          }
        >
          🧊 Холодные
        </NavLink>
        <NavLink
          to={ROUTES.CART}
          className={({ isActive }) =>
            cn(baseLink, isActive ? activeLink : inactiveLink)
          }
        >
          Корзина
          {counter > 0 && (
            <span className="ml-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 shadow-sm">
              {counter}
            </span>
          )}
        </NavLink>
      </div>

    </header>
  );
};
