import { useState } from "react";
import RetroBoard from "./components/RetroBoard";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);

  const switchBg = () => {
    if (toggle) {
      document.body.classList.add("dark");
      document.body.classList.remove("light")
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark")
    }
  };

  return (
    <div className={`${switchBg()} switchBgContainer`}>
      <h1>Retroboard</h1>
      {toggle ? (
        <button onClick={() => setToggle(!toggle)}>☀️</button>
      ) : (
        <button onClick={() => setToggle(!toggle)}>🌜</button>
      )}

      <RetroBoard />
    </div>
  );
}

export default App;
