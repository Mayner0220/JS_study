import React, {useState, useRef} from "react";
import ConditionalRendering from "./1ConditionalRendering";
import CreateFruit from "./2CreateFuit";
import FruitList from "./3FruitList";
import Calculator from "./4Calculator";

function App() {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      name: "apple",
      price: 1000,
    },
    {
      id: 2,
      name: "pear",
      price: 2000,
    },
    {
      id: 3,
      name: "strawberry",
      price: 3000,
    },
  ]);

  const [inputs, setInputs] = useState({
    name: "",
    price: 0,
  });
  const {name, price} = inputs;
  const onChange = () => {};
  const onCreate = () => {
    setFruits({
      fruit: {
        name,
        price,
      }
    });
    nextId.current += 1;
  };
  const onRemove = () => {
    setFruits({
      fruit: {
      }
    });
    nextId.current -= 1;
  };
  const nextId = useRef(4);

  return (
    <>
      <div>
        <ConditionalRendering bool={true} />
        <ConditionalRendering bool={false} />
        ----------------------구 분 선----------------------
      </div>
      <div>
        <CreateFruit />
      </div>
      <div>
        <FruitList />
        ----------------------구 분 선----------------------
      </div>
      <div>
        <Calculator />
      </div>
    </>
  );
}

export default App;
