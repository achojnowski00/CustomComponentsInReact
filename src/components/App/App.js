import React from "react";
import "./App.css";
import Instructions from "../Instructions/Instructions.js";

const handleShowEmoji = (event) => alert(event.target.innerHTML);
const emojis = [
  {
    emoji: "🥺",
    name: "shy",
  },
  {
    emoji: "👉",
    name: "point_right",
  },
  {
    emoji: "👈",
    name: "point_left",
  },
];

function App() {
  const greetingID = "greeting";

  return (
    <div className="container">
      <h1 id={greetingID}>Hello World!</h1>
      <Instructions />
      <ul>
        {emojis.map((item) => (
          <li key={item.name}>
            <button onClick={handleShowEmoji}>
              <span role="img" aria-label={item.name} id={item.name}>
                {item.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
