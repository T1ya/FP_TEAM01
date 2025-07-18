import { useEffect, useState } from "react";


interface Drink {
  title: string;
  description: string;
  ingredients: string[];
  image:  string;
  id: number;
}
export default function AddonsCard() {
  const [drink, setDrink] = useState<Drink | undefined>(undefined);

  async function fetchAddons() {
    const res = await fetch("https://api.sampleapis.com/coffee/hot/3");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const obj = await res.json();
    setDrink(obj);
  }


  useEffect(() => {
    fetchAddons(); 
  }, []);

if (!drink) {
  return <div>Загрузка...</div>;
}
  return (
    <div>
        <h2>{drink .title}</h2>
        <h2>{drink.description}</h2>
        <img
            src={drink.image}  
            alt={drink.title}
            style={{ width: 250, borderRadius: 8 }}
/>        
<div>
  <b>Ingredients:</b>
  <ul>
    {drink.ingredients.map((ing, idx) => (
      <li key={idx}>{ing}</li>
    ))}
  </ul>
</div>
    </div>
    )
  }
