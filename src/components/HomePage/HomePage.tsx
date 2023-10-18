import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
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
    </>
  );
};

export default HomePage;
