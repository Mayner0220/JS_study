import React from "react";

function User({user}) {
    console.log(user);
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: "name1",
            email: "abc1@gmail.com"
        },
        {
            id: 2,
            username: "name2",
            email: "abc2@gmail.com"
        },
        {
            id: 3,
            username: "name3",
            email: "abc3@gmail.com"
        },
    ];
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default UserList;