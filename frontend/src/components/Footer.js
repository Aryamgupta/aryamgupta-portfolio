import React from "react";
import { Box } from "@chakra-ui/react";
import SocialLinkICons from "../components/SocialLinkICons";
import FaceBook from "../icons/FaceBook";
import GithubICon from "../icons/GithubICon";
import TwtIcon from "../icons/TwtIcon";
import Linkedin from "../icons/Linkedin";
import WhatsappME from "../icons/WhatsappME";

const Footer = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          height: "48px",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          bottom: "0",
        }}
        className="borderTop"
      >
        <Box
          className="fontFadeColor"
          style={{ display: "flex", flexDirection: "row", height: "47px" }}
        >
          <Box
            style={{ lineHeight: "48px", padding: "0 22px", fontSize: "auto" }}
            className="borderRight"
          >
            find me
          </Box>
          <SocialLinkICons
            borderDir=" borderRight"
            icon={<Linkedin />}
            link="https://www.linkedin.com/in/aryam-gupta-a92115212/"
          />
          <SocialLinkICons
            borderDir=" borderRight"
            link="https://wa.me/qr/D6UNI5SSYZ3PC1"
            icon={<WhatsappME />}
          />
        </Box>
        <SocialLinkICons
          borderDir={`${window.innerWidth > 480 ? "borderLeft" : ""}`}
          content="@aryamgupta"
          icon={<GithubICon />}
          link="https://github.com/aryamgupta"
        />
      </Box>
    </>
  );
};

export default Footer;
