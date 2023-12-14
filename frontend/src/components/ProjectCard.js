import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import LinkBtn from "./LinkBtn";
import { DeleteIcon } from "@chakra-ui/icons";
import { AppState } from "./context/AppProvider";
import ShowMoreText from "react-show-more-text";

const ProjectCard = (props) => {
  const { deleteProject, devMode } = AppState();
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  return (
    <Box
      minHeight="400px"
      width="80%"
      maxWidth="350px"
      margin="20px"
      key={props.id}
    >
      <Text className="fontFadeColor">
        {props.count && (
          <span style={{ color: "rgba(85, 101, 232, 1)" }}>
            Project {props.count} //
          </span>
        )}
        {props.title}
      </Text>
      <Box
        width="100%"
        background="rgba(1, 18, 33, 1)"
        minHeight="350px"
        borderRadius="8px"
        className="borderAll"
        filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
      >
        <Box
          backgroundImage={props.imageLink}
          width="100%"
          height="165px"
          backgroundPosition="center center"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          borderTopLeftRadius="8px"
          borderTopRightRadius="8px"
          className="borderBottom BackIM"
        >
          {devMode && (
            <Box
              display="flex"
              justifyContent="flex-end"
              padding="20px"
              className="fontFadeColor"
            >
              {" "}
              <DeleteIcon
                margin="-40px -35px 0 0"
                width="30px"
                height="30px"
                cursor="pointer"
                onClick={() => {
                  deleteProject(props.id);
                }}
              />
            </Box>
          )}
        </Box>
        <Text
          className="fontFadeColor"
          fontSize="12px"
          lineHeight="150%"
          padding="20px"
          textAlign="left"
        >
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="show-more-less-clickable"
            onClick={executeOnClick}
            expanded={false}
            width={280}
            truncatedEndingComponent={"... "}
          >
            {props.des}
          </ShowMoreText>

          {props.des && <br />}
          {props.techStack && (
            <Text paddingTop="5px" fontSize="12px">
              <span
                style={{ color: "rgba(85, 101, 232, 1)", fontSize: "15px" }}
              >
                tech-stack :-{" "}
              </span>
              {props.techStack}
            </Text>
          )}
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              style={{ filter: "drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))" }}
            >
              <LinkBtn btnText="view-project" />
            </a>
          )}
        </Text>
      </Box>
    </Box>
  );
};
export default ProjectCard;
