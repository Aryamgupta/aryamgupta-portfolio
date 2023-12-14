import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Message from "./Message";
import { AppState } from "./context/AppProvider";

const Messages = () => {
  const { messages, setMessages, fetchAllMessages } = AppState();

  const timeCalc = (timeStr) => {
    let secs = Math.floor(timeStr / 1000);

    if (secs < 60) return `${secs} second${secs !== 1 ? "s" : ""} ago`;

    let mins = Math.floor(secs / 60);

    if (mins < 60) return `${mins} minute${mins !== 1 ? "s" : ""} ago`;

    let hrs = Math.floor(mins / 60);

    if (hrs < 24) return `${hrs} hour${hrs !== 1 ? "s" : ""} ago`;

    let days = Math.floor(hrs / 24);

    if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;

    let months = Math.floor(days / 30);

    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;

    let years = Math.floor(months / 12);

    return `${years} year${years !== 1 ? "s" : ""} ago`;
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);

  return (
    <Box
      height="100%"
      width="100%"
      maxWidth="480px"
      overflowY="scroll"
      margin="0 auto"
      className="eduCard"
    >
      {messages.length == 0 ? (
        <Text
          margin="auto 0 auto 0"
          padding="30px 0"
          fontSize="20px"
          className="fontFadeColor"
        >
          No Messages Available
        </Text>
      ) : (
        messages.map((m) => (
          <Message
            id={m._id}
            senderName={m.senderName}
            senderEmail={m.senderEmail}
            time={timeCalc(new Date() - new Date(m.time))}
            message={m.message}
          />
        ))
      )}
    </Box>
  );
};

export default Messages;
