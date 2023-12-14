import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import ThankYou from "./ThankYou";

const ConactForm = () => {
  const inputStyle = {
    borderRadius: "8px",
    background: "#011221",
    padding: "5px 20px",
  };

  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const addMessage = async () => {
    setLoading(true);
    if (!senderName || !senderEmail || !message) {
      toast({
        title: "Please Fill All Details",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: localStorage.getItem("pin"),
        },
      };

      const { data } = await axios.post(
        "/api/messages",
        {
          senderName,
          senderEmail,
          message,
        },
        config
      );
      toast({
        title: "Message Sent",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setThankYou(true);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Box width="100%" maxWidth="480px" overflowY="scroll" padding="20px">
      {!thankYou ? (
        <FormControl className="fontFadeColor">
          <FormLabel marginTop="30px">_name:</FormLabel>
          <Input
            type="text"
            variant="unstyled"
            className="borderAll"
            height="40px"
            style={inputStyle}
            onChange={(e) => {
              setSenderName(e.target.value);
            }}
            filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
          />
          <FormLabel marginTop="20px">_email:</FormLabel>
          <Input
            type="email"
            variant="unstyled"
            height="40px"
            className="borderAll"
            style={inputStyle}
            onChange={(e) => {
              setSenderEmail(e.target.value);
            }}
            filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
          />
          <FormLabel marginTop="20px">_message:</FormLabel>
          <Textarea
            textAlign="start"
            type="textArea"
            height="150px"
            variant="unstyled"
            className="borderAll"
            style={inputStyle}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
          />
          <Button
            borderRadius="8px"
            background="#1C2B3A"
            className="fontFadeColor"
            color="white"
            marginTop="20px"
            _hover={{ backgroundColor: "#1C2B3A" }}
            onClick={addMessage}
            isLoading={loading}
            filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
          >
            submit-message
          </Button>
        </FormControl>
      ) : (
        <ThankYou setThankYou={setThankYou} />
      )}
    </Box>
  );
};

export default ConactForm;
