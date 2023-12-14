import { Box, Button, Skeleton } from "@chakra-ui/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
// requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AppState } from "./context/AppProvider";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router";

const HomeGame = () => {
  const { mobileMode, projects, contentLoading } = AppState();
  let navigate = useNavigate();

  const itemBoxDesign = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <Box
      width={`${mobileMode ? "100%" : "50%"}`}
      height="100%"
      position="relative"
      filter={`${contentLoading ? "blur(5px)" : ""}`}
    >
      <Box
        background="#43D9AD"
        filter="blur(87px)"
        opacity="0.4"
        height="50%"
        width="50%"
        position="absolute"
      ></Box>
      <Box
        background="#4D5BCE"
        filter="blur(87px)"
        opacity="0.4"
        height="50%"
        width="50%"
        position="absolute"
        transform="translate(50%,100%)"
      ></Box>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showIndicators={false}
        interval={5000}
        centerMode={true}
        transitionTime={2000}
        onClickItem={() => {
          navigate("/project");
        }}
      >
        {projects.map((project) => (
          <Box style={itemBoxDesign}>
            <ProjectCard
              title={project.title}
              des={project.des}
              imageLink={project.imageLink}
              link={project.link}
              techStack={project.techStack}
              id={project._id}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeGame;
