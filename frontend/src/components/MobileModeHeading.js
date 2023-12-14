import React from "react";
import { AppState } from "./context/AppProvider";
import { Box } from "@chakra-ui/react";

const MobileModeHeading = (props) => {
  const { mobileMode } = AppState();
  return (
    <>
      {mobileMode && (
        <Box
          style={{
            color: "white",
            padding: "20px",
            paddingBottom: "0px",
            fontSize: "14px",
            fontWeight: "450",
            textJustify: "left",
          }}
          className="fontFadeColor"
        >
          {props.title}
        </Box>
      )}
    </>
  );
};

export default MobileModeHeading;
