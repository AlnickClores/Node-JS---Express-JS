import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateForm = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/heroes/insert", hero);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-form-container">
      <form className="create-form" onSubmit={handleSubmit}>
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

export default CreateForm;
