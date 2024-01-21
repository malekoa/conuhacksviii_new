import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import HorizontalBarChart from "./HorizontalBarChart"; 
import styles from "./Location.styles"; 
import { usePostalCode } from "../../context/PostalCodeContext"; 
import { Colors } from "../../styles/theme"; 
import { getPostalCodeData } from "./dataUtilities"; 

const LocationDashboard = () => {
  // postal code from user 
  const { postalCode } = usePostalCode();

  // from the postal code entered by the user, going to get the data associated to that postal code 
  const [postalCodeData, setPostalCodeData] = useState({ trafficLights: '', evChargers: '', commGardens: '' });

  // storing the values into variables
  const trafficLights = postalCodeData.trafficLights;
  const evChargers = postalCodeData.evChargers;
  const commGardens = postalCodeData.commGardens;

  // labels for the chart 
  const chartData = [trafficLights, evChargers, commGardens];
  const chartLabels = ['Traffic Lights', 'EV Chargers', 'Community Gardens'];


  useEffect(() => {
    if (postalCode) {
      const data = getPostalCodeData(postalCode);
      if (data) {
        setPostalCodeData(data);
      }
    }
  }, [postalCode]);

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
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                Traffic Lights: {postalCodeData.trafficLights}
              </Typography>
            </Paper>
            <br/>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                  EV Chargers: {postalCodeData.evChargers}
              </Typography>
            </Paper>
            <br/>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                  Community Gardens: {postalCodeData.commGardens}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_three}>
              <HorizontalBarChart data={chartData} labels={chartLabels} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LocationDashboard;
