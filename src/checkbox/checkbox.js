import React from "react";
import styles from "../checkboxstyle/checkbox.module.css";

export class PriorityCheckBox extends React.Component {
  state = { checked: false };

  CheckPriority = (e) => this.setState({ checked: e.target.checked });

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.CheckPriority}
          className={styles.box}
        ></input>
        <label className={styles.priority}>Filter on Priority</label>
      </div>
    );
  }
}

export default PriorityCheckBox;
