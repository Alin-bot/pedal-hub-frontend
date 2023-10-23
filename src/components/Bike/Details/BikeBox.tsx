import { Box, Button } from "@mui/material";
import { IBike } from "../../../api/model/IBike";
import { useNavigate } from "react-router-dom";

type BikeBoxProps = {
  bike: IBike;
};

const BikeBox = ({ bike }: BikeBoxProps) => {
  const navigate = useNavigate();

  return (
    <Box width={200}>
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
  );
};

export default BikeBox;
