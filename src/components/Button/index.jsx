import { useState } from "react";
import { Component } from "react";

class Button_class_component extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({ count: 3})
  }

  render() {
    function Add() {
      console.log("Rendering Done!");
    }
    Add();

    const { btnName, btnColor } = this.props;
    return (
      <div>
        <span>{this.state.count}</span>
        <button className={btnColor} onClick={this.increment}>
          {btnName}
        </button>
      </div>
    );
  }
}

import React from "react";

const Button_component = ({ btnName, btnColor }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button className={btnColor} onClick={(_) => setCount(count + 1)}>
        {btnName}
      </button>
    </div>
  );
};

export default Button_component;

export { Button_component, Button_class_component };
