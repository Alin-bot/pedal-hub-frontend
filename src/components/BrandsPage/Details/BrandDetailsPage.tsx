import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IBrand } from "../../../api/model/IBrand";
import { useEffect, useState } from "react";
import { BrandServiceImpl, IBrandService } from "../../../api/BrandApi";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import NavigationBar from "../../Common/Navigationbar";

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
    <>
      <NavigationBar leftText={`Brand name: ${brand.name}`} />
      <Box display="flex" flexDirection="column" p={3}>
        <div>
          <p>{brand.description}</p>
        </div>
      </Box>
    </>
  );
};

export default BrandDetailsPage;
