import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Competences from "../components/cv_Components/Competences";
import Formations from "../components/cv_Components/Formations";
import SoftSkills from "../components/cv_Components/SoftSkills";
import OtherSkills from "../components/cv_Components/OtherSkills";
import Loisirs from "../components/cv_Components/Loisirs";
import Experiences from "../components/cv_Components/Experiences";

const Cv = () => {
  return (
    <div className="cv">
      <Mouse />
      <Navigation />
      {/* <Logo /> */}
      <div className="cv-position">
        <h1>Khadir Lounis</h1>
        <h2>Curriculum Vitae</h2>
        <div className="cv-content">
          <Competences />
          <Experiences />
          <Formations />
          <SoftSkills />
          <OtherSkills />
          <Loisirs />
        </div>
      </div>
      <Buttons left={"/"} right={"/projet-1"} />
    </div>
  );
};

export default Cv;
