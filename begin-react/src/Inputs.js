import React, { useState } from "react";

function Inputs() {
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
    };
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                이름(닉네임)
            </div>
        </div>
    )
}

export default InputSample;