import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

const UpdateHero = () => {
  const navigate = useNavigate();
  const locaion = useLocation();

  const heroId = locaion.pathname.split("/")[2];

  const [hero, setHero] = useState({
    name: "",
    role: "",
    damage_type: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    setHero((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/heroes/update/" + heroId, hero);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-form-container">
      <form className="create-form" onSubmit={handleUpdate}>
        <label>
          Hero Name:
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />
        </label>
        <label>
          Hero Role:
          <input
            type="text"
            placeholder="Role"
            onChange={handleChange}
            name="role"
          />
        </label>
        <label>
          Damage Type :
          <input
            type="text"
            placeholder="Damage Type"
            onChange={handleChange}
            name="damage_type"
          />
        </label>
        <label>
          Hero Price:
          <input
            type="Number"
            placeholder="price"
            onChange={handleChange}
            name="price"
          />
        </label>
        <label>
          Hero Image:
          <input
            type="text"
            placeholder="image"
            onChange={handleChange}
            name="image"
          />
        </label>
        <button type="submit">Insert Hero</button>
      </form>
    </div>
  );
};

export default UpdateHero;
