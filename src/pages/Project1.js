import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Project projectNumber={0} />
        <Buttons
          left={"/KhadirLounis_Curriculum/cv"}
          right={"/KhadirLounis_Curriculum/projet-2"}
        />
      </div>
    </main>
  );
};

export default Project1;
