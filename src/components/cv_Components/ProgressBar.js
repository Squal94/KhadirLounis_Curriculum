import React from "react";

const ProgressBar = ({ title }, { force }) => {
  let forceGeneral = 5;
  let forceItem = (force / forceGeneral) * 100 + "%";
  return (
    <div className="cv__progress">
      <h5>{title}</h5>
      <div className="cv__progress--bar" style={{ width: forceItem }}></div>
    </div>
  );
};

export default ProgressBar;
