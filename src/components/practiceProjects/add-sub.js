import React, { useState } from "react";

const AddSub = () => {
  const [count, crement] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ width: "50px" }}>${count}</h1>
      <div>
        <button onClick={() => crement(count + 1)} style={{ width: "50px" }}>
          Add
        </button>
        <button onClick={() => crement(count - 1)} style={{ width: "50px" }}>
          Sub
        </button>
      </div>
    </div>
  );
};

export default AddSub;
