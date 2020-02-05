import React, { useState } from "react";
import ButtonA from "./components/ButtonA";
import ButtonB from "./components/ButtonB";
import ButtonC from "./components/ButtonC";
import ButtonD from "./components/ButtonD";
import BigButton from "./components/BigButton";
import "./App.css";

function App() {
  const [isOnA, setIsOnA] = useState(false);
  const [isOnB, setIsOnB] = useState(false);
  const [isOnC, setIsOnC] = useState(false);
  const [isOnD, setIsOnD] = useState(false);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 100
      }}
    >
      <div className="buttons">
        <ButtonA isOnA={isOnA} setIsOnA={setIsOnA} />
        <ButtonB isOnB={isOnB} setIsOnB={setIsOnB} />
        <ButtonC isOnC={isOnC} setIsOnC={setIsOnC} />
        <ButtonD isOnD={isOnD} setIsOnD={setIsOnD} />
      </div>
      <div className="bigButton" style={{ marginLeft: 50 }}>
        <BigButton isOnA={isOnA} isOnB={isOnB} isOnC={isOnC} isOnD={isOnD} />
      </div>
    </div>
  );
}

export default App;
