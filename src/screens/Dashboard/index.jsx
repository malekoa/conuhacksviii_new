import { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Search from "../../components/Search";
import BarChart from "../../components/BarChart";
import DonutChart from "../../components/DonutChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import { Colors } from "../../styles/theme";
import Statistics from "../../components/Statistics";
import { isPostalCodeExist, getPostalCodeData } from "../../data/dataUtilities";
import { usePostalCode } from "../../context/PostalCodeContext";
import styles from "./Dashboard.styles";

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState("");
  const { setPostalCodeValue } = usePostalCode();
  const [queryKeys, setQueryKeys] = useState('');
  const [queryVals, setQueryVals] = useState('');

  const [queryKeys, setQueryKeys] = useState("");
  const [queryVals, setQueryVals] = useState("");

  const handleEnterPressed = (value) => {
    const postalCode = isPostalCodeExist(value);
    if (postalCode) {
      setSearchResults(`Results for postal code ${value.toUpperCase()}`);
      let results = getPostalCodeData(value);
      let k = Object.keys(results)
      let v = Object.values(results)
      setQueryKeys(k)
      setQueryVals(v)


      //console.log(results)
      setPostalCodeValue(value);
    } else {
      setSearchResults(
        `No results exist for the postal code ${value.toUpperCase()} you entered.`
      );
    }
  };

  return (
    <div>
      <div style={styles.backgroundImg} />
      <Search onEnterPressed={handleEnterPressed} />
      {searchResults && (
        <Typography variant="h5" color={Colors.navyBlue}>
          {searchResults}
        </Typography>
      )}
      <div style={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Paper elevation={0} style={styles.card}>
              <Statistics postalCode={queryVals[0]} trees={queryVals[3]} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} style={styles.card}>
              <HorizontalBarChart labelsProp={queryKeys} dataProp={queryVals} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} style={styles.card}>
              <DonutChart labelsProp={queryKeys} dataProp={queryVals} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} style={styles.card}>
              <BarChart labelsProp={queryKeys} dataProp={queryVals} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} style={styles.card}>
              <Grid
                container
                alignItems={"flex-start"}
                m={1}
                spacing={2}
                style={{ textAlign: "left" }}
              >
                <Grid item>
                  <Typography variant={"h4"} color={Colors.purple}>
                    Interesting Statistics
                  </Typography>
                  <Typography variant={"body1"} color={Colors.navyBlue} mt={5}>
                    The most discriminating feature across postal codes is <strong>bedbug exterminations</strong>.

                    <br />
                    Pedestrian collisions are <strong>83%</strong> correlated
                    with robberies
                    <br />
                    Bike collisions are <strong>78%</strong> correlated with
                    breaking and enterings
                    <br />
                    Electric vehicle chargers are <strong>74%</strong>{" "}
                    correlated with thefts inside motor vehicles
                    <br />
                    Recreational and sports locations of interest are{" "}
                    <strong>79%</strong> correlated with the number of trees
                    <br />
                    Pedestrian traffic lights are <strong>77%</strong>{" "}
                    correlated with public service locations
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
