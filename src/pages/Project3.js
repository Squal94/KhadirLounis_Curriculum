import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Project projectNumber={2} />
        <Buttons
          left={"/KhadirLounis_Curriculum/projet-2"}
          right={"/KhadirLounis_Curriculum/projet-4"}
        />
      </div>
    </main>
  );
};

export default Project3;
