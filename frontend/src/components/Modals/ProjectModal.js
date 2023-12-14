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
  Text,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import { AppState } from "../context/AppProvider";

const ProjectModal = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [des, setDes] = useState("");
  const [techStack, setTechStack] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const { setProjects, projects, fetchAllProjects, devMode } = AppState();

  const postDetails = (pics) => {
    setLoading(true);
    // for cheecking if pic is presend or not
    if (
      pics !== undefined &&
      (pics.type === "image/jpeg" || pics.type === "image/png")
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "iChat-app");
      data.append("cloud_name", "dy4gud84y");
      axios
        .post("https://api.cloudinary.com/v1_1/dy4gud84y/image/upload", data)
        .then((response) => {
          setImageLink(response.data.url.toString());
          setLoading(false);
          toast({
            title: "Image uploaded successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((error) => {
          console.log("Cloudinary error:", error);
          setLoading(false);
        });
    }
    // handles error if pic is not present or not of defined type
    else {
      toast({
        title: "Please Select an Image...",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  const addProject = async () => {
    setLoading(true);
    if (!title || !imageLink || !des || !techStack || !link) {
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
        "/api/projects",
        {
          title,
          imageLink,
          des,
          techStack,
          link,
        },
        config
      );
      toast({
        title: "Project Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // console.log(data);
      setProjects([data, ...projects]);
      fetchAllProjects();
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
          height="50px"
          width="50px"
          padding="20px"
          borderRadius="8px"
          className="borderAll"
          display="flex"
          alignItems="center"
          margin="0 auto 20px auto"
          justifyContent="center"
          isDisabled={!devMode}
          filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
        >
          <AddIcon height="30px" width="30px" />
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
            Add Project
          </ModalHeader>
          <ModalCloseButton _focus={{ border: "none" }} />
          <ModalBody>
            <FormControl className="fontFadeColor">
              <FormControl isRequired={true}>
                <FormLabel>Project Name</FormLabel>
                <Input
                  isRequired
                  variant="unstyled"
                  className="borderAll fontFadeColor"
                  padding="5px 10px"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </FormControl>
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Project Description</FormLabel>
              <Textarea
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  setDes(e.target.value);
                }}
              />
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Tech Stack</FormLabel>
              <Input
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  setTechStack(e.target.value);
                }}
              />
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Project Image</FormLabel>
              <Input
                type="file"
                isRequired
                variant="unstyled"
                className="borderAll fontFadeColor"
                padding="5px 10px"
                onChange={(e) => {
                  postDetails(e.target.files[0]);
                }}
              />
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Project Link</FormLabel>
              <Input
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
                onClick={addProject}
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

export default ProjectModal;
