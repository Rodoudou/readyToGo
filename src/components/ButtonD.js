import React from "react";

export default function ButtOnD({ setIsOnD, isOnD }) {
  return (
    <div className="buttons">
      <div>
        <button
          onClick={() => {
            setIsOnD(!isOnD);
          }}
          style={
            isOnD ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        >
          {isOnD ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}
