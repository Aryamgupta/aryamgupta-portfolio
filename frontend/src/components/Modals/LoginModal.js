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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AppState } from "../context/AppProvider";

const LoginModal = () => {
  const { openLoginModal, setOpenLoginModal, setDevMode, devMode } = AppState();
  const inputStyle = {
    borderRadius: "8px",
    background: "#011221",
    padding: "5px 20px",
  };

  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");

  const login = async () => {
    setLoading(false);
    if (!pin || pin.length < 6) {
      toast({
        title: "Admin Authorization Failed",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(true);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: pin,
        },
      };

      // const { data } = await axios.get("/api/admin", config);

      const { data } = await axios.get("/api/admin", config);

      toast({
        title: "Admin Mode Enabled Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("pin", data.pin);
      setDevMode(true);
      setLoading(false);
      setOpenLoginModal(false);
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
      setOpenLoginModal(false);
    }
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("pin");
    setDevMode(false);
    setLoading(false);
    setOpenLoginModal(false);
  };

  return (
    <>
      <Modal
        isOpen={openLoginModal}
        onClose={() => {
          setOpenLoginModal(false);
        }}
      >
        <ModalOverlay />
        <ModalContent
          className="fontFadeColor basicModal"
          width={`${window.innerWidth - 30}px`}
          margin="15px auto"
        >
          <ModalHeader fontWeight="300">
            Hi Aryam , <br />
            <span style={{ fontSize: "12px", color: "rgba(96, 123, 150, 1)" }}>
              verify your identity to start changing
            </span>
          </ModalHeader>
          <ModalCloseButton _focus={{ border: "none" }} />
          <ModalBody>
            <FormControl className="fontFadeColor">
              {!devMode && <FormLabel>_pin:</FormLabel>}
              {!devMode && (
                <HStack>
                  <PinInput type="number" mask>
                    <PinInputField
                      onChange={(e) => {
                        setPin(e.currentTarget.value);
                      }}
                    />
                    <PinInputField
                      onChange={(e) => {
                        setPin(pin + e.currentTarget.value);
                      }}
                    />
                    <PinInputField
                      onChange={(e) => {
                        setPin(pin + e.currentTarget.value);
                      }}
                    />
                    <PinInputField
                      onChange={(e) => {
                        setPin(pin + e.currentTarget.value);
                      }}
                    />
                    <PinInputField
                      onChange={(e) => {
                        setPin(pin + e.currentTarget.value);
                      }}
                    />
                    <PinInputField
                      onChange={(e) => {
                        setPin(pin + e.currentTarget.value);
                      }}
                    />
                  </PinInput>
                </HStack>
              )}
              {!devMode && (
                <Button
                  borderRadius="8px"
                  background="#1C2B3A"
                  className="fontFadeColor"
                  color="white"
                  marginTop="20px"
                  _hover={{ backgroundColor: "#1C2B3A" }}
                  onClick={login}
                  isLoading={loading}
                >
                  Admin Login
                </Button>
              )}
              {devMode && (
                <Button
                  borderRadius="8px"
                  background="#1C2B3A"
                  className="fontFadeColor"
                  color="white"
                  marginTop="20px"
                  _hover={{ backgroundColor: "#1C2B3A" }}
                  onClick={logout}
                  isLoading={loading}
                >
                  Logout
                </Button>
              )}
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
