import React, {useReducer} from "react";

function reducer(state, action) {}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, 0);
  const plus = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };
  const minus = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  };
  const multiple = () => {
    const { number } = this.state;
    this.setState({
      number: number * 2
    });
  };
  const divide = () => {
    const { number } = this.state;
    this.setState({
      number: number / 2
    });
  };
  return (
    <>
      <div>
        <b>{state}</b>
      </div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={multiple}>*2</button>
      <button onClick={divide}>/2</button>
    </>
  );
}

export default Calculator;
