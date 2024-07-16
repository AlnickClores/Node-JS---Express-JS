import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

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
    <div className="form-container">
      <form className="form" onSubmit={handleUpdate}>
        <div className="form-inner-container">
          <label>
            Hero Name:
            <input
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
            />
          </label>
          <label>
            Hero Role:
            <input
              type="text"
              placeholder="role"
              onChange={handleChange}
              name="role"
            />
          </label>
          <label>
            Damage Type:
            <input
              type="text"
              placeholder="damage type"
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
        </div>
        <div className="btn-container">
          <button className="submit-btn" type="submit">
            Update Hero
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHero;
