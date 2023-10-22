import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BrandServiceImpl, IBrandService } from "../../api/BrandApi";
import { BrandDTO } from "../../api/model/IBrand";
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
      <Grid container>
        {brands.map((brand) => (
          <Grid item xs={2} height={200} display="flex" alignItems="center">
            <Box width={200} height="100%">
              <Box height={50} border="solid"></Box>
              <Button
                fullWidth
                key={brand.id}
                variant="contained"
                color="secondary"
                onClick={() => navigate(`/brands/${brand.id}`)}
              >
                {brand.name}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BrandsPage;
