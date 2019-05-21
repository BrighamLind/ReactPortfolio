import React, { useState } from "react";

const HTMLColor = () => {
  const [inputBox, updateText] = useState("");
  const [userInput, updateUserInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    updateUserInput(inputBox), updateText("");
  };

  const handleChange = event => {
    updateText(event.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>HTML Color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputBox"
          value={inputBox}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1 style={{ color: userInput }}>{userInput}</h1>
    </div>
  );
};

export default HTMLColor;
