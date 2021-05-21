import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "name1",
      email: "abc1@gmail.com",
    },
    {
      id: 2,
      username: "name2",
      email: "abc2@gmail.com",
    },
    {
      id: 3,
      username: "name3",
      email: "abc3@gmail.com"
    },
  ];
  const nextId = useRef(4);
  
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return <UserList users={users} onCreate={onCreate} />;
}

export default App;