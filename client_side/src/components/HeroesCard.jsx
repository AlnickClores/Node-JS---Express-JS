import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroesCard = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const res = await axios.get("http://localhost:3001/heroes/view");
        setHeroes(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <div>
      <h1>Heroes Cards</h1>
      {heroes.map((hero) => (
        <div key={hero.id}>
          <h1>{hero.name}</h1>
          <p>{hero.role}</p>
          <p>{hero.damage_type}</p>
          <p>{hero.price}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroesCard;
