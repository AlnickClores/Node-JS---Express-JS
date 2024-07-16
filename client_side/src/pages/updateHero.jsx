import React from "react";
import UpdateForm from "../components/UpdateFom";
import "../App.css";

const createHero = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <h1>Update Hero</h1>
        <UpdateForm />
      </div>
    </div>
  );
};

export default createHero;
