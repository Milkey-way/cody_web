import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState({ color: "black" });

  const handleClick = (event) => {
    const getStyleAttr = event.target.getAttribute("style");
    const message = document.getElementById("message");

    console.log("getStyleAttr", getStyleAttr);

    let sliceColor = getStyleAttr.split(";");

    console.log("sliceColor", sliceColor);

    console.log("컬러", color);
    console.log("슬라이스컬러[0]", sliceColor[0]);

    sliceColor = sliceColor[0].split(":");

    console.log('":"로 자른 sliceColor', sliceColor);

    console.log("message", message.getAttribute("style"));

    const messageColor = message.getAttribute("style");

    if (messageColor === getStyleAttr) {
      setColor({ color: "black" });
    } else {
      setColor({ color: sliceColor[1] });
    }
  };

  return (
    <div>
      <h1 style={color}>Say</h1>
      <h2 id="message" style={color}>
        {message}
      </h2>

      <button onClick={handleClick} style={{ color: "red" }}>
        빨간색
      </button>
      <button onClick={handleClick} style={{ color: "green" }}>
        초록색
      </button>
      <button onClick={handleClick} style={{ color: "blue" }}>
        파란색
      </button>
      <button onClick={handleClick} style={{ color: "grey" }}>
        회색
      </button>
    </div>
  );
};

export default Say;