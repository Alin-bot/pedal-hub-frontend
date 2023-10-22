import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../../api/BikesApi";
import { useParams } from "react-router-dom";
import { IBike } from "../../../api/model/IBike";
import { Box, CircularProgress, TextField } from "@mui/material";
import NavigationBar from "../../Common/Navigationbar";

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

  const displayBileDetails = (
    detailsList: { label: string; value: string }[]
  ) => {
    return (
      <Box width={400}>
        {detailsList.map((detail) => (
          <div key={detail.label}>
            <p>
              {detail.label}: {detail.value}
            </p>
          </div>
        ))}
      </Box>
    );
  };

  return loadingItems ? (
    <CircularProgress />
  ) : !bike ? (
    <TextField label="No bike found" disabled variant="standard" />
  ) : (
    <>
      <NavigationBar leftText={`Bike name: ${bike.name}`} />
      <Box display="flex" flexDirection="column" p={3}>
        <Box width={200}></Box>
        <Box width={400}>Bike details:</Box>
        {displayBileDetails([
          { label: "Year", value: bike.year.toString() },
          { label: "Price", value: bike.price.toString() },
          { label: "Frame Material", value: bike.frameMaterial },
          { label: "Brakes type", value: bike.brakesType },
          { label: "Suspension type", value: bike.suspensionType },
        ])}
      </Box>
    </>
  );
};

export default BrandDetailsPage;
