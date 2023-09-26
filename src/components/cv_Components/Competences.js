import React from "react";
import ProgressBar from "./ProgressBar";

const Competences = () => {
  return (
    <div className="cv__competences">
      <h3>Compétences</h3>
      <h4>Languages</h4>
      <div>
        <ProgressBar title={"Html"} force={3.8} />
        <ProgressBar title={"Css"} force={3.8} />
        <ProgressBar title={"Javascript"} force={4.3} />
      </div>
    </div>
  );
};

export default Competences;
