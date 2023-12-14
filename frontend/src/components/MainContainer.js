import React from "react";
import { Route, Routes } from "react-router";
import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import SideDraw from "./SideDraw";
import { Box } from "@chakra-ui/react";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import TechnologyLearned from "./TechnologyLearned";
import Certificates from "./Certificates";
import { AppState } from "./context/AppProvider";

const MainContainer = () => {
  const { mainContentHeiht } = AppState();
  return (
    <Box height={mainContentHeiht}>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="about" element={<About />}></Route>
        <Route path="project" element={<Projects />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="sideDraw" element={<SideDraw />} />
      </Routes>
    </Box>
  );
};

export default MainContainer;
