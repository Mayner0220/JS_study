import React, {useEffect} from "react";

function Fruit({ fruit, onRemove }) {
  const { fruitName, fruitPrice } = fruit;
  useEffect(() => {
    console.log("Fruit이 추가됨");
    return () => {
      console.log("Fruit이 삭제됨")
    }
  }, [fruit]);
  return (
    <div>
      <b>{fruit.name}</b>, <span>{fruit.price}</span>
      <button>삭제</button>
    </div>
  );
}

function FruitList({ fruit, onRemove }) {
  return (
    <div>
      {fruit.map((fruit) => (
        <Fruit fruitName={fruit.name} fruitPrice={fruit.price} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default FruitList;
