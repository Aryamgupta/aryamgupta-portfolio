import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import LinkBtn from "./LinkBtn";
import { DeleteIcon } from "@chakra-ui/icons";
import { AppState } from "./context/AppProvider";

const Message = (props) => {
  const { deleteMessage } = AppState();
  return (
    <Box
      background="rgba(1, 18, 33, 1)"
      width="90%"
      minWidth="300px"
      maxWidth="480px"
      className="borderAll fontFadeColor eduCard"
      borderRadius="8px"
      margin="20px auto"
      padding="20px"
      fontWeight="200"
    >
      <Text color="#FEA55F" fontSize="16px" style={{ margin: "0px" }}>
        {props.senderName}
      </Text>
      <Text
        color="rgba(67, 217, 173, 1)"
        style={{ margin: "0px" }}
        fontSize="14px"
      >
        {props.senderEmail}
      </Text>
      <Text color="#C98BDF" fontSize="12px" style={{ margin: "0px" }}>
        {props.time}
      </Text>
      <Text
        color="rgba(96, 123, 150, 1)"
        fontSize="14px"
        style={{ margin: "0px" }}
      >
        {props.message}
      </Text>
      <Box
        display="flex"
        flexDirection="row-reverse"
        width="100%"
        padding="20px 0 0 0"
      >
        <DeleteIcon
          width="30px"
          height="30px"
          cursor="pointer"
          key={props.key}
          margin="5px 0 0 30px "
          onClick={() => {
            deleteMessage(props.id);
          }}
        />
        <LinkBtn btnText="_reply" btnLink={`mailto:${props.senderMail}`} />
      </Box>
    </Box>
  );
};

export default Message;
