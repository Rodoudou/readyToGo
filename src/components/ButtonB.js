import React from "react";

export default function ButtonB({ setIsOnB, isOnB }) {
  return (
    <div className="buttons">
      <div>
        <button
          onClick={() => {
            setIsOnB(!isOnB);
          }}
          style={
            isOnB ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        >
          {isOnB ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}
