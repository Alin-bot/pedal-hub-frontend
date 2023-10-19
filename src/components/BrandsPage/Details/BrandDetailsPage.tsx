import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IBrand } from "../../../api/model/Brand";
import { useEffect, useState } from "react";
import { BrandServiceImpl, IBrandService } from "../../../api/BrandApi";
import { Box, Button, CircularProgress, TextField } from "@mui/material";

const brandService: IBrandService = new BrandServiceImpl();

const BrandDetailsPage = () => {
  const navigate = useNavigate();

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
    <Box display="flex" flexDirection="column" p={3}>
      <Box width={200}>
        <Button
          onClick={() => navigate(-1)}
          variant="outlined"
          color="success"
        >
          Back
        </Button>
      </Box>
      <div>
        <h1>{brand?.name}</h1>
        <p>{brand?.description}</p>
      </div>
    </Box>
  );
};

export default BrandDetailsPage;
