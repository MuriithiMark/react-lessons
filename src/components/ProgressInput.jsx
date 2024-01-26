import React from "react";
import "./ProgressInput.css";

const ProgressInput = ({ value, onChange }) => {
  return (
    <div className="progress-input">
      <span className="title">Input Percentage: </span>
      <input type="number" value={value} onChange={onChange} min="0" max="100" />
    </div>
  );
};

export default ProgressInput;
