import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../../api/BikeApi";
import { useParams } from "react-router-dom";
import { IBike } from "../../../api/model/IBike";
import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Common/Navigationbar";
import { IBrand } from "../../../api/model/IBrand";
import { BrandServiceImpl, IBrandService } from "../../../api/BrandApi";

const bikeService: IBikeService = new BikeServiceImpl();
const brandService: IBrandService = new BrandServiceImpl();

const BrandDetailsPage = () => {
  const [loadingItems, setLoadingItems] = useState<boolean>();
  const { bikeId } = useParams<{ bikeId: string }>();
  const [bike, setBike] = useState<IBike>();
  const [brandDetails, setBrandDetails] = useState<IBrand>({} as IBrand);

  useEffect(() => {
    let isMounted = true;

    const fetchBrand = async () => {
      setLoadingItems(true);
      const response = await bikeService.getBikeById(Number(bikeId));

      if (!isMounted) return;
      setBike(response.data);

      if (bike?.brandID) {
        const brandResponse = await brandService.getBrandById(bike?.brandId!);

        if (!isMounted) return;
        setBrandDetails(brandResponse.data);
      }

      setLoadingItems(false);
    };
    fetchBrand();

    return () => {
      isMounted = false;
    };
  }, [bikeId]);

  const getBikeTitle = (
    brandName: string | undefined,
    bikeName: string,
    year: number
  ) => {
    return (
      <Stack direction="row" alignItems="center">
        <Typography variant="h5" color="grey" mr={1}>
          {brandName ? brandName : "brand"}
        </Typography>
        <Stack direction="row">
          <Typography variant="h4" mr={1}>
            {bikeName}
          </Typography>
          <Typography variant="subtitle1" color="grey">
            {year}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const displayBikeDetails = (
    detailsList: { label: string; value: string }[]
  ) => {
    return (
      <Stack flexWrap="wrap" direction="row" gap={4}>
        {detailsList.map((detail) => (
          <Stack key={detail.label} borderBottom="solid" width={150}>
            <Typography variant="subtitle1" color="grey">
              {detail.label}:
            </Typography>
            <Typography variant="subtitle1">{detail.value}</Typography>
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
      <NavigationBar />
      <Stack alignItems="center" mt={2}>
        {getBikeTitle(brandDetails.name, bike.name, bike.year)}

        <Box border="dotted" width={600} height={350}></Box>

        <Stack width={900} bgcolor="lightgray" borderRadius={2} p={2} mt={5}>
          {displayBikeDetails([
            { label: "Year", value: String(bike.year) },
            { label: "Price", value: String(bike.price) },
            { label: "Category", value: bike.category.name },
            { label: "Frame Material", value: bike.frameMaterial },
            { label: "Brakes type", value: `${bike.brakesType} ${bike.brakeSystem}`  },
            { label: "Suspension type", value: bike.suspensionType },
            { label: "Groupset", value: bike.groupset.name },
          ])}
        </Stack>
      </Stack>
    </>
  );
};

export default BrandDetailsPage;
