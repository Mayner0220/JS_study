import React from "react";

function CreateFruit({ fruitName, fruitPrice, onCreate }) {
  return(
    <div>
      <input
        name="fruitName"
        placeholder="fruitName"
      />
      <input
        name="fruitPrice"
        placeholder="fruitPrice"
      />
      <button onClick={onCreate}>추가</button>
    </div>
  )
}

export default CreateFruit;
