import React from "react";

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
            <div>
                <b>{users[0].username}</b>
                <span>{"(" + users[0].email + ")"}</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>{"(" + users[1].email + ")"}</span>
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>{"(" + users[2].email + ")"}</span>
            </div>
        </div>
    )
}

export default UserList;