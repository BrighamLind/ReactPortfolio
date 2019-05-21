import React, { useState } from "react";

const Peekaboo = () => {
  const [hidden, showHide] = useState(true);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button onClick={() => showHide(!hidden)}>
        {hidden ? "Show" : "Hide"}
      </button>
      <h1 style={{ display: hidden ? "none" : "inline" }}>Peek-a-boo</h1>
    </div>
  );
};

export default Peekaboo;
