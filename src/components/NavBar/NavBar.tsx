import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { cn } from "clsx-for-tailwind";
import { useCounter } from "../../hooks/useCounter";
import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

const baseLink = "px-3 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center";
const activeLink = "bg-[#6C3E25] text-white shadow-inner scale-[1.02]";
const inactiveLink = "text-brown-100 hover:bg-[#B97A57]/80 hover:text-white hover:shadow-md hover:scale-105";

export const NavBar = () => {
  const { counter } = useCounter();
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] z-50 bg-[#5C4033]/90 backdrop-blur-lg shadow-md rounded-b-[80px]">
      <div className="max-w-7xl mx-auto px-6 py-2 grid grid-cols-7 items-center gap-2">
        <div className="flex items-center gap-2 text-white text-lg font-bold justify-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span>CoffeeBar</span>
        </div>

        <NavLink to={ROUTES.HOME} className={({ isActive }) => cn(baseLink, isActive ? activeLink : inactiveLink)}>
          {t("navHome")}
        </NavLink>
        <NavLink to={ROUTES.ORDER} className={({ isActive }) => cn(baseLink, isActive ? activeLink : inactiveLink)}>
          {t("navSelect")}
        </NavLink>
        <NavLink to={ROUTES.HOT} className={({ isActive }) => cn(baseLink, isActive ? activeLink : inactiveLink)}>
          {t("navHot")}
        </NavLink>
        <NavLink to={ROUTES.ICED} className={({ isActive }) => cn(baseLink, isActive ? activeLink : inactiveLink)}>
          {t("navIced")}
        </NavLink>
        <NavLink to={ROUTES.CART} className={({ isActive }) => cn(baseLink, isActive ? activeLink : inactiveLink)}>
          {t("navCart")}
          {counter > 0 && (
            <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 shadow-sm">
              {counter}
            </span>
          )}
        </NavLink>
        
        
        <div className="flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};