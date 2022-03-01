import { useState, useEffect } from "react";
import axios from "axios";
import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Card from '../../components/Card/Card';
import CustomPagination from '../../components/Pagination/CustomPagination';

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
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const handleChange = (event, newValue) => {
    setType(newValue);
    setPage(1)
  };

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    searchText && fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  const cards = content?.map(card=>{
    return <Card
      key={card.id}
      media_type={type ? "tv" : "movie"}
      {...card}
    />
  })

  return (
    <div>
      <ThemeProvider theme={darkTheme} >
        <div style={{ display: "flex", margin: "15px 0"  }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button onClick={fetchSearch} variant="contained" style={{ marginLeft: 10 }}>
            <SearchIcon/>
          </Button>
        </div>
        <Tabs 
          value={type} 
          indicatorColor="primary" 
          textColor="primary"
          onChange={handleChange}
          centered
        >
          <Tab label="Search Movies" style={{ width: "50%" }} />
          <Tab label="Search TV Series" style={{ width: "50%" }} />
        </Tabs>
      </ThemeProvider>
      <div className="content">
        {cards}
        {!searchText &&  <h2>Enter the name of the Movie or TV serie and click the Search button! </h2> }
        {searchText && content.length === 0 && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && 
      (<CustomPagination setPage={setPage} numOfPages={numOfPages > 500 ? 500 : numOfPages} />)}
    </div>
  )
}

export default Search;