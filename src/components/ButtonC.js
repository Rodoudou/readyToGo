import React from "react";

export default function ButtonC({ setIsOnC, isOnC }) {
  return (
    <div className="buttons">
      <div>
        <button
          onClick={() => {
            setIsOnC(!isOnC);
          }}
          style={
            isOnC ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        >
          {isOnC ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}
