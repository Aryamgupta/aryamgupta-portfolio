import React, { useEffect } from "react";
import { AppState } from "./context/AppProvider";
import { Box, Button } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import MobileModeHeading from "./MobileModeHeading";
import { AddIcon } from "@chakra-ui/icons";
import ProjectModal from "./Modals/ProjectModal";

const Projects = () => {
  const { mainContentHeiht, mobileMode, fetchAllProjects, projects } =
    AppState();

  useEffect(() => {
    fetchAllProjects();
  }, []);

  let prjCnt = 1;

  return (
    <>
      <Box
        height={mainContentHeiht}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          overflowY: "scroll",
        }}
        className="modifiedScrollBar"
        paddingTop={`${mobileMode ? "0px" : "50px"}`}
      >
        <MobileModeHeading title="_projects" />

        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            count={prjCnt++}
            des={project.des}
            imageLink={project.imageLink}
            link={project.link}
            techStack={project.techStack}
            id={project._id}
          />
        ))}
        <Box width="100%" marginBottom="20px">
          {" "}
          <ProjectModal />
        </Box>
      </Box>
    </>
  );
};

export default Projects;
