import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Motivation = () => {
  return (
    <div>
      <Mouse />
      <h1>Motivation</h1>
      <Navigation />
      {/* <Logo /> */}
      <Buttons left={"/projet-4"} right={"/contact"} />
    </div>
  );
};

export default Motivation;
