import React from "react";
import styles from "../textboxstyle/taskname.module.css";

export class TaskNameBox extends React.Component {
  CheckPriority = (e) => this.setState({ checked: e.target.checked });

  render() {
    return (
      <form>
        <p className={styles.title}>What is the task name?</p>
        <input
          type="text"
          onChange={this.taskname}
          placeholder="Enter task name"
          className={styles.textbox}
        ></input>
      </form>
    );
  }
}

export default TaskNameBox;
