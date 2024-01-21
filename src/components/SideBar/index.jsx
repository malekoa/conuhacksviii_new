import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import CloudIcon from "@mui/icons-material/Cloud";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import smartHomeIcon from "../../assets/smart_home_icon.png";
import styles from "./SideBar.styles";

const SideBar = () => {
  return (
    <div style={styles.container}>
      <img src={smartHomeIcon} alt="logo" width={80} />

      <Grid container spacing={8} mt={1} flexDirection={"column"}>
        <Grid item>
          <Link to="/">
            <HomeIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/location">
            <PlaceIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/environmentsafety">
            <CloudIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/bike">
            <PedalBikeIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/safety">
            <EmojiPeopleIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/cars">
            <DirectionsCarIcon />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default SideBar;

