import { Box, LinkBox, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AppState } from "./context/AppProvider";
import ArrowDown from "../icons/ArrowDown";
import ListSideIcon from "../icons/listSideIcon";
import MailIcon from "../icons/MailIcon";
import ContactLinks from "./ContactLinks";
import CallIcon from "../icons/CallIcon";
import AddLink from "./Modals/AddLink";
import OtherLinks from "../icons/OtherLinks";

const PreDefinedFields = () => {
  const { mobileMode, fetchAllLinks, links } = AppState();

  const [contactsOpen, setContactsOpen] = useState(false);
  const [findMeAlsoIn, setFindMeAlsoIn] = useState(false);

  useEffect(() => {
    fetchAllLinks();
  }, []);

  const headingStyle = {
    fontSize: "16px",
    color: "white",
    fontWeight: "400",
    height: "40px",
    padding: "0 20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transition: "0.5s",
    cursor: "pointer",
    margin: "0px",
  };
  return (
    <Box
      width={`${mobileMode ? "100%" : "250px"}`}
      height={`${mobileMode ? "auto" : "100%"}`}
      className={`${mobileMode ? "" : "borderRight"} fontFadeColor`}
      marginTop={`${mobileMode ? "20px" : "0px"}`}
    >
      <Text
        style={headingStyle}
        className={`${mobileMode ? "borderTop" : ""} borderBottom`}
        onClick={() => {
          setContactsOpen(!contactsOpen);
        }}
      >
        {contactsOpen ? <ArrowDown /> : <ListSideIcon />}
        <span style={{ marginLeft: "10px" }}>contacts</span>
      </Text>
      {contactsOpen && (
        <Box width="100%" paddingBottom="15px">
          <ContactLinks
            link="mailto:aryamgupta4@gmail.com"
            linkIcon={<MailIcon />}
            linkTitle="aryamgupta4@gmail.com"
          />
          <ContactLinks
            link="tel:+919870921633"
            linkIcon={<CallIcon />}
            linkTitle="+91 9870921633"
          />
        </Box>
      )}
      <Text
        style={headingStyle}
        className={`${contactsOpen ? "borderTop" : ""} borderBottom`}
        onClick={() => {
          setFindMeAlsoIn(!findMeAlsoIn);
        }}
      >
        {findMeAlsoIn ? <ArrowDown /> : <ListSideIcon />}
        <span style={{ marginLeft: "10px" }}>find-me-also-in</span>
        <AddLink />
      </Text>
      {findMeAlsoIn && (
        <Box width="100%">
          {links.map((link) => (
            <ContactLinks
              link={link.link}
              linkIcon={<OtherLinks />}
              linkTitle={link.linkName}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PreDefinedFields;
