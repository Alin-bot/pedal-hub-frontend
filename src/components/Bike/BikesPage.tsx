import React, { useEffect, useState } from "react";
import { BikeServiceImpl, IBikeService } from "../../api/BikeApi";
import { IBike } from "../../api/model/IBike";
import {
  CircularProgress,
  Grid,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import NavigationBar from "../Common/Navigationbar";
import BikeBox from "./Details/BikeBox";
import { IPageInfo } from "../../api/model/Common";

const bikeService: IBikeService = new BikeServiceImpl();

const BikesPage = () => {
  const [loadingItems, setLoadingItems] = useState<boolean>();
  const [bikes, setBikes] = useState<IBike[]>();
  const [pageInfo, setPageInfo] = useState<IPageInfo>();

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      setLoadingItems(true);

      const response = await bikeService.getBikes();

      if (!isMounted) return;

      setBikes(response.data.content);
      setPageInfo({
        totalElements: response.data.totalElements,
        totalPages: response.data.totalPages,
        size: response.data.size,
        page: response.data.page,
      } as IPageInfo);

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
      <Stack
        direction="column"
        alignItems="center"
        p={4}
      >
        <Grid container>
          {bikes.map((bike) => (
            <Grid item xs={3} display="flex" alignItems="center">
              <BikeBox bike={bike} />
            </Grid>
          ))}
        </Grid>
        <Stack mt={5}>
          <Pagination count={pageInfo?.totalPages} />
        </Stack>
      </Stack>
    </>
  );
};

export default BikesPage;
