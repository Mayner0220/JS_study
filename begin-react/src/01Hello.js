import React from 'react';
import "./JSX.css"

function Hello() {
const name = "Minseok Kim"
const style = {
backgroundColor: 'black',
color: 'white'
}
return (
<>
    <div style={style}>제 이름은 {name}입니다. </div>
    <div>안녕하세요.</div>
    <div className="gray-box">ㅇㅅㅇ</div>
</>
);
}

export default Hello;