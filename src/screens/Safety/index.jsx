import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import DonutChart from './DonutChart';
import styles from "./Safety.styles"; 
import { usePostalCode } from "../../context/PostalCodeContext"; 
import { Colors } from "../../styles/theme"; 
import { getPostalCodeData } from "./dataUtilities"; 

const BikeDashboard = () => {
  // postal code from user 
  const { postalCode } = usePostalCode();

  // from the postal code entered by the user, going to get the data associated to that postal code 
  const [postalCodeData, setPostalCodeData] = useState({ homicides: '', intrusionsHome: '', robberies: ''});

  // storing the values into variables
  const homicides = postalCodeData.homicides;
  const intrusionsHome = postalCodeData.intrusionsHome;
  const robberies = postalCodeData.robberies;


  // labels for the chart 
  const chartData = [homicides, intrusionsHome, robberies];
  const chartLabels = ['Number of homicides', 'Number of house intrusions', 'Number of Robberies'];


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
                Safety Statistics for Postal Code: {postalCode}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                Number of homicides: {postalCodeData.homicides}
              </Typography>
            </Paper>
            <br/>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                  Number of home intrusions: {postalCodeData.intrusionsHome}
              </Typography>
            </Paper>
            <br/>
            <Paper elevation={0} style={styles.card_one}>
              <Typography variant="h6">
                  Number of robberies: {postalCodeData.robberies}
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

export default BikeDashboard;
