import React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Common/Navigationbar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar leftText={`Home page`} />
      <Stack direction="column" spacing={2} width={300} ml={1}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/bikes")}
          >
            View Bikes
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/addbike")}
          >
            Add Bike
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/brands")}
          >
            View Brands
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/addbrand")}
          >
            Add Brand
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default HomePage;
