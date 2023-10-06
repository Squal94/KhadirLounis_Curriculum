import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              Khadir Lounis
            </motion.h1>
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
          <div className="main__images">
            <img className="img1" src="/assets/img/html5.png" alt="Logo Html" />
            <img className="img2" src="/assets/img/Css.png" alt="Logo Css" />
            <img
              className="img3"
              src="./../../public/assets/img/GitHub-LogoPNG1.png"
              alt="Logo Github"
            />
            <img
              className="img4"
              src="assets/img/Javascript.png"
              alt="Logo Javascript"
            />
            <img
              className="img5"
              src="./public/assets/img/React.png"
              alt="Logo React"
            />
            <img
              className="img6"
              src="assets/img/Rredux.png"
              alt="Logo Redux"
            />
          </div>
        </div>
        <Buttons right={"KhadirLounis_Curriculum/cv"} />
      </motion.div>
    </div>
  );
};

export default Home;
