import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

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

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this hero?"
    );
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3001/heroes/delete/${id}`);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="heroes-card-container">
      {heroes.map((hero) => (
        <div className="heroes-card" key={hero.id}>
          <h1>{hero.name}</h1>
          <p>
            <strong>Role:</strong> {hero.role}
          </p>
          <p>
            <strong>Damage Type:</strong> {hero.damage_type}
          </p>
          <p>
            <strong>Price:</strong> {hero.price}
          </p>
          <div>
            <button className="update-btn">
              <Link to={`/update/${hero.id}`}>Update</Link>
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(hero.id)}
            >
              <p className="del">Delete</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroesCard;
