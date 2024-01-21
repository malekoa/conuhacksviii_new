import { Colors } from "../../styles/theme";

const styles = {
  SearchBar_root: {
    m: 1,
    bgcolor: "white",
    borderRadius: "20px",
    boxShadow: Colors.shadow,
    '& .MuiOutlinedInput-root': {
      borderRadius: "15px",
      '& .MuiOutlinedInput-notchedOutline': {
        border: "none",
      },
    },
  },
  SearchBar_inputProps: {
    borderRadius: "15px",
  },
};
export default styles;