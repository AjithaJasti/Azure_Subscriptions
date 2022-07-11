import React from "react";
import { Dropdown, Option } from "./Dropdown";
import "./styles.css";

class DropdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <Dropdown
          buttonText="Next"
          onChange={this.handleSelect}
          // action="https://jsonplaceholder.typicode.com/posts"
        >
          <Option value="Select" />
          <Option value="Tenant 1" />
          <Option value="Tenant 2" />
          <Option value="Tenant 3" />
        </Dropdown>
        {/* <p>You selected {this.state.value} </p> */}
      </div>
    );
  }
}

export default DropdownApp;
