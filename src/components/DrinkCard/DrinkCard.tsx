import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface Drink {
  title: string;
  description: string;
  ingredients: string[];
  image:  string;
  id: number;
}
export default function AddonsCard() {
  const { id, type } = useParams<{ id: string; type: string }>();
  const [drink, setDrink] = useState<Drink | undefined>(undefined);

  async function fetchAddons() {
      try {
        const res = await fetch(`https://api.sampleapis.com/coffee/${type}/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const obj = await res.json();
        setDrink(obj);
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      }
    }


  useEffect(() => {
    if(id) fetchAddons(); 
  }, [id]);

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
