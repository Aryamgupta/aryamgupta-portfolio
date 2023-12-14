import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  HStack,
  PinInput,
  PinInputField,
  Box,
  Textarea,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { AppState } from "../context/AppProvider";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";

const PersonalDetailsEditModal = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { des, setDes, fetchDes, devMode } = AppState();
  const [loading, setLoading] = useState(false);
  const [partDes, setPartDes] = useState("");

  const editDes = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: localStorage.getItem("pin"),
        },
      };

      const { data } = await axios.put(
        "/api/personalInfos",
        {
          personalInfo: partDes,
        },
        config
      );
      setDes(data.personalInfo);
      fetchDes();
      onClose();
      setLoading(false);
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
          onClick={onOpen}
          variant="unstyled"
          style={{ margin: "0 5px 0  auto" }}
          height="100%"
          isDisabled={!devMode}
        >
          <EditIcon />
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          className="fontFadeColor basicModal"
          width={`${window.innerWidth - 30}px`}
          margin="15px auto"
        >
          <ModalHeader fontWeight="300">Update Description</ModalHeader>
          <ModalCloseButton _focus={{ border: "none" }} />
          <ModalBody>
            <FormControl className="fontFadeColor">
              <Textarea
                variant="unstyled"
                className="borderAll"
                height="400px"
                padding="10px"
                placeholder={des}
                onChange={(e) => {
                  setPartDes(e.target.value);
                }}
              ></Textarea>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Box>
              <Button
                variant="unstyled"
                className="borderAll fontFadeColor"
                margin="0 auto"
                isLoading={loading}
                onClick={editDes}
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

export default PersonalDetailsEditModal;
