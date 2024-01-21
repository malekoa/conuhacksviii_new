import { Grid, Paper, Typography } from "@mui/material";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import Statistics from "../../components/Statistics";
import { usePostalCode } from "../../context/PostalCodeContext";
import { Colors } from "../../styles/theme";
import styles from "./Bike.styles";

const Bike = () => {
  const { postalCode } = usePostalCode();
  return (
    <div>
      <div style={styles.backgroundImg} />
      <div style={styles.container}>
        <Typography variant="h5" color={Colors.navyBlue}>
          Bike Statistics for Postal Code: {postalCode}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card}>
              <Statistics />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card}>
              <HorizontalBarChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Bike;
