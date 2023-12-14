import { Box, Text } from "@chakra-ui/react";
import React from "react";
import FaceBook from "../icons/FaceBook";

const SocialLinkICons = (props) => {
  return (
    <a
      style={{
        lineHeight: "47px",
        height: "47px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
      }}
      className={`${props.borderDir} fontFadeColor`}
      href={props.link}
    >
      {window.innerWidth > 480 && (
        <Text textAlign="47px" height="47px" paddingLeft="10px">
          {props.content}
        </Text>
      )}
      <Box padding="14px">{props.icon}</Box>
    </a>
  );
};

export default SocialLinkICons;
