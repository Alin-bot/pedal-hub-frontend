import React from "react";
import { useParams } from "react-router-dom";
import { IBrand } from "../../../api/model/IBrand";
import { useEffect, useState } from "react";
import { BrandServiceImpl, IBrandService } from "../../../api/BrandApi";
import { Box, CircularProgress, Grid, TextField } from "@mui/material";
import NavigationBar from "../../Common/Navigationbar";
import BikeBox from "../../Bike/Details/BikeBox";

const brandService: IBrandService = new BrandServiceImpl();

const BrandDetailsPage = () => {
  const [loadingItems, setLoadingItems] = useState<boolean>();
  const { brandId } = useParams<{ brandId: string }>();
  const [brand, setBrand] = useState<IBrand>();

  useEffect(() => {
    let isMounted = true;

    const fetchBrand = async () => {
      setLoadingItems(true);
      const response = await brandService.getBrandById(Number(brandId));

      if (!isMounted) return;
      setBrand(response.data);
      setLoadingItems(false);
    };
    fetchBrand();

    return () => {
      isMounted = false;
    };
  }, [brandId]);

  return loadingItems ? (
    <CircularProgress />
  ) : !brand ? (
    <TextField label="No brand found" disabled variant="standard" />
  ) : (
    <>
      <NavigationBar leftText={`Brand name: ${brand.name}`} />
      <Box display="flex" flexDirection="column" p={3}>
        <div>
          <p>{brand.description}</p>
        </div>
        <h2>Bikes:</h2>
        <Grid container>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {brand.bikeList.map((bike) => (
              <Grid item xs={2} display="flex" alignItems="center">
                <BikeBox bike={bike} />
              </Grid>
            ))}
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default BrandDetailsPage;
