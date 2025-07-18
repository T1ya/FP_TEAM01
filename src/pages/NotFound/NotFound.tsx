import { useEffect, useState } from "react";


export default function NotFound() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchCoffee();
  }, []);

  async function fetchCoffee() {
    try {
      const res = await fetch("https://coffee.alexflipnote.dev/random.json", {
        headers:{"Accept": "Application/json"},
        mode: 'cors'
      });
      const obj = await res.json();
      console.log(obj);
      
      setUrl(obj.file);
    } catch (error) {
      console.error("Failed to fetch coffee image:", error);
    }
  }

   return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Страница не найдена</h1>
    </div>
  );
}