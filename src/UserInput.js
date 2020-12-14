import React from "react";

const userInput = (props) => {
  return (
    <div className="container-inner">
      <h2>I AM THE USER INPUT COMPONENT</h2>
      <input className="h-input" type="text" onChange={props.handleChange} />
    </div>
  );
};

export default userInput;
