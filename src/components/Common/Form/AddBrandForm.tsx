import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrandServiceImpl, IBrandService } from "../../../api/BrandApi";
import { IBrand } from "../../../api/model/IBrand";

const brandService: IBrandService = new BrandServiceImpl();

const AddBrandPage = () => {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    brandService.addBrand({
      name: name,
      description: description,
      country: country,
    } as IBrand);

    alert("Form Submitted");
    navigate("/brands");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
          <Stack
            direction="column"
            width={300}
            height={300}
            justifyContent="space-between"
          >
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <TextField
              label="Country"
              onChange={(e) => setCountry(e.target.value)}
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

export default AddBrandPage;
