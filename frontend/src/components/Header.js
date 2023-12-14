import * as React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Box, ListItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import NavbarDrawer from "./NavbarDrawer";
import LIstItem from "./LIstItem";
import { AppState } from "./context/AppProvider";
import LoginModal from "./Modals/LoginModal";

const Header = () => {
  const { openLoginModal, setOpenLoginModal } = AppState();
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        className="borderBottom"
      >
        <Box display="flex" flexDir="row">
          <Box
            style={{
              width: "250px",
              height: "50px",
              lineHeight: "50px",
              paddingLeft: "40px",
            }}
            className={`${
              window.innerWidth > 480 ? "borderRight" : ""
            } fontFadeColor`}
            onDoubleClick={() => setOpenLoginModal(true)}
            cursor="pointer"
          >
            aryam-gupta
          </Box>
          {window.innerWidth > 480 && (
            <Box display="flex" flexDir="row">
              <LIstItem to="/" name="_hello" borderDir="borderRight" />
              <LIstItem to="/about" name="_about" borderDir="borderRight" />
              <LIstItem
                to="/project"
                name="_projects"
                borderDir="borderRight"
              />
            </Box>
          )}
        </Box>

        {window.innerWidth > 480 && (
          <LIstItem to="/contact" name="_contact-me" borderDir="borderLeft" />
        )}
        {window.innerWidth < 480 && <NavbarDrawer />}
        <LoginModal />
      </Box>
    </>
  );
};

export default Header;
