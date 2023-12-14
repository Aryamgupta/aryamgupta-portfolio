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

const CertificateMode = () => {
  const { fetchAllCertificates, certificates, setCertificates, devMode } =
    AppState();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [givenBy, setGivenBy] = useState("");

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
          setImg(response.data.url.toString());
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

  const addCertificate = async () => {
    setLoading(true);
    if (!img || !link || !givenBy) {
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
        "/api/certificates",
        {
          img,
          givenBy,
          link,
        },
        config
      );
      toast({
        title: "Certificate Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setCertificates([data, ...certificates]);
      fetchAllCertificates();
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
          style={{ margin: "0 5px 0  auto" }}
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
            Add New Certificate
          </ModalHeader>
          <ModalCloseButton _focus={{ border: "none" }} />
          <ModalBody>
            <FormControl className="fontFadeColor">
              <FormControl isRequired={true}>
                <FormLabel>Certificate by</FormLabel>
                <Input
                  isRequired
                  variant="unstyled"
                  className="borderAll fontFadeColor"
                  padding="5px 10px"
                  onChange={(e) => {
                    setGivenBy(e.target.value);
                  }}
                />
              </FormControl>
            </FormControl>
            <FormControl
              className="fontFadeColor"
              marginTop="10px"
              isRequired={true}
            >
              <FormLabel>Certificate Picture</FormLabel>
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
              <FormLabel>Certificate Link</FormLabel>
              <Input
                type="Text"
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
                onClick={addCertificate}
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

export default CertificateMode;
