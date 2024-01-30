import { useState } from "react";
import { Component } from "react";
import { container, border } from "../../styles";
class Button_class_component extends Component {
  constructor() {
    super();

    this.state = {
        count: 10,
    }
  }

  increment = () => {
    console.log(this.state)
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    function Add() {
      console.log("Rendering Done!");
    }
    Add();

    const { btnName, btnColor } = this.props;
    /**
     * @type { React.CSSProperties }
     */
    const styleObj = {
      backgroundColor: 'red',
      border: '1px solid blue',
      ':focus': {}
    }

    return (
      <div style={{ ...container, ...border}}>
        <span>{this.state.count}</span>
        <button 
          className={btnColor} 
          onClick={this.increment}
          style={styleObj}
        >
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
