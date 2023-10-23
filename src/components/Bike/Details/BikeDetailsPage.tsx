import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../../api/BikeApi";
import { useParams } from "react-router-dom";
import { IBike } from "../../../api/model/IBike";
import { Box, CircularProgress, Stack, TextField } from "@mui/material";
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
      <Stack flexWrap="wrap" direction="row" gap={2}>
        {detailsList.map((detail) => (
          <Stack key={detail.label} border="solid" borderRadius={2} p={1}>
            <p>
              {detail.label}: {detail.value}
            </p>
          </Stack>
        ))}
      </Stack>
    );
  };

  return loadingItems ? (
    <CircularProgress />
  ) : !bike ? (
    <TextField label="No bike found" disabled variant="standard" />
  ) : (
    <>
      <NavigationBar leftText={`Bike name: ${bike.name}`} />
      <Stack alignItems="center" mt={2}>
        <p>{`${bike.brandID} + ${bike.name} + ${bike.year}`}</p>
        <Box border="dotted" width={600} height={350}></Box>

        <Stack width={1000} bgcolor="grey" borderRadius={2} p={2} mt={5}>
          <p>Bike details:</p>
          {displayBileDetails([
            { label: "Year", value: bike.year.toString() },
            { label: "Price", value: bike.price.toString() },
            { label: "Frame Material", value: bike.frameMaterial },
            { label: "Brakes type", value: bike.brakesType },
            { label: "Suspension type", value: bike.suspensionType },
          ])}
        </Stack>
      </Stack>
    </>
  );
};

export default BrandDetailsPage;
