import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.styles";

// eslint-disable-next-line react/prop-types
const Search = ({ onEnterPressed }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnterPressed(event.target.value);
    }
  };

  return (
    <TextField
      fullWidth
      sx={{
        ...styles.SearchBar_root,
      }}
      variant="outlined"
      placeholder={"Search using the first 3 digits of your postal code ..."}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        sx: {
          ...styles.SearchBar_inputProps,
        },
      }}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Search;
