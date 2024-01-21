import IntroductionImage from "../../assets/background.jpg";
import { Colors } from "../../styles/theme";

const styles = {
  container: {
    padding: "10px",
    minHeight: "70vh",
    width: "100%", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "15px",
    boxShadow: Colors.shadow,
  },
  backgroundImg: {
    backgroundImage: `url(${IntroductionImage})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    position: "fixed",

    top: 0,
    left: 0,
    zIndex: -1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    height: "300px",
    boxShadow: Colors.shadow,
    padding: "10px",
  }
};

export default styles;