import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Button,
  FormControl,
  Textarea,
  FormLabel,
  Input,
  Box,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import { AppState } from "../context/AppProvider";

const EducationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { degrees, setDegrees, fetchAllDegrees, devMode } = AppState();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [degreeName, setDegreeName] = useState("");
  const [degreeInstitude, setDegreeInstitude] = useState("");
  const [degreePercentage, setDegreePercentage] = useState("");
  const [degreeYear, setDegreeYear] = useState("");

  const addDegree = async () => {
    setLoading(true);
    if (!degreeName || !degreeInstitude || !degreePercentage || !degreeYear) {
      toast({
        title: "Please Fill Correct Entries",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      onClose();
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: localStorage.getItem("pin"),
        },
      };

      const { data } = await axios.post(
        "/api/degrees",
        {
          DegreeName: degreeName,
          DegreeInstitude: degreeInstitude,
          DegreePercentage: degreePercentage,
          DegreeYear: degreeYear,
        },
        config
      );
      toast({
        title: "Degree Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setDegrees([...degrees, data]);
      fetchAllDegrees();
      setLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      onClose();
    }
  };

  return (
    <>
      <Tooltip label="Only Allowed To Developer" aria-label="A tooltip">
        <Button
          variant="unstyled"
          style={{ margin: "0 5px 0  auto" }}
          height="100%"
          isDisabled={!devMode}
          onClick={onOpen}
        >
          <AddIcon />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          className="fontFadeColor basicModal"
          width={`${window.innerWidth - 30}px`}
          margin="15px auto"
        >
          <ModalHeader fontWeight="300" fontSize="20px">
            Add Degree
          </ModalHeader>
          <ModalCloseButton _focus={{ border: "none" }} />
          <ModalBody>
            <FormControl className="fontFadeColor">
              <FormControl isRequired={true}>
                <FormLabel>Degree Name</FormLabel>
                <Input
                  isRequired
                  variant="unstyled"
                  className="borderAll fontFadeColor"
                  padding="5px 10px"
                  onChange={(e) => {
                    setDegreeName(e.target.value);
                  }}
                />
              </FormControl>
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Institude Name</FormLabel>
              <Input
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  setDegreeInstitude(e.target.value);
                }}
              />
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <FormLabel width="40%">Percentage/CGPA</FormLabel>
              <Input
                width="50%"
                height="35px"
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  setDegreePercentage(e.target.value);
                }}
              />
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <FormLabel width="40%">Year</FormLabel>
              <Input
                width="50%"
                height="35px"
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  setDegreeYear(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Box>
              <Button
                variant="unstyled"
                className="borderAll fontFadeColor"
                margin="0 auto"
                isLoading={loading}
                onClick={addDegree}
              >
                <CheckIcon />
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EducationModal;
