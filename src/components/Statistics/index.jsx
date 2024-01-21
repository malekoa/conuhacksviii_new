import { Typography, Grid } from "@mui/material";
import { Colors } from "../../styles/theme"

const Statistics = ({ postalCode, trees }) => { 
  return (
    <div>
      <Grid container spacing={5} flexDirection={"column"}>
        <Grid item>
          <Typography variant={"h4"} color={Colors.pink}>
            {postalCode || "---"}
          </Typography>
          <Typography variant={"body1"} color={Colors.navyBlue}>
            Postal Code
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"h4"} color={Colors.pink}>
            {trees || "-"}
          </Typography>
          <Typography variant={"body1"} color={Colors.navyBlue}>
            Number of public trees
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Statistics;
