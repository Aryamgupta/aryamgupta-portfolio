import {
  Box,
  Button,
  Link,
  List,
  ListIcon,
  li,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AppState } from "./context/AppProvider";
import { Route, Routes } from "react-router";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import TechnologyLearned from "./TechnologyLearned";
import Certificates from "./Certificates";
import listicon from "../iconss/aboutListSideIcon.png";
import ListSideIcon from "../icons/listSideIcon";
import MobileModeHeading from "./MobileModeHeading";
import ArrowDown from "../icons/ArrowDown";
import PersonalDetailsEditModal from "./Modals/PersonalDetailsEditModal";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import EducationModal from "./Modals/EducationModal";
import CertificateMode from "./Modals/CertificateMode";

const About = () => {
  const { mainContentHeiht, mobileMode, setOpenPrsnlDetailModal } = AppState();

  const [currentShow, setCurrentShow] = useState(<PersonalInfo />);
  const [aboutPartTitle, setAboutPartTitle] = useState("personal-info");
  const [selectedItem, setSelectedItem] = useState(0);

  const allListItems = document.getElementsByClassName("aboutlistitem");

  const chnageColorOfSelectedComponent = (e) => {
    let i = 0;
    setAboutPartTitle(e.currentTarget.textContent);
    for (i = 0; i < allListItems.length; i++) {
      allListItems[i].style.backgroundColor = "rgba(255,255,255,0.4)";
    }
    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
  };

  return (
    <Box
      height={mainContentHeiht}
      // background="red"
      width="100%"
      display="flex"
      overflowY="scroll"
      flexDirection={`${!mobileMode ? "row" : "column"}`}
    >
      <MobileModeHeading title="_about-me" />
      <Box
        width={`${mobileMode ? "100%" : "250px"}`}
        style={{
          height: "100%",
          margin: "0px",
          paddingTop: "10px",
        }}
        className={`${mobileMode ? "" : "borderRight"} aboutliFont`}
      >
        <li
          onClick={(e) => {
            chnageColorOfSelectedComponent(e);
            setCurrentShow(<PersonalInfo />);
            setSelectedItem(0);
          }}
          className="aboutlistitem"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          {selectedItem == 0 ? <ArrowDown /> : <ListSideIcon />}
          <span style={{ paddingLeft: "10px" }}>personal-info</span>
        </li>
        <li
          onClick={(e) => {
            chnageColorOfSelectedComponent(e);
            setCurrentShow(<Education />);

            setSelectedItem(1);
          }}
          className="aboutlistitem"
        >
          {selectedItem == 1 ? <ArrowDown /> : <ListSideIcon />}
          <span style={{ paddingLeft: "10px" }}>education</span>

          <EducationModal />
        </li>
        <li
          onClick={(e) => {
            chnageColorOfSelectedComponent(e);
            setCurrentShow(<TechnologyLearned />);

            setSelectedItem(2);
          }}
          className="aboutlistitem"
        >
          {selectedItem == 2 ? <ArrowDown /> : <ListSideIcon />}
          <span style={{ paddingLeft: "10px" }}>technologies</span>
        </li>
        <li
          onClick={(e) => {
            chnageColorOfSelectedComponent(e);
            setCurrentShow(<Certificates />);

            setSelectedItem(3);
          }}
          className="aboutlistitem"
        >
          {selectedItem == 3 ? <ArrowDown /> : <ListSideIcon />}
          <span style={{ paddingLeft: "10px" }}>certificates</span>
          <CertificateMode />
        </li>
      </Box>
      <Box
        height="100%"
        float="left"
        width="100%"
        maxWidth="600px"
        margin="0 auto"
      >
        {mobileMode && (
          <Text
            className="fontFadeColor"
            color="white"
            fontSize="16px"
            fontWeight="400"
            padding="10px 20px 0 20px"
            lineHeight="140%"
          >
            // {aboutPartTitle}
          </Text>
        )}
        {currentShow}
      </Box>
    </Box>
  );
};

export default About;
