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
import CvLounis from "./../assets/pdf/Lounis khadir CV .pdf";
import AssessLounis from "./../assets/pdf/Khadir-Lounis-pole-emploi-assessfirst.pdf";

import { NavLink } from "react-router-dom";

const Cv = () => {
  return (
    <div className="cv">
      <Mouse />
      <Navigation />
      {/* <Logo /> */}
      <div className="cv-position">
        <div className="cv-position-title">
          <div>
            <h1>Khadir Lounis</h1>
            <h2>Curriculum Vitae</h2>
          </div>
          <div className="cv-position-title-btn">
            <NavLink className="btnDownload" to={AssessLounis} target="_blank">
              Test Soft Skills pdf
            </NavLink>
            <NavLink className="btnDownload" to={CvLounis} target="_blank">
              Cv Khadir Lounis pdf
            </NavLink>
          </div>
        </div>

        <div className="cv-content">
          <Competences />
          <Formations />
          <Experiences />
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
