import { Box, Link, LinkBox, Text } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

const HomePageInfoConten = () => {
  return (
    <Box
      width={`${window.innerWidth > 480 ? "50%" : "100%"}`}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingLeft="30px"
      className="fontFadeColor"
    >
      <Box>
        <Text
          style={{
            color: "#E5E9F0",
            fontSize: "18px",
            fontStyle: "normal",
            lineHeight: "normal",
            padding: "0px",
            margin: "0px",
          }}
        >
          Hello Everyone. I am
        </Text>{" "}
        <Text
          style={{
            color: "#E5E9F0",
            fontSize: "62px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            padding: "0px",
            margin: "0px",
          }}
          filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
        >
          <Typewriter
            options={{
              delay: 75,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Aryam Gupta")
                .callFunction((state) => {
                  state.elements.cursor.setAttribute("hidden", "hidden");
                  typewriter.stop();
                })
                .start();
            }}
          />
        </Text>{" "}
        <Text
          className="frontEndText"
          filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
        >
          <Typewriter
            options={{
              delay: 400,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("> Front-end Developer")
                .callFunction((state) => {
                  state.elements.cursor.setAttribute("hidden", "hidden");
                  typewriter.stop();
                })
                .start();
            }}
          />
        </Text>
        <br />
        <Text className="githubIntoHOme">
          // you can also see it on my Github page
        </Text>
        <Text className="gitHomeLink">
          <span style={{ color: "#4D5BCE" }}>const</span>{" "}
          <span style={{ color: "#43D9AD" }}>githubLink</span> =
          <a href="https://github.com/aryamgupta" style={{ color: "#E99287" }}>
            {" "}
            "https://github.com/aryamgupta"
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default HomePageInfoConten;
