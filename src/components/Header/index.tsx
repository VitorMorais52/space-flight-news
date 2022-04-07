import { useState } from "react";

//@mui components
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//@mui icons
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

//styles
import { Container } from "./styles";

function Header() {
  const [filterDate, setFilterDate] = useState("recent");

  return (
    <Container>
      <div className="top">
        <FormControl className="form-control" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
          <OutlinedInput
            value={""}
            onChange={() => {}}
            sx={{ paddingRight: "6px" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  sx={{
                    p: "10px",
                    backgroundColor: "#302e53",
                    borderRadius: "4px",
                    color: "white",
                  }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>

        <Select
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "filter date" }}
          sx={{ width: "200px" }}
        >
          <MenuItem value="recent">Mais novas</MenuItem>
          <MenuItem value="old">Mais antigas</MenuItem>
        </Select>
      </div>
      <a href="#" className="logo">
        <RocketLaunchIcon
          sx={{
            backgroundColor: "white",
            color: "#302e53",
          }}
        />
      </a>
      <h1>Space Flight News</h1>
      <Divider sx={{ width: "100%" }} />
    </Container>
  );
}

export default Header;
