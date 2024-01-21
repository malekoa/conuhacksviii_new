import { Grid, Paper, Typography } from "@mui/material";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import Statistics from "../../components/Statistics";
import styles from "./Environment.styles";
import { usePostalCode } from "../../context/PostalCodeContext";
import { Colors } from "../../styles/theme";

const Location = () => {
  // Use the usePostalCode hook to get the postal code from the context
  const { postalCode } = usePostalCode();

  return (
    <div>
      <div style={styles.backgroundImg} />
      <div style={styles.container}>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h5" color={Colors.navyBlue}>
                Environmental Statistics for Postal Code: {postalCode}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_two}>
              <Statistics />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_three}>
              <HorizontalBarChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Location;
