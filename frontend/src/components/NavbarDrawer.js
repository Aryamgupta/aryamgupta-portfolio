import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import OpenMenuIcon from "../icons/openMenuIcon";
import CloseModalIconn from "../icons/CloseModalIconn";
import LIstItem from "./LIstItem";
import { AppState } from "./context/AppProvider";

const NavbarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { opnMblNav, setOpnMblNav } = AppState();
  const btnRef = React.useRef();
  const [opn, setOpn] = useState(false);

  return (
    <>
      <span
        onClick={() => {
          setOpnMblNav(true);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {!opnMblNav ? <OpenMenuIcon /> : <CloseModalIconn />}
      </span>
      <Drawer
        isOpen={opnMblNav}
        placement="right"
        onClose={() => {
          setOpnMblNav(false);
        }}
        finalFocusRef={btnRef}
      >
        <DrawerContent
          style={{
            background: "rgba(30,45,61,1)",
            marginTop: "66px",
            width: "250px",
            marginRight: "15px",
            height: "250px",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <LIstItem to="/" name="_hello" borderDir="borderBottom" />
            <LIstItem to="about" name="_about" borderDir="borderBottom" />
            <LIstItem to="/project" name="_projects" borderDir="borderBottom" />
            <LIstItem
              to="/contact"
              name="contact-me"
              borderDir="borderBottom"
            />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
