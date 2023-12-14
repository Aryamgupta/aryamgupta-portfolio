import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import LinkBtn from "./LinkBtn";

const Certificate = (props) => {
  return (
    <Box
      minWidth="300px"
      className="borderAll eduCard"
      background="rgba(1, 18, 33, 1)"
      borderRadius="12px"
      overflowY="scroll"
    >
      <Image src={`${props.img}`} width="100%" borderTopRadius="12px" />
      <Text
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="fontFadeColor"
      >
        <span
          style={{
            padding: "10px 0 ",
            color: "#607B96",
            fontSize: "14px",
            textAlign: "right",
          }}
        >
          By :-{"  "}
          <br />
          <span style={{ color: "#FEA55F", fontSize: "18px" }}>
            {props.givenBy}
          </span>
        </span>

        <LinkBtn btnText="view-certificate" btnLink={props.link} />
      </Text>
    </Box>
  );
};

export default Certificate;
