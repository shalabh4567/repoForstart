import React from "react";
import "./DisplayBannerBlock.css";

const DisplayBannerBlock = () => {

  const arr = [1,2,3,4,5]
  const sum = 0;
  return (
    <div className="about-union">
      <h1>Union Budget 2022 Alerts</h1>
      <p>
        Download budget 2022-23 highlights for a quick summary on key
        performance indicators, budget financials, budget proposals and policy
        changes announced by the Finance Minister.
      </p>
      <button>
        <p>Learn More</p>
      </button>
    </div>
  );
};

export default DisplayBannerBlock;
