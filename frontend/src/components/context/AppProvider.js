import React, { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router";
import Hello from "../Hello";
import About from "../About";
import Projects from "../Projects";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const toast = useToast();
  const mainContentHeiht =
    window.innerHeight - (window.innerWidth > 480 ? 201 : 131);

  const mobileMode = window.innerWidth < 480;

  // state for the navbar in mobile mode

  const [opnMblNav, setOpnMblNav] = useState(false);

  const [devMode, setDevMode] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  // contentLoading
  const [contentLoading, setContentLoading] = useState(false);

  // states for storing datas of the different fields

  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [links, setLinks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [des, setDes] = useState("");

  // funtion to fetch all the projects

  const fetchAllProjects = async () => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/projects", config);
      data.reverse();
      setProjects(data);
      setContentLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // funtion to fetch all the certificates

  const fetchAllCertificates = async () => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/certificates", config);
      setCertificates(data);
      setContentLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // funtion to fetch all the messages

  const fetchAllMessages = async () => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: localStorage.getItem("pin"),
        },
      };

      const { data } = await axios.get("/api/messages", config);
      setMessages(data);
      setContentLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // funtion to fetch all the links

  const fetchAllLinks = async () => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/links", config);
      setLinks(data);
      setContentLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // funtion to fetch all the degrees

  const fetchAllDegrees = async () => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/degrees", config);
      setDegrees(data);
      setContentLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // funtion to fetch the description

  const fetchDes = async () => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get("/api/personalInfos", config);
      setDes(data.personalInfo);
      setContentLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // funtion to delete the message

  const deleteMessage = async (id) => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: localStorage.getItem("pin"),
        },
      };

      const { data } = await axios.delete(`/api/messages/${id}`, config);
      toast({
        title: "Message Deleted",
        // description: error.response.message.data,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      fetchAllMessages();
      setContentLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  // function to delete the project

  const deleteProject = async (id) => {
    setContentLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          pin: localStorage.getItem("pin"),
        },
      };

      const { data } = await axios.delete(`/api/projects/${id}`, config);
      toast({
        title: "Project Deleted",
        // description: error.response.message.data,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      fetchAllProjects();
      setContentLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured",
        // description: error.response.message.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setContentLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        mainContentHeiht,
        mobileMode,
        openLoginModal,
        setOpenLoginModal,
        contentLoading,
        setContentLoading,
        devMode,
        setDevMode,
        projects,
        setProjects,
        certificates,
        setCertificates,
        des,
        setDes,
        links,
        setLinks,
        messages,
        setMessages,
        degrees,
        setDegrees,
        fetchAllProjects,
        fetchAllCertificates,
        fetchAllMessages,
        fetchAllLinks,
        fetchAllDegrees,
        fetchDes,
        deleteProject,
        deleteMessage,
        opnMblNav,
        setOpnMblNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
