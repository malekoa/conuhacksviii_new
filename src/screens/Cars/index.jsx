import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import DonutChart from './DonutChart';
import styles from "./Cars.styles"; 
import { usePostalCode } from "../../context/PostalCodeContext"; 
import { Colors } from "../../styles/theme"; 
import { getPostalCodeData } from "./dataUtilities"; 

const CarsDashboard = () => {
  // postal code from user 
  const { postalCode } = usePostalCode();

  // from the postal code entered by the user, going to get the data associated to that postal code 
  const [postalCodeData, setPostalCodeData] = useState({ theftInside: '', theftCar: ''});

  // storing the values into variables
  const theftInside = postalCodeData.theftInside;
  const theftCar = postalCodeData.theftCar;


  // labels for the chart 
  const chartData = [theftInside, theftCar];
  const chartLabels = ['Number of thefts inside the car', 'Number of car thefts'];


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
                Car Statistics for Postal Code: {postalCode}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                Number of thefts inside the car: {postalCodeData.theftInside}
              </Typography>
            </Paper>
            <br/>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                  Number of car thefts: {postalCodeData.theftCar}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_three}>
              <DonutChart data={chartData} labels={chartLabels} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CarsDashboard;
