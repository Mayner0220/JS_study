import React, { useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <>
            <div>{number}</div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}