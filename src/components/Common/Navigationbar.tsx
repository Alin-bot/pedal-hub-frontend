import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type NavigateBarProps = {
  leftText?: string;
};

const NavigationBar = (props: NavigateBarProps) => {
  const { leftText } = props;
  const navigate = useNavigate();

  return (
    <Stack bgcolor="black" p={1} mb={2}>
      <Grid container>
        <Grid item xs={5}>
          <Stack direction="row" alignItems="center" height="100%">
            <Box color="white" fontSize={20} fontWeight="bold">
              {leftText ? leftText : "Left"}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack alignItems="center">
            <Button onClick={() => navigate(`/`)} variant="contained">
              Pedal Hub
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack direction="row" alignItems="center" height="100%">
            <Stack  alignItems="end" width="100%">
            <Box color="white" fontSize={12} fontWeight="bold">
              Project created by <br />
              Alin Vezeteu and Teodor Burete
            </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default NavigationBar;
