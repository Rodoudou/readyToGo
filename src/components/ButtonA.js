import React from "react";

export default function ButtonA({ setIsOnA, isOnA }) {
  return (
    <div className="buttons">
      <div>
        <button
          onClick={() => {
            setIsOnA(!isOnA);
          }}
          style={
            isOnA ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        >
          {isOnA ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}
