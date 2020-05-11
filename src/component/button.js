import React from "react";
import "../style/button.css";

export class NewTaskButton extends React.Component {
  state = { value: "" };

  AddNewTODO = (e) => {
    console.log("New TODO: ${this.state.value}");
    e.preventDefault();
  };

  render() {
    return <button onClick={() => console.log("hello")}>Add New TODO</button>;
  }
}

export default NewTaskButton;
