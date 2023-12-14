import {
  Box,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  IconButton,
  Input,
  Text,
  Textarea,
  useEditableControls,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PersonalDetailsEditModal from "./Modals/PersonalDetailsEditModal";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { AppState } from "./context/AppProvider";

const PersonalInfo = () => {
  const { des, fetchDes } = AppState();

  useEffect(() => {
    fetchDes();
  }, []);

  return (
    <Box
      width="100%"
      height="100%"
      padding="20px"
      className="fontFadeColor"
      overflowY="scroll"
      color="white"
      fontWeight="200"
    >
      <Box textAlign="center" whiteSpace="pre-wrap">
        {des}
      </Box>
      <Box color="white" padding="0 0 0 auto">
        <PersonalDetailsEditModal />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
