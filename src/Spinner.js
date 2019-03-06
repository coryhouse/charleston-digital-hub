import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <center>
      <div className="spinner">
        <span style={{ fontSize: 72 }} role="img" aria-label="Unicorn!~!!!">
          🦄
        </span>
      </div>
    </center>
  );
};

export default Spinner;
