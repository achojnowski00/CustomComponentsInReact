import React from "react";
import emoji from "./emoji.png";
import "./Instructions.css";

const Instructions = () => (
  <div className="instructions">
    <img src={emoji} alt="crying emoji" />
    <h4>Kliknij na emoji żeby je wyświetlić</h4>
  </div>
);

export default Instructions;
