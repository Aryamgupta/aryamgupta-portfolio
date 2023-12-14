import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import EducationCard from "./EducationCard";
import { AppState } from "./context/AppProvider";

const Education = () => {
  const { mobileMode, fetchAllDegrees, degrees, setDegrees } = AppState();

  useEffect(() => {
    fetchAllDegrees();
  }, []);
  return (
    <Box height="100%" width="100%" margin={`${mobileMode ? "0" : "20px"}`}>
      {degrees.map((deg) => (
        <EducationCard
          DegreeInstitude={deg.DegreeInstitude}
          DegreeYear={deg.DegreeYear}
          DegreePercentage={deg.DegreePercentage}
          DegreeName={deg.DegreeName}
          id={deg._id}
        />
      ))}
    </Box>
  );
};

export default Education;
