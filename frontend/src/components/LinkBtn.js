import { Button } from "@chakra-ui/react";
import React from "react";

const LinkBtn = ({ btnText, btnLink }) => {
  return (
    <a href={btnLink}>
      <Button
        borderRadius="8px"
        padding="10px 14px"
        background="#1C2B3A"
        color="white"
        fontWeight="300"
        _hover={{ background: "#1C2B3A" }}
        filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
      >
        {btnText}
      </Button>
    </a>
  );
};

export default LinkBtn;
