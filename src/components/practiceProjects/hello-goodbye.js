import React, { useState } from "react";

const HelloGoodbye = () => {
    const [toggle, toggleFunction] = useState(true);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{toggle ? "Hello" : "Goodbye"}</h1>
            <button onClick={() => toggleFunction(!toggle)}>Toggle</button>
        </div>
    )
}

export default HelloGoodbye;