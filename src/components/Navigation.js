import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <NavLink
          to="/KhadirLounis_Curriculum/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/KhadirLounis_Curriculum/cv"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Cv</li>
        </NavLink>

        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/KhadirLounis_Curriculum/projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Katsuryoku</li>
            </NavLink>
            <NavLink
              to="/KhadirLounis_Curriculum/projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>World of One piece</li>
            </NavLink>
            <NavLink
              to="/KhadirLounis_Curriculum/projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 3</li>
            </NavLink>
            <NavLink
              to="/KhadirLounis_Curriculum/projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/KhadirLounis_Curriculum/motivation"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Motivation</li>
        </NavLink>
        <NavLink
          to="/KhadirLounis_Curriculum/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
