import { Badge, Box, Button, Tooltip } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Certificate from "./Certificate";
import { Carousel } from "react-responsive-carousel";
import { DeleteIcon } from "@chakra-ui/icons";
import { AppState } from "./context/AppProvider";

const Certificates = () => {
  const itemBoxDesign = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const { fetchAllCertificates, certificates, setCertificates, mobileMode } =
    AppState();

  useEffect(() => {
    fetchAllCertificates();
  }, []);

  return (
    <Box height="100%" width="100%" margin="20px 0 0  0" overflowY="scroll">
      {!mobileMode && (
        <Carousel
          useKeyboardArrows
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          transitionTime={600}
        >
          {/* <Box width="300px" height="300px" background="red"></Box> */}
          {certificates.map((c) => (
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={c._id}
            >
              <Certificate img={c.img} givenBy={c.givenBy} link={c.link} />
            </Box>
          ))}
          {/* <Certificate
          img="https://tse3.mm.bing.net/th?id=OIP.wqrzL_ALTlCP_eHZgJkYfwHaJ4&pid=Api&P=0&h=180"
          givenBy="jss academy of technica edu"
        />
        <Certificate
          img="https://tse3.mm.bing.net/th?id=OIP.wqrzL_ALTlCP_eHZgJkYfwHaJ4&pid=Api&P=0&h=180"
          givenBy="jss academy of technica edu"
        />
        <Certificate
          img="https://tse3.mm.bing.net/th?id=OIP.wqrzL_ALTlCP_eHZgJkYfwHaJ4&pid=Api&P=0&h=180"
          givenBy="jss academy of technica edu"
        /> */}
        </Carousel>
      )}
      {mobileMode &&
        certificates.map((c) => (
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={c._id}
            margin="20px 0 10px 0"
          >
            <Certificate img={c.img} givenBy={c.givenBy} link={c.link} />
          </Box>
        ))}
    </Box>
  );
};

export default Certificates;
