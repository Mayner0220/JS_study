import React from "react";

function ConditionalRednering({isSpecial}) {
    return (
        <div>
            {isSpecial ? <span>Special</span> : <span>NotSpecial</span>} Hello World!
        </div>
    );
}

export default ConditionalRednering;