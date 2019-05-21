import React, { useState } from "react";

const AlignMe = () => {
  const [alignment, alignMe] = useState("center");

  return (
    <div
      style={{
        width: "100vw",
        height: "100px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h1 style={{ alignSelf: alignment }}>Align Me</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => alignMe("flex-start")}>Left</button>
        <button onClick={() => alignMe("center")}>Center</button>
        <button onClick={() => alignMe("flex-end")}>Right</button>
      </div>
    </div>
  );
};

export default AlignMe;
