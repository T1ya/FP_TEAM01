import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const langBtnStyle = "font-semibold transition-transform duration-200";
  const activeLangBtnStyle = "text-white scale-110";
  const inactiveLangBtnStyle = "text-gray-400 hover:text-white hover:scale-105";

  return (
    <div className="flex gap-2 items-center bg-black/20 px-2 py-1 rounded-full">
      <button
        onClick={() => changeLanguage("ru")}
        className={`${langBtnStyle} ${i18n.resolvedLanguage === 'ru' ? activeLangBtnStyle : inactiveLangBtnStyle}`}
      >
        RU
      </button>
      <div className="w-px h-4 bg-gray-400"></div>
      <button
        onClick={() => changeLanguage("en")}
        className={`${langBtnStyle} ${i18n.resolvedLanguage === 'en' ? activeLangBtnStyle : inactiveLangBtnStyle}`}
      >
        EN
      </button>
    </div>
  );
};