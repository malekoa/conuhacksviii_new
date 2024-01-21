import { Grid, Paper } from "@mui/material";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import Statistics from "../../components/Statistics";
import styles from "./Safety.styles";

const Safety = () => {
  return (
    <div>
      <div style={styles.backgroundImg} />
      <div style={styles.container}>
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

export default Safety;
