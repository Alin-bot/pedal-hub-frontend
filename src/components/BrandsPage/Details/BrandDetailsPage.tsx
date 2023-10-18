import React from "react";
import { useParams } from "react-router-dom";
import { IBrand } from "../../../api/model/Brand";
import { useEffect, useState } from "react";
import { BrandServiceImpl, IBrandService } from "../../../api/BrandApi";
import { CircularProgress, TextField } from "@mui/material";

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
  }, []);

  return loadingItems ? 
  <CircularProgress /> : !brand ? (
    <TextField label="No brand found" disabled variant="standard" />) :
  (
    <div>
      <h1>{brand?.name}</h1>
      <p>{brand?.description}</p>
    </div>
  );
};

export default BrandDetailsPage;
