import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../api/BikesApi";
import { IBike } from "../../api/model/Bike";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const bikeService: IBikeService = new BikeServiceImpl();

const BikesPage = () => {
  const navigate = useNavigate();

  const [loadingItems, setLoadingItems] = useState<boolean>();
  const [bikes, setBikes] = useState<IBike[]>();

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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack spacing={2} direction="row">
        {bikes.map((bike) => (
          <Button
            key={bike.id}
            variant="outlined"
            onClick={() => navigate(`/bikes/${bike.id}`)}
          >
            {bike.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default BikesPage;
