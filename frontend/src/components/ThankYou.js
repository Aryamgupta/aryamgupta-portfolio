import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const ThankYou = (props) => {
  return (
    <Box
      width="300px"
      height="100%"
      className="fontFadeColor"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize="25px">
        Thank you! 🤘
      </Text>
      <Text fontSize="18px">
        Your message has been accepted. You will recieve answer really soon!
      </Text>
      <Button
        onClick={() => {
          props.setThankYou(false);
        }}
        variant="unstyled"
        color="white"
        fontSize="14px"
        padding="10px 14px"
        justifyContent="center"
        alignItems="center"
        background=" #1C2B3A"
        borderRadius=" 8px"
        className="borderAll"
        cursor="pointer"
      >
        send-new-message
      </Button>
    </Box>
  );
};

export default ThankYou;
