import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import { AnimatePresence } from "framer-motion";
import Cv from "./pages/Cv";
import Motivation from "./pages/Motivation";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="KhadirLounis_Curriculum/" element={<Home />} />
          <Route path="/KhadirLounis_Curriculum/cv" element={<Cv />} />
          <Route
            path="/KhadirLounis_Curriculum/motivation"
            element={<Motivation />}
          />
          <Route
            path="/KhadirLounis_Curriculum/projet-1"
            element={<Project1 />}
          />
          <Route
            path="/KhadirLounis_Curriculum/projet-2"
            element={<Project2 />}
          />
          <Route
            path="/KhadirLounis_Curriculum/projet-3"
            element={<Project3 />}
          />
          <Route
            path="/KhadirLounis_Curriculum/projet-4"
            element={<Project4 />}
          />
          <Route
            path="/KhadirLounis_Curriculum/contact"
            element={<Contact />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
