import React from "react";
import CreateForm from "../components/CreateForm";
import "../App.css";

const createHero = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <h1>Create Hero</h1>
        <CreateForm />
      </div>
    </div>
  );
};

export default createHero;
