import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../api/BikesApi";
import { IBike } from "../../api/model/Bike";
import { CircularProgress } from "@mui/material";

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
  ) : (
    <div>
      {bikes?.map((bike) => (
        <div key={bike.id}>
          <h1>{bike.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default BikesPage;
