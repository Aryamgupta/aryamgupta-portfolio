import React from "react";
import { AppState } from "./context/AppProvider";
import { Box } from "@chakra-ui/react";
import PreDefinedFields from "./PreDefinedFields";
import MobileModeHeading from "./MobileModeHeading";
import ConactForm from "./ConactForm";
import Messages from "./Messages";

const ContactMe = () => {
  const { mainContentHeiht, mobileMode, devMode } = AppState();
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDir={`${mobileMode ? "column" : "row"}`}
    >
      <MobileModeHeading title="_contact-me" />
      <PreDefinedFields />
      <Box
        style={{
          overflowY: "scroll",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        margin="0 auto"
      >
        {!devMode ? <ConactForm /> : <Messages />}
      </Box>
    </Box>
  );
};

export default ContactMe;
