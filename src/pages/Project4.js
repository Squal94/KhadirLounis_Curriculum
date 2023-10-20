import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Project projectNumber={3} />
        <Buttons
          left={"/KhadirLounis_Curriculum/projet-3"}
          right={"/KhadirLounis_Curriculum/motivation"}
        />
      </div>
    </main>
  );
};

export default Project4;
