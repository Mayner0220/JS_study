import React, { useState, useRef } from "react";

function Inputs() {
    const nameInput = useRef();
    const [inputs, setText] = useState({
        name: "",
        nickname: "",
    });
    const {name, nickname} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>
                    {name}({nickname})
                </b>
            </div>
        </div>
    )
}

export default Inputs;