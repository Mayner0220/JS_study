import React from "react";

function Props({name, color}) {
    return (
        <div
            style={{
                color: color,
            }}
        >
            제 이름은 {name}입니다.
        </div>
    );
}

Props.defaultProps = {
    name: "이름 없음",
};
export default Props;