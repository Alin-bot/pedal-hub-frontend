import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../api/BikeApi";
import { IBike } from "../../api/model/IBike";
import { CircularProgress, Grid, TextField } from "@mui/material";
import NavigationBar from "../Common/Navigationbar";
import BikeBox from "./Details/BikeBox";

const bikeService: IBikeService = new BikeServiceImpl();

const BikesPage = () => {
  const [loadingItems, setLoadingItems] = useState<boolean>();
  const [bikes, setBikes] = useState<IBike[]>();

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      setLoadingItems(true);

      const response = await bikeService.getBikes();

      if (!isMounted) return;
      setBikes(response.data.content);
      setLoadingItems(false);
    };
    fetchItems();

    return () => {
      isMounted = false;
    };
  }, []);

  return loadingItems ? (
    <CircularProgress />
  ) : !bikes ? (
    <TextField label="No bikes found" disabled variant="standard" />
  ) : (
    <>
      <NavigationBar leftText="Bikes list" />
      <Grid container>
        {bikes.map((bike) => (
          <Grid item xs={2} display="flex" alignItems="center">
            <BikeBox bike={bike} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BikesPage;
