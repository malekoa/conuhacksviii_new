import { Typography, Grid } from "@mui/material";
import { Colors } from "../../styles/theme"

const Statistics = () => { 
  return (
    <div>
      <Grid container spacing={5} flexDirection={"column"}>
        <Grid item>
          <Typography variant={"h4"} color={Colors.pink}>
            4567
          </Typography>
          <Typography variant={"body1"} color={Colors.navyBlue}>
            Some text
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"h4"} color={Colors.pink}>
            4567
          </Typography>
          <Typography variant={"body1"} color={Colors.navyBlue}>
            Some text
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Statistics;
