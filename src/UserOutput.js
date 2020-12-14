import React from "react";

const userOutput = (props) => {
  return (
    <div className="container-inner">
      <h2>I AM THE USER OUTPUT COMPONENT</h2>
      <h3>User: {props.userName}</h3>
      <div className="text-box">
        <p>I Am the First Paragraph</p>
        <p>I Am the Second Paragraph</p>
      </div>
    </div>
  );
};

export default userOutput;
