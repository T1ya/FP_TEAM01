import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { cn } from "clsx-for-tailwind";
import { useCounter } from "../../hooks/useCounter";
//1
//1
//2
//3 bg-[#8B5E3C] hover:bg-[#734A2D]
//4 bg-[#D2B48C] hover:bg-[#b39b7a] 
//5 
//6 
const baseLink     = " rounded-md text-center px-6 py-3 font-semibold tracking-wide transition-colors duration-400";
const activeLink   = "bg-[#734A2D] bg-[#734A2D]  text-[#FFFCD4] shadow rounded-lg  hover:text-white hover:shadow-lg";
const inactiveLink = "bg-[#8B5E3C] hover:bg-[#734A2D] text-[#FFFCD4]  hover:text-white hover:shadow-lg hover:rounded-lg";



export const NavBar = () => {
  const { counter } = useCounter();

  return (
    <nav className="fixed z-50 top-0 w-full bg-[#8B5E3C]">
      <div className=" h-15  fixed bg-[#8B5E3C] top-0 gap-16   mx-auto w-full flex justify-center">
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) =>
            cn( baseLink, isActive ? activeLink : inactiveLink)
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
          Cart{counter > 0 && ` (${counter})`}
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
      </div>
    </nav>
  );
};