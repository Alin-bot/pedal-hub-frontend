import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../../api/BikesApi";
import { useParams } from "react-router-dom";
import { IBike } from "../../../api/model/Bike";
import { CircularProgress, TextField } from "@mui/material";

const bikeService: IBikeService = new BikeServiceImpl();

const BrandDetailsPage = () => {
  const [loadingItems, setLoadingItems] = useState<boolean>();
  const { bikeId } = useParams<{ bikeId: string }>();
  const [bike, setBike] = useState<IBike>();

  useEffect(() => {
    let isMounted = true;

    const fetchBrand = async () => {
      setLoadingItems(true);
      const response = await bikeService.getBikeById(Number(bikeId));

      if (!isMounted) return;
      setBike(response.data);
      setLoadingItems(false);
    };
    fetchBrand();

    return () => {
      isMounted = false;
    };
  }, [bikeId]);

  return loadingItems ? (
    <CircularProgress />
  ) : !bike ? (
    <TextField label="No bike found" disabled variant="standard" />
  ) : (
    <div>
      <h1>{bike?.name}</h1>
      <p>{bike?.year}</p>
    </div>
  );
};

export default BrandDetailsPage;
