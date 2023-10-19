import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BrandServiceImpl, IBrandService } from "../../api/BrandApi";
import { IBrand } from "../../api/model/Brand";

const brandService: IBrandService = new BrandServiceImpl();

const BrandsPage = () => {
  const navigate = useNavigate();

  const [loadingItems, setLoadingItems] = useState<boolean>();
  const [brands, setBrands] = useState<IBrand[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      setLoadingItems(true);

      const response = await brandService.getBrands();

      if (!isMounted) return;
      setBrands(response.data);
      setLoadingItems(false);
    };
    fetchItems();

    return () => {
      isMounted = false;
    };
  }, []);

  return loadingItems ? (
    <CircularProgress />
  ) : !brands ? (
    <TextField label="No brands found" disabled variant="standard" />
  ) : (
    <Box display="flex" flexDirection="column" p={3}>
      <Box width={200}>
        <Button
          onClick={() => navigate(`/`)}
          variant="outlined"
          color="success"
        >
          Home
        </Button>
      </Box>
      <Stack direction="column" width={200} spacing={2} mt={5}>
        {brands.map((brand) => (
          <Button
            key={brand.id}
            variant="contained"
            onClick={() => navigate(`/brands/${brand.id}`)}
          >
            {brand.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default BrandsPage;