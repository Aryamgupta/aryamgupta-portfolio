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
  FormLabel,
  Input,
  Box,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import { AppState } from "../context/AppProvider";

const AddLink = () => {
  const toast = useToast();
  const { fetchAllLinks, links, setLinks, devMode } = AppState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [linkName, setLinkName] = useState("");
  const [link, setLink] = useState("");

  const addLink = async () => {
    setLoading(true);
    if (!linkName || !link) {
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
        "/api/links",
        {
          linkName,
          link,
        },
        config
      );
      toast({
        title: "Link Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLinks([...links, data]);
      fetchAllLinks();
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
          onClick={onOpen}
          variant="unstyled"
          style={{ margin: "0 0 0  auto" }}
          height="100%"
          isDisabled={!devMode}
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
            Add New Link
          </ModalHeader>
          <ModalCloseButton _focus={{ border: "none" }} />
          <ModalBody>
            <FormControl className="fontFadeColor">
              <FormControl isRequired={true}>
                <FormLabel>Link Name</FormLabel>
                <Input
                  type="text"
                  isRequired
                  variant="unstyled"
                  className="borderAll fontFadeColor"
                  padding="5px 10px"
                  onChange={(e) => {
                    setLinkName(e.target.value);
                  }}
                />
              </FormControl>
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Link</FormLabel>
              <Input
                type="text"
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  setLink(e.target.value);
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
                onClick={addLink}
                isLoading={loading}
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

export default AddLink;
