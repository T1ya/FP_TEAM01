import { useEffect, useState } from "react";


export default function NotFound() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchCoffee();
  }, []);

  async function fetchCoffee() {
    try {
      const res = await fetch("https://coffee.alexflipnote.dev/random.json");
      const obj = await res.json();
      
      setUrl(obj.file);
    } catch (error) {
      console.error("Failed to fetch coffee image:", error);
    }
  }

   return (
    <div>
      <h2>Page not found</h2>
      
      {url && <img src={url} alt="A random coffee" className="max-w-full" />}

    </div>
  );
}