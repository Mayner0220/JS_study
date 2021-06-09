import React from "react";

function ConditionalRendering({bool}) {
  return (
    <div>
      <b>{this.props.bool === true 
      ? (<div>It's Special Day!</div>) 
      : (<div>It's Normal Day!</div>)}
      </b>
    </div>
  );
}

export default ConditionalRendering;