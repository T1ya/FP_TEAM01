import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Для удобства создаем ключи для напитков
const drinkKeys = {
  // Hot Drinks
  "Espresso": "espresso",
  "Espresso Macchiato": "espressoMacchiato",
  "Latte": "latte",
  "Cappuccino": "cappuccino",
  "Americano": "americano",
  "Cortado": "cortado",
  "Mocha": "mocha",
  "Flat White": "flatWhite",
  "Affogato": "affogato", // Дубликат удален отсюда
  "Irish Coffee": "irishCoffee",
  "Turkish Coffee": "turkishCoffee",
  "Cuban Coffee": "cubanCoffee",
  "Bulletproof Coffee": "bulletproofCoffee",
  "Vienna Coffee": "viennaCoffee",
  "Lungo": "lungo",
  "Doppio": "doppio",
  "Red Eye": "redEye",
  "Black Eye": "blackEye",
  "Caramel Latte": "caramelLatte",
  "Cinnamon Latte": "cinnamonLatte",

  // Iced Drinks
  "Iced Coffee": "icedCoffee",
  "Iced Latte": "icedLatte",
  "Iced Americano": "icedAmericano",
  "Iced Mocha": "icedMocha",
  "Iced Chai Latte": "icedChaiLatte",
  "Iced Matcha Latte": "icedMatchaLatte",
  "Cold Brew": "coldBrew",
  "Nitro Cold Brew": "nitroColdBrew",
  "Iced Dirty Chai": "icedDirtyChai",
  "Frappuccino": "frappuccino",
  "Shakerato": "shakerato",
  "Mazagran": "mazagran",
  "Iced Espresso": "icedEspresso",
  "Espresso Tonic": "espressoTonic",
  "Apelsinjuice": "apelsinjuice",
  "Frozen Lemonade": "frozenLemonade",
  "Latte Amaretto": "latteAmaretto",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translation: {
          // --- СТАТИЧНЫЙ ТЕКСТ ---
          navHome: "Главная",
          navSelect: "Выбор",
          navHot: "☕ Горячие",
          navIced: "🧊 Холодные",
          navCart: "Корзина",
          welcome: "Добро пожаловать!",
          welcomeSub: "Здесь варят самый вкусный кофе. <br /> Закажи чашечку прямо сейчас!",
          orderButton: "☕ Заказать",
          selectDrink: "Выберите напиток",
          hotDrinks: "☕ Горячие напитки",
          coldDrinks: "🧊 Холодные напитки",
          ingredients: "Ингредиенты",
          addToCart: "В корзину",
          details: "Подробнее",
          loadingDrink: "Загрузка напитка...",
          backButton: "← Назад",
          yourCart: "Ваша корзина",
          cartEmpty: "Пока пусто — добавьте напитки ☕",
          total: "Итого",
          clearAll: "Очистить всё",
          placeOrder: "Оформить заказ",
          brewing: "Готовим напиток...",
          coffeeReady: "Ваш кофе готов!",
          readySub: "Идеальный момент — прямо сейчас 🤎",
          toMainPage: "На главную",
          aboutUs: "О нас",
          aboutUsText: "Наша кофейня — это место, где каждый глоток рассказывает историю. Заходите за чашечкой тепла и уюта в самом сердце города.",
          contact: "Контакты",
          followUs: "Следите за нами",

          // --- ПЕРЕВОДЫ НАПИТКОВ ---

          // --- ГОРЯЧИЕ ---
          espresso_title: "Эспрессо",
          espresso_desc: "Концентрированный кофейный напиток с густой пенкой крема.",
          espresso_ingredients: "Молотый кофе, Горячая вода",

          espressoMacchiato_title: "Эспрессо Макиато",
          espressoMacchiato_desc: "Эспрессо с небольшим количеством молочной пены.",
          espressoMacchiato_ingredients: "Эспрессо, Молочная пена",

          latte_title: "Латте",
          latte_desc: "Напиток на основе эспрессо с большим количеством вспененного молока.",
          latte_desc_long: "Латте - это кофейный напиток, приготовленный из эспрессо и вспененного молока. Он отличается более мягким и молочным вкусом по сравнению с капучино.",
          latte_ingredients: "Эспрессо, Вспененное молоко",

          cappuccino_title: "Капучино",
          cappuccino_desc: "Идеальный баланс эспрессо, горячего молока и молочной пены.",
          cappuccino_ingredients: "Эспрессо, Горячее молоко, Молочная пена",

          americano_title: "Американо",
          americano_desc: "Классический черный кофе, приготовленный путем добавления горячей воды в эспрессо.",
          americano_ingredients: "Эспрессо, Горячая вода",
          
          cortado_title: "Кортадо",
          cortado_desc: "Эспрессо, смешанный с равным количеством теплого молока для уменьшения кислотности.",
          cortado_ingredients: "Эспрессо, Теплое молоко",

          mocha_title: "Мокка",
          mocha_desc: "Гибрид капучино и горячего шоколада. Эспрессо, молоко и шоколад.",
          mocha_ingredients: "Эспрессо, Шоколадный сироп, Вспененное молоко",

          flatWhite_title: "Флэт Уайт",
          flatWhite_desc: "Напиток из двойной порции эспрессо и тонкого слоя молочной пены.",
          flatWhite_ingredients: "Двойной эспрессо, Молочная пена",
          
          affogato_title: "Аффогато",
          affogato_desc: "Десерт из шарика ванильного мороженого, залитого порцией горячего эспрессо.",
          affogato_ingredients: "Эспрессо, Ванильное мороженое",

          irishCoffee_title: "Ирландский кофе",
          irishCoffee_desc: "Коктейль из горячего кофе, ирландского виски, сахара, увенчанный взбитыми сливками.",
          irishCoffee_ingredients: "Кофе, Ирландский виски, Сахар, Взбитые сливки",
          
          turkishCoffee_title: "Кофе по-турецки",
          turkishCoffee_desc: "Кофе очень мелкого помола, сваренный в турке.",
          turkishCoffee_ingredients: "Кофе мелкого помола, Вода, Сахар (по желанию)",

          cubanCoffee_title: "Кубинский кофе",
          cubanCoffee_desc: "Сладкий эспрессо, приготовленный с добавлением сахара демерара.",
          cubanCoffee_ingredients: "Эспрессо, Сахар демерара",

          bulletproofCoffee_title: "Бронебойный кофе",
          bulletproofCoffee_desc: "Черный кофе, смешанный с маслом и маслом MCT.",
          bulletproofCoffee_ingredients: "Кофе, Сливочное масло, Масло MCT",

          viennaCoffee_title: "Кофе по-венски",
          viennaCoffee_desc: "Двойной эспрессо со взбитыми сливками вместо молока и сахара.",
          viennaCoffee_ingredients: "Двойной эспрессо, Взбитые сливки",
          
          lungo_title: "Лунго",
          lungo_desc: "Эспрессо с большим количеством воды. Менее крепкий, но более горький.",
          lungo_ingredients: "Эспрессо, Больше воды",
          
          doppio_title: "Доппио",
          doppio_desc: "Двойная порция эспрессо.",
          doppio_ingredients: "Двойной эспрессо",
          
          redEye_title: "Ред Ай (Красный глаз)",
          redEye_desc: "Фильтр-кофе с добавлением одной порции эспрессо.",
          redEye_ingredients: "Фильтр-кофе, Эспрессо",

          blackEye_title: "Блэк Ай (Черный глаз)",
          blackEye_desc: "Фильтр-кофе с добавлением двух порций эспрессо.",
          blackEye_ingredients: "Фильтр-кофе, Двойной эспрессо",
          
          caramelLatte_title: "Карамельный Латте",
          caramelLatte_desc: "Сладкий и нежный напиток с нотками карамели, который согреет в любую погоду.",
          caramelLatte_ingredients: "Эспрессо, Взбитое молоко, Карамельный сироп",

          cinnamonLatte_title: "Латте с корицей",
          cinnamonLatte_desc: "Теплый и ароматный латте с пряным вкусом корицы.",
          cinnamonLatte_ingredients: "Эспрессо, Взбитое молоко, Сироп с корицей",

          // --- ХОЛОДНЫЕ ---
          icedCoffee_title: "Айс-кофе",
          icedCoffee_desc: "Охлажденный кофе, обычно подается со льдом и молоком.",
          icedCoffee_ingredients: "Кофе, Лед, Молоко",

          icedLatte_title: "Айс-Латте",
          icedLatte_desc: "Эспрессо, холодное молоко и лед. Освежающая версия классического латте.",
          icedLatte_ingredients: "Эспрессо, Холодное молоко, Лед",

          icedAmericano_title: "Айс-Американо",
          icedAmericano_desc: "Эспрессо, разбавленный холодной водой и поданный со льдом.",
          icedAmericano_ingredients: "Эспрессо, Холодная вода, Лед",

          icedMocha_title: "Айс-Мокка",
          icedMocha_desc: "Охлажденная смесь эспрессо, шоколадного сиропа, молока и льда.",
          icedMocha_ingredients: "Эспрессо, Шоколадный сироп, Молоко, Лед",

          icedChaiLatte_title: "Айс-Чай Латте",
          icedChaiLatte_desc: "Пряный чай чай со специями, смешанный с молоком и поданный со льдом.",
          icedChaiLatte_ingredients: "Чай масала, Молоко, Лед",

          icedMatchaLatte_title: "Айс-Матча Латте",
          icedMatchaLatte_desc: "Японский зеленый чай матча, смешанный с молоком и льдом.",
          icedMatchaLatte_ingredients: "Чай матча, Молоко, Лед",

          coldBrew_title: "Колд Брю",
          coldBrew_desc: "Кофе, заваренный в холодной воде в течение длительного времени, с низким уровнем кислотности.",
          coldBrew_ingredients: "Кофе грубого помола, Холодная вода",
          
          nitroColdBrew_title: "Нитро Колд Брю",
          nitroColdBrew_desc: "Колд брю, насыщенный азотом для придания бархатистой текстуры.",
          nitroColdBrew_ingredients: "Колд брю, Азот",

          icedDirtyChai_title: "Айс-Грязный Чай",
          icedDirtyChai_desc: "Айс-чай латте с добавлением порции эспрессо.",
          icedDirtyChai_ingredients: "Чай масала, Молоко, Лед, Эспрессо",
          
          frappuccino_title: "Фраппучино",
          frappuccino_desc: "Смешанный ледяной напиток с кофе, молоком, льдом и сиропами, увенчанный взбитыми сливками.",
          frappuccino_ingredients: "Кофе, Молоко, Лед, Сироп, Взбитые сливки",

          shakerato_title: "Шейкерато",
          shakerato_desc: "Итальянский напиток из эспрессо, взбитого со льдом и сахарным сиропом.",
          shakerato_ingredients: "Эспрессо, Лед, Сахарный сироп",

          mazagran_title: "Мазагран",
          mazagran_desc: "Освежающий напиток из эспрессо, лимонного сока и льда.",
          mazagran_ingredients: "Эспрессо, Лимонный сок, Лед",

          icedEspresso_title: "Айс-Эспрессо",
          icedEspresso_desc: "Просто эспрессо, налитый на лед. Крепкий и холодный.",
          icedEspresso_ingredients: "Эспрессо, Лед",

          espressoTonic_title: "Эспрессо-тоник",
          espressoTonic_desc: "Освежающая смесь эспрессо и тоника со льдом.",
          espressoTonic_ingredients: "Эспрессо, Тоник, Лед",
          
          apelsinjuice_title: "Апельсиновый сок",
          apelsinjuice_desc: "Свежевыжатый апельсиновый сок, полный витаминов. Идеальное начало дня.",
          apelsinjuice_ingredients: "Апельсины",
          
          frozenLemonade_title: "Замороженный лимонад",
          frozenLemonade_desc: "Холодный лимонад, смешанный со льдом до состояния смузи.",
          frozenLemonade_ingredients: "Лимонный сок, Вода, Сахар, Лед",

          latteAmaretto_title: "Латте Амаретто",
          latteAmaretto_desc: "Латте с добавлением миндального сиропа Амаретto.",
          latteAmaretto_ingredients: "Эспрессо, Молоко, Сироп Амаретто",

        },
      },
      en: {
        translation: {
          // --- STATIC TEXT ---
          navHome: "Home",
          navSelect: "Select",
          navHot: "☕ Hot",
          navIced: "🧊 Iced",
          navCart: "Cart",
          welcome: "Welcome!",
          welcomeSub: "We brew the most delicious coffee here. <br /> Order a cup right now!",
          orderButton: "☕ Order",
          selectDrink: "Select a drink",
          hotDrinks: "☕ Hot Drinks",
          coldDrinks: "🧊 Iced Drinks",
          ingredients: "Ingredients",
          addToCart: "Add to cart",
          details: "Details",
          loadingDrink: "Loading drink...",
          backButton: "← Back",
          yourCart: "Your Cart",
          cartEmpty: "It's empty — add some drinks ☕",
          total: "Total",
          clearAll: "Clear All",
          placeOrder: "Place Order",
          brewing: "Brewing your drink...",
          coffeeReady: "Your coffee is ready!",
          readySub: "The perfect moment is right now 🤎",
          toMainPage: "To Main Page",
          aboutUs: "About Us",
          aboutUsText: "Our coffee shop is a place where every sip tells a story. Come in for a cup of warmth and comfort in the heart of the city.",
          contact: "Contact",
          followUs: "Follow Us",
          
          // --- DRINK TRANSLATIONS ---

          // --- HOT ---
          espresso_title: "Espresso",
          espresso_desc: "A concentrated coffee beverage with a thick crema.",
          espresso_ingredients: "Ground coffee, Hot water",

          espressoMacchiato_title: "Espresso Macchiato",
          espressoMacchiato_desc: "Espresso with a small amount of milk foam.",
          espressoMacchiato_ingredients: "Espresso, Milk foam",

          latte_title: "Latte",
          latte_desc: "A coffee drink made with espresso and a large amount of steamed milk.",
          latte_desc_long: "A latte is a coffee drink made with espresso and steamed milk. It is known for its milder, more milky flavor compared to a cappuccino.",
          latte_ingredients: "Espresso, Steamed milk",

          cappuccino_title: "Cappuccino",
          cappuccino_desc: "The perfect balance of espresso, steamed milk, and milk foam.",
          cappuccino_ingredients: "Espresso, Steamed milk, Milk foam",

          americano_title: "Americano",
          americano_desc: "Classic black coffee made by adding hot water to espresso.",
          americano_ingredients: "Espresso, Hot water",
          
          cortado_title: "Cortado",
          cortado_desc: "Espresso mixed with an equal amount of warm milk to reduce the acidity.",
          cortado_ingredients: "Espresso, Warm milk",

          mocha_title: "Mocha",
          mocha_desc: "A hybrid of a cappuccino and a hot chocolate. Espresso, milk, and chocolate.",
          mocha_ingredients: "Espresso, Chocolate syrup, Steamed milk",

          flatWhite_title: "Flat White",
          flatWhite_desc: "A drink made with a double shot of espresso and a thin layer of microfoam.",
          flatWhite_ingredients: "Double espresso, Microfoam",
          
          affogato_title: "Affogato",
          affogato_desc: "A dessert of a scoop of vanilla ice cream drowned in a shot of hot espresso.",
          affogato_ingredients: "Espresso, Vanilla ice cream",

          irishCoffee_title: "Irish Coffee",
          irishCoffee_desc: "A cocktail of hot coffee, Irish whiskey, and sugar, topped with thick cream.",
          irishCoffee_ingredients: "Coffee, Irish whiskey, Sugar, Cream",
          
          turkishCoffee_title: "Turkish Coffee",
          turkishCoffee_desc: "Very finely ground coffee beans simmered in a pot (cezve).",
          turkishCoffee_ingredients: "Finely ground coffee, Water, Sugar (optional)",

          cubanCoffee_title: "Cuban Coffee",
          cubanCoffee_desc: "A sweet espresso shot made with demerara sugar.",
          cubanCoffee_ingredients: "Espresso, Demerara sugar",

          bulletproofCoffee_title: "Bulletproof Coffee",
          bulletproofCoffee_desc: "Black coffee blended with butter and MCT oil.",
          bulletproofCoffee_ingredients: "Coffee, Butter, MCT oil",

          viennaCoffee_title: "Vienna Coffee",
          viennaCoffee_desc: "A double espresso shot with whipped cream instead of milk and sugar.",
          viennaCoffee_ingredients: "Double espresso, Whipped cream",
          
          lungo_title: "Lungo",
          lungo_desc: "An espresso shot with more water. Less strong but more bitter.",
          lungo_ingredients: "Espresso, More water",
          
          doppio_title: "Doppio",
          doppio_desc: "A double shot of espresso.",
          doppio_ingredients: "Double espresso",
          
          redEye_title: "Red Eye",
          redEye_desc: "Drip coffee with an added shot of espresso.",
          redEye_ingredients: "Drip coffee, Espresso",

          blackEye_title: "Black Eye",
          blackEye_desc: "Drip coffee with two added shots of espresso.",
          blackEye_ingredients: "Drip coffee, Double espresso",
          
          caramelLatte_title: "Caramel Latte",
          caramelLatte_desc: "A sweet and smooth drink with notes of caramel to warm you up in any weather.",
          caramelLatte_ingredients: "Espresso, Steamed Milk, Caramel Syrup",

          cinnamonLatte_title: "Cinnamon Latte",
          cinnamonLatte_desc: "A warm and aromatic latte with the spicy flavor of cinnamon.",
          cinnamonLatte_ingredients: "Espresso, Steamed Milk, Cinnamon Syrup",

          // --- ICED ---
          icedCoffee_title: "Iced Coffee",
          icedCoffee_desc: "Chilled coffee, typically served with ice and milk.",
          icedCoffee_ingredients: "Coffee, Ice, Milk",

          icedLatte_title: "Iced Latte",
          icedLatte_desc: "Espresso, cold milk, and ice. A refreshing version of the classic latte.",
          icedLatte_ingredients: "Espresso, Cold milk, Ice",

          icedAmericano_title: "Iced Americano",
          icedAmericano_desc: "Espresso diluted with cold water and served over ice.",
          icedAmericano_ingredients: "Espresso, Cold water, Ice",

          icedMocha_title: "Iced Mocha",
          icedMocha_desc: "A chilled blend of espresso, chocolate syrup, milk, and ice.",
          icedMocha_ingredients: "Espresso, Chocolate syrup, Milk, Ice",

          icedChaiLatte_title: "Iced Chai Latte",
          icedChaiLatte_desc: "Spiced chai tea mixed with milk and served over ice.",
          icedChaiLatte_ingredients: "Chai tea, Milk, Ice",

          icedMatchaLatte_title: "Iced Matcha Latte",
          icedMatchaLatte_desc: "Japanese matcha green tea blended with milk and ice.",
          icedMatchaLatte_ingredients: "Matcha tea, Milk, Ice",

          coldBrew_title: "Cold Brew",
          coldBrew_desc: "Coffee steeped in cold water for an extended period, resulting in low acidity.",
          coldBrew_ingredients: "Coarsely ground coffee, Cold water",
          
          nitroColdBrew_title: "Nitro Cold Brew",
          nitroColdBrew_desc: "Cold brew coffee infused with nitrogen gas for a velvety texture.",
          nitroColdBrew_ingredients: "Cold brew, Nitrogen",

          icedDirtyChai_title: "Iced Dirty Chai",
          icedDirtyChai_desc: "An iced chai latte with an added shot of espresso.",
          icedDirtyChai_ingredients: "Chai tea, Milk, Ice, Espresso",
          
          frappuccino_title: "Frappuccino",
          frappuccino_desc: "A blended iced drink with coffee, milk, ice, and syrups, topped with whipped cream.",
          frappuccino_ingredients: "Coffee, Milk, Ice, Syrup, Whipped cream",

          shakerato_title: "Shakerato",
          shakerato_desc: "An Italian drink of espresso shaken with ice and sugar syrup.",
          shakerato_ingredients: "Espresso, Ice, Sugar syrup",

          mazagran_title: "Mazagran",
          mazagran_desc: "A refreshing drink of espresso, lemon juice, and ice.",
          mazagran_ingredients: "Espresso, Lemon juice, Ice",

          icedEspresso_title: "Iced Espresso",
          icedEspresso_desc: "Simply an espresso shot poured over ice. Strong and cold.",
          icedEspresso_ingredients: "Espresso, Ice",

          espressoTonic_title: "Espresso Tonic",
          espressoTonic_desc: "A refreshing mix of espresso and tonic water over ice.",
          espressoTonic_ingredients: "Espresso, Tonic water, Ice",

          apelsinjuice_title: "Orange Juice",
          apelsinjuice_desc: "Freshly squeezed orange juice, full of vitamins. The perfect start to your day.",
          apelsinjuice_ingredients: "Oranges",
          
          frozenLemonade_title: "Frozen Lemonade",
          frozenLemonade_desc: "Cold lemonade blended with ice to a smoothie-like consistency.",
          frozenLemonade_ingredients: "Lemon juice, Water, Sugar, Ice",

          latteAmaretto_title: "Latte Amaretto",
          latteAmaretto_desc: "A latte with the addition of almond-flavored Amaretto syrup.",
          latteAmaretto_ingredients: "Espresso, Milk, Amaretto syrup",

        },
      },
    },
  });

// Функция для получения ключа перевода по названию напитка
export const getDrinkTranslationKey = (title: string): string | null => {
  return (drinkKeys as Record<string, string>)[title] || null;
}

export default i18n;