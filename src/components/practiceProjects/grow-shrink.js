import React, { useState } from "react";

const GrowShrink = () => {
  const [size, growShrink] = useState(20);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button onClick={() => growShrink(size + 5)}>Grow</button>
        <button onClick={() => growShrink(size - 5)}>Shrink</button>
      </div>

      <div>
        <h1 style={{ fontSize: size }}>{size}px</h1>
      </div>
    </div>
  );
};

export default GrowShrink;
