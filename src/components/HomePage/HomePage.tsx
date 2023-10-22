import React from "react";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Common/Navigationbar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar leftText={`Home page`} />
      <Stack direction="column" spacing={2} width={300} ml={1}>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
          onClick={() => navigate("/brands")}
        >
          View Brands
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={() => navigate("/bikes")}
        >
          View Bikes
        </Button>
        <Button
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          onClick={() => navigate("/add")}
        >
          Add Brand
        </Button>
      </Stack>
    </>
  );
};

export default HomePage;
