import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import HorizontalBarChart from "./HorizontalBarChart"; 
import styles from "./Bike.styles"; 
import { usePostalCode } from "../../context/PostalCodeContext"; 
import { Colors } from "../../styles/theme"; 
import { getPostalCodeData } from "./dataUtilities"; 

const BikeDashboard = () => {
  // postal code from user 
  const { postalCode } = usePostalCode();

  // from the postal code entered by the user, going to get the data associated to that postal code 
  const [postalCodeData, setPostalCodeData] = useState({ collisionCyclist: '', bikeFixture: ''});

  // storing the values into variables
  const collisionCyclist = postalCodeData.collisionCyclist;
  const bikeFixture = postalCodeData.bikeFixture;

  // labels for the chart 
  const chartData = [collisionCyclist, bikeFixture];
  const chartLabels = ['Number of Collisions with Cyclists', 'Number of Bike Fixtures'];


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
                Number of collisions with cyclists: {postalCodeData.collisionCyclist}
              </Typography>
            </Paper>
            <br/>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                  Number of bike fixtures: {postalCodeData.bikeFixture}
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

export default BikeDashboard;
