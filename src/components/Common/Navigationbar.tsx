import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type NavigateBarProps = {
  leftText?: string;
};

const NavigationBar = (props: NavigateBarProps) => {
  const { leftText } = props;
  const navigate = useNavigate();

  // TODO: fix parent margin bug
  return (
    <Stack
      direction="column"
      width="100%"
      height={50}
      bgcolor="black"
      justifyContent="space-between"
      display="flex"
      flexDirection="row"
      p={1}
      mb={2}
    >
      <Box display="flex" alignItems="center" height="100%">
        <Box color="white" fontSize={20} fontWeight="bold">
          {leftText ? leftText : "Left"}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" height="100%">
        <Button onClick={() => navigate(`/`)} variant="contained">
          Pedal Hub
        </Button>
      </Box>
      <Box display="flex" alignItems="center" height="100%">
        <Box color="white" fontSize={12} fontWeight="bold">
          Project created by <br />
          Alin Vezeteu and Teodor Burete
        </Box>
      </Box>
    </Stack>
  );
};

export default NavigationBar;
