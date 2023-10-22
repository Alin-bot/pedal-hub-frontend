import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../api/BikesApi";
import { BikeDTO } from "../../api/model/IBike";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
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
      <Box display="flex" flexDirection="column" p={3}>
        <Stack direction="column" width={200} spacing={2} mt={5}>
          {bikes.map((bike) => (
            <Button
              key={bike.id}
              variant="contained"
              onClick={() => navigate(`/bikes/${bike.id}`)}
            >
              {bike.name}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default BikesPage;
