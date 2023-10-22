import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BikeServiceImpl, IBikeService } from "../../../api/BikesApi";
import {
  BrakeSystem,
  BrakesType,
  FrameMaterial,
  Groupset,
  IBike,
  SuspensionType,
} from "../../../api/model/IBike";

const bikeService: IBikeService = new BikeServiceImpl();

const AddBikePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>();
  const [year, setYear] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [brandId, setBrandId] = useState<number>();
  const [frameMaterial, setFrameMaterial] = useState<FrameMaterial>();
  const [brakeSystem, setBrakeSystem] = useState<BrakeSystem>();
  const [brakesType, setBrakesType] = useState<BrakesType>();
  const [suspensionType, setSuspensionType] = useState<SuspensionType>();
  const [category, setCategory] = useState<{ id: number; name: string }>();
  const [groupset, setGroupset] = useState<Groupset>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    bikeService.addBike({
      name: name!,
      year: year!,
      price: price!,
      brandId: brandId!,
      frameMaterial: frameMaterial!,
      brakeSystem: brakeSystem!,
      brakesType: brakesType!,
      suspensionType: suspensionType!,
      category: category!,
      groupset: groupset!,
    } as IBike);

    alert("Form Submitted");
    navigate("/bikes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
          <Stack direction="column" gap={2}>
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Year"
              onChange={(e) => setYear(Number(e.target.value))}
              required
            />
            <TextField
              label="Price"
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
            <Autocomplete
              id="frame-material"
              value={frameMaterial}
              onChange={(event: any, newValue: FrameMaterial | null) => {
                setFrameMaterial(newValue!);
              }}
              options={Object.values(FrameMaterial)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Frame Material" />
              )}
            />
            <Autocomplete
              id="brakes-type"
              value={brakesType}
              onChange={(event: any, newValue: BrakesType | null) => {
                setBrakesType(newValue!);
              }}
              options={Object.values(BrakesType)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Brakes type" />
              )}
            />
            <Autocomplete
              id="brake-system"
              value={brakeSystem}
              onChange={(event: any, newValue: BrakeSystem | null) => {
                setBrakeSystem(newValue!);
              }}
              options={Object.values(BrakeSystem)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Brake system" />
              )}
            />
            <Autocomplete
              id="suspenstion-type"
              value={suspensionType}
              onChange={(event: any, newValue: SuspensionType | null) => {
                setSuspensionType(newValue!);
              }}
              options={Object.values(SuspensionType)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Suspension type" />
              )}
            />

            {/*
            <TextField
              label="Brand"
              onChange={(e) => setBrandId(Number(e.target.value))}
              required
            />
            <TextField
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <TextField
              label="Groupset"
              onChange={(e) => setGroupset(e.target.value)}
              required
            />
            */}
            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default AddBikePage;
