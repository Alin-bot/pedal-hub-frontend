import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../api/BikeApi";
import { BikeDTO } from "../../api/model/IBike";
import { Box, Button, CircularProgress, Grid, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Common/Navigationbar";

const bikeService: IBikeService = new BikeServiceImpl();

const BikesPage = () => {
  const navigate = useNavigate();

  const [loadingItems, setLoadingItems] = useState<boolean>();
  const [bikes, setBikes] = useState<BikeDTO[]>();

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      setLoadingItems(true);

      const response = await bikeService.getBikes();

      if (!isMounted) return;
      setBikes(response.data);
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
            <Grid item xs={2} height={200} display="flex" alignItems="center">
            <Box width={200} height="100%">
              <Box height={150} border="solid"></Box>
              <Button
                fullWidth
                key={bike.id}
                variant="contained"
                color="success"
                onClick={() => navigate(`/bikes/${bike.id}`)}
              >
                {bike.name}
              </Button>
            </Box>
          </Grid>
          ))}
      </Grid>
    </>
  );
};

export default BikesPage;
