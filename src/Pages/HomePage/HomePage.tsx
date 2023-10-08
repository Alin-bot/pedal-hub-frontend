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
    </>
  );
};

export default HomePage;
