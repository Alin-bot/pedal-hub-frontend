import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BikeServiceImpl, IBikeService } from "../../../api/BikesApi";

const bikeService: IBikeService = new BikeServiceImpl();

const AddBikePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [frameMaterial, setFrameMaterial] = useState("");
  const [brakeSystem, setBrakeSystem] = useState("");
  const [brakesType, setBrakesType] = useState("");
  const [suspensionType, setSuspensionType] = useState("");
  const [category, setCategory] = useState("");
  const [groupset, setGroupset] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // bikeService.addBike({
    // } as IBike);

    alert("Form Submitted");
    navigate("/bikes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
          <Stack direction="column" gap={2}>
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Year"
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <TextField
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <TextField
              label="Frame material"
              onChange={(e) => setFrameMaterial(e.target.value)}
              required
            />
            <TextField
              label="Brakes type"
              onChange={(e) => setBrakesType(e.target.value)}
              required
            />
            <TextField
              label="Brake system"
              onChange={(e) => setBrakeSystem(e.target.value)}
              required
            />
            <TextField
              label="Suspension type"
              onChange={(e) => setSuspensionType(e.target.value)}
              required
            />
            <TextField
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <TextField
              label="Groupset"
              onChange={(e) => setGroupset(e.target.value)}
              required
            />
            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default AddBikePage;
