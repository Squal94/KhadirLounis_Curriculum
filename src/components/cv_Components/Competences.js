import React from "react";
import ProgressBar from "./ProgressBar";

const Competences = () => {
  return (
    <div className="cv__competences">
      <h3>Compétences</h3>
      <h4>Languages</h4>
      <ProgressBar title={"Html"} force={3.8} />
      <ProgressBar title={"Css"} force={3.8} />
      <ProgressBar title={"Javascript"} force={4.3} />

      <h4>Frameworks & Bibliothèques</h4>

      <ProgressBar title={"React"} force={4.5} />
      <ProgressBar title={"Redux"} force={4} />
      <ProgressBar title={"Toolkit"} force={4.4} />
      <ProgressBar title={"Sass"} force={4} />
      <ProgressBar title={"Jest"} force={2} />
    </div>
  );
};

export default Competences;
