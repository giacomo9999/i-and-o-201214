import React, { Component } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  state = { userName: "Jimbo" };

  handleUserNameChange = (e) => {
    console.log("Handling change...",e.target.value)
    this.setState({ userName: e.target.value });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>I AM THE APP</h1>
        <UserInput handleChange={this.handleUserNameChange} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
