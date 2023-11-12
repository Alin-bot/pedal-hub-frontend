import { Box, Button, Chip, Stack } from "@mui/material";
import { IBike } from "../../../api/model/IBike";
import { useNavigate } from "react-router-dom";

type BikeBoxProps = {
  bike: IBike;
};

const BikeBox = ({ bike }: BikeBoxProps) => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Stack direction="row" gap={1}>
        <Chip label={bike.year} />
        <Chip label={`${bike.price} €`} />
      </Stack>

      <Box height={150} width={300} border="dotted"></Box>
      <Button key={bike.id} onClick={() => navigate(`/bikes/${bike.id}`)}>
        {bike.name}
      </Button>
      <Stack p={1} border="solid" borderRadius={3} borderColor="lightgrey">
        brand
      </Stack>
    </Stack>
  );
};

export default BikeBox;
