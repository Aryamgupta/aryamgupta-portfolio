import { Box, Text } from "@chakra-ui/react";
import React from "react";

const EducationCard = (props) => {
  return (
    <Box
      background="#011221;"
      className="eduCard borderAll fontFadeColor"
      borderRadius="8px"
      padding="10px"
      margin="15px 5px"
      filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
    >
      <Text margin="0px" color="#FEA55F" fontWeight="300" fontSize="17px">
        {props.DegreeName}
      </Text>
      <Text margin="0px" color="white" fontWeight="300" fontSize="16px">
        {props.DegreeInstitude}
      </Text>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        fontWeight="100"
        fontSize="15px"
      >
        <Text margin="0px">{props.DegreePercentage}</Text>
        <Text margin="0px">{props.DegreeYear}</Text>
      </Box>
    </Box>
  );
};

export default EducationCard;
