import { useEffect, useState } from "react";
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";

interface CoffeeDrink {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}


export const NotFound = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchCoffeeImage();
  }, []);

  async function fetchCoffeeImage() {
    try {
      const res = await fetch("https://api.sampleapis.com/coffee/hot");
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const drinks: CoffeeDrink[] = await res.json();

      if (drinks && drinks.length > 0) {
        const randomIndex = Math.floor(Math.random() * drinks.length);
        const randomDrink = drinks[randomIndex];
        
        setImageUrl(randomDrink.image);
      }
    } catch (error) {
      console.error("Failed to fetch coffee image:", error);
      
      setImageUrl("https://images.unsplash.com/photo-1542831371-29b0f74f9713");
    }
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-center p-4"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl shadow-lg">
        <h1 className="text-8xl md:text-9xl font-bold text-white">404</h1>
        <p className="text-2xl font-light text-white mt-4">
          Page Not Found
        </p>
        <p className="text-white mt-2 max-w-sm">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to={ROUTES.HOME}
          className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export { NotFound as default };
