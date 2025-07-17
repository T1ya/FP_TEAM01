import { useEffect, useState } from "react";

export default function NotFound() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchCoffee();
  }, []);

  async function fetchCoffee() {
    const res = await fetch("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg");
    const obj = await res.json();
    setUrl(obj[0].url);
  }

  return (
    <div>
      <h2>Page not found</h2>
      <img src={url} alt="coffee" />
    </div>
  );
}