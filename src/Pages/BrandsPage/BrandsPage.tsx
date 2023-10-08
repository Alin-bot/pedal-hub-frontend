import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BrandsPage = () => {
  const navigate = useNavigate();

  const getBrands = () => {
    const brands = require("../../data/brands.json");

    return brands.map((brand: { id: number; name: string }) => {
      return (
        <Box>
          <Button onClick={() => navigate(`${brand.name}`)}>
            {brand.name}
          </Button>
        </Box>
      );
    });
  };

  return <Stack>{getBrands()}</Stack>;
};

export default BrandsPage;
