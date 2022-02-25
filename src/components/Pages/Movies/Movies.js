import Card from '../../Card/Card'
import { useState, useEffect } from "react";
import './Movies.css'
import CustomPagination from '../../Header/Pagination/CustomPagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    .then(response => response.json())
    .then(data => {
      if(mounted) {
        setMovies(data.results)
        setNumOfPages(data.total_pages)}
      })
    return () => mounted = false;
  },[page])
 

  const cards = movies?.map(card=>{
    return <Card
      key={card.id}
      media_type="movie"
      {...card}
    />
  })

  return (
    <div>
      <h1 className="pageTitle">Movies</h1>
      <div className="movies">
        {movies && cards}
      </div>
      {numOfPages > 1 && 
      (<CustomPagination setPage={setPage} numOfPages={numOfPages > 500 ? 500 : numOfPages} />)}
    </div>
  )
}

export default Movies;