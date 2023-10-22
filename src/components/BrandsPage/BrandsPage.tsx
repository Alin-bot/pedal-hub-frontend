import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BrandServiceImpl, IBrandService } from "../../api/BrandApi";
import { BrandDTO, IBrand } from "../../api/model/IBrand";
import NavigationBar from "../Common/Navigationbar";

const brandService: IBrandService = new BrandServiceImpl();

const BrandsPage = () => {
  const navigate = useNavigate();

  const [loadingItems, setLoadingItems] = useState<boolean>();
  const [brands, setBrands] = useState<BrandDTO[]>([]);

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
    <>
      <NavigationBar leftText={`Brands list`} />
      <Box display="flex" flexDirection="column" p={3}>
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
    </>
  );
};

export default BrandsPage;
