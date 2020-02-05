import React from "react";

export default function BigButton({ isOnA, isOnB, isOnC, isOnD }) {
  const goOrNot = () => {
    if (isOnA === true && isOnB === true && isOnC === true && isOnD === true) {
      return (
        <button style={{ backgroundColor: "seagreen", height: 80, width: 80 }}>
          GO!
        </button>
      );
    } else {
      return (
        <button style={{ backgroundColor: "tomato", height: 80, width: 80 }}>
          No Way!
        </button>
      );
    }
  };

  return <div>{goOrNot()}</div>;
}
