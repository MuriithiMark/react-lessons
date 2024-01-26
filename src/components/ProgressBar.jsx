import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="wrapper">
      <div className="progress" style={{ width: `${progress < 10 ? 10 : progress}%`}}>
        <span>{!!progress ? progress : 0}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
