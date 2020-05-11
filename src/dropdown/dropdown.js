import React from "react";
import styles from "./dropdownstyle/dropdown.module.css";

class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "5" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.dropbox}>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className={styles.number}
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </form>
    );
  }
}

export default DropDownList;
