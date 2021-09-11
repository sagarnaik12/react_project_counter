import React, { useState } from 'react';

const Counter = () => {

    let [counter , counterTrigger] = useState(0);

    const increase = () => {
        counterTrigger((prev) => prev + 1);
    }

    const decrease = () => {
        counterTrigger((prev) => (prev - 1));
    }

    return (
        <React.Fragment>
            <button onClick={increase}>+</button>
            <h1 style={{ fontSize : "5rem"}}>{counter}</h1>
            <button onClick={decrease}>-</button>
        </React.Fragment>
)
}

export default Counter;