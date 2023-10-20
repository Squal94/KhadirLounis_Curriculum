import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Project projectNumber={1} />
        <Buttons
          left={"/KhadirLounis_Curriculum/projet-1"}
          right={"/KhadirLounis_Curriculum/motivation"}
        />
      </div>
    </main>
  );
};

export default Project2;
