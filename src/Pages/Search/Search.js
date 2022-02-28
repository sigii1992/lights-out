import { useState } from "react";
import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff"
    }
  }
})

const Search = () => {
  const [type, setType] = useState(0);

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme} >
        <div style={{ display: "flex", margin: "15px 0"  }}>
          <TextField
            style={{ flex: 1}}
            className="searchBox"
            label="Search"
            variant="filled"
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            <SearchIcon/>
          </Button>
        </div>
        <Tabs 
          value={type} 
          indicatorColor="primary" 
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Search Movies" style={{ width: "50%" }} />
          <Tab label="Search TV Series" style={{ width: "50%" }} />
        </Tabs>
      </ThemeProvider>
    </div>
  )
}

export default Search;