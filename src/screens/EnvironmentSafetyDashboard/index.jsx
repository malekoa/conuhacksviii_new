import { Grid, Paper} from "@mui/material";

import Statistics from "../../components/Statistics";
import styles from "./Dashboard.styles";

const EnvironmentSafetyDashboard = () => {

  return (
    <div>
      <div style={styles.backgroundImg} />

      <div style={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Paper elevation={0} style={styles.card}>
              stats stuff
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} style={styles.card}>
              
            </Paper>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default EnvironmentSafetyDashboard;
