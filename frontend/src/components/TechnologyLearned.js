import { Box } from "@chakra-ui/react";
import React from "react";
import HtmlIcon from "../icons/SocicalIcons/HtmlIcon";
import MongoDb from "../icons/SocicalIcons/MongoDb";
import CssIcon from "../icons/SocicalIcons/CssIcon";
import ReactIcon from "../icons/SocicalIcons/ReactIcon";
import JavaScript from "../icons/SocicalIcons/JavaScript";
import BootStrap from "../icons/SocicalIcons/BootStrap";
import Github from "../icons/SocicalIcons/Github";
import Netlify from "../icons/SocicalIcons/Netlify";
import Java from "../icons/SocicalIcons/Java";
import NodeJs from "../icons/SocicalIcons/NodeJs";
import VsCode from "../icons/SocicalIcons/VsCode";
import Cloudinary from "../icons/SocicalIcons/Cloudinary";
import { AppState } from "./context/AppProvider";

const TechnologyLearned = () => {
  const { mobileMode } = AppState();
  return (
    <Box
      height="100%"
      width="100%"
      maxWidth="500px"
      overflowY={`${mobileMode ? "" : "scroll"}`}
      background=""
      style={{ display: "flex", flexWrap: "wrap", margin: "0 auto" }}
    >
      <Box className="iconContainer">
        <Java />
      </Box>
      <Box className="iconContainer">
        <ReactIcon />
      </Box>

      <Box className="iconContainer">
        <JavaScript />
      </Box>
      <Box className="iconContainer">
        <BootStrap />
      </Box>
      <Box className="iconContainer">
        <CssIcon />
      </Box>
      <Box className="iconContainer">
        <HtmlIcon />
      </Box>
      <Box className="iconContainer">
        <Github />
      </Box>
      <Box className="iconContainer">
        <VsCode />
      </Box>

      <Box className="iconContainer">
        <NodeJs />
      </Box>
      <Box className="iconContainer">
        <MongoDb />
      </Box>
      <Box className="iconContainer">
        <Cloudinary />
      </Box>
      <Box className="iconContainer">
        <Netlify />
      </Box>
    </Box>
  );
};

export default TechnologyLearned;
