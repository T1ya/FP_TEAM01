import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { cn } from "clsx-for-tailwind";
import { useCounter } from "../../hooks/useCounter";

const baseLink = "px-3 py-1 rounded-lg font-medium transition";

const activeLink = "bg-blue-600 text-white";
const inactiveLink = "text-gray-200 hover:bg-gray-800";

export const NavBar = () => {
  const { counter } = useCounter();
  return (
    <nav className="flex justify-center gap-4 bg-gray-900 py-3 shadow rounded-xl">
      <NavLink
        to={ROUTES.HOME}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.ORDER}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Select
      </NavLink>
      <NavLink
        to={ROUTES.HOT}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Hot Drinks
      </NavLink>
      <NavLink
        to={ROUTES.ICED}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Iced Drinks
      </NavLink>
      <NavLink
        to={ROUTES.CART}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Cart
        {counter > 0 && (
          <span className="ml-2 inline-block bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
            {counter}
          </span>
        )}
      </NavLink>
      <NavLink
        to={ROUTES.BREWING}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Brewing
      </NavLink>
      <NavLink
        to={ROUTES.READY}
        className={({ isActive }) =>
          cn(baseLink, isActive ? activeLink : inactiveLink)
        }
      >
        Ready
      </NavLink>
    </nav>
  );
};
