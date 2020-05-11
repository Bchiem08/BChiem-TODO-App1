import React from "react";
import "../deletestyle/delete.css";

export class DeleteButton extends React.Component {
  state = { value: "" };

  AddNewTODO = (e) => {
    console.log("New TODO: ${this.state.value}");
    e.preventDefault();
  };

  render() {
    return <button onClick={() => console.log("hello")}>delete</button>;
  }
}

export default DeleteButton;
