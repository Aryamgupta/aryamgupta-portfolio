import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AppState } from "./context/AppProvider";
import HomePageInfoConten from "./HomePageInfoConten";
import HomeGame from "./HomeGame";

const Hello = () => {
  const { mainContentHeiht, mobileMode, fetchAllProjects } = AppState();
  useEffect(() => {
    fetchAllProjects();
  }, []);
  return (
    <Box
      height={mainContentHeiht}
      // background="red"
      style={{ overflowY: "scroll", display: "flex" }}
      flexDirection={`${mobileMode ? "column" : "row"}`}
    >
      <HomePageInfoConten />
      {!mobileMode && <HomeGame />}
    </Box>
  );
};

export default Hello;
