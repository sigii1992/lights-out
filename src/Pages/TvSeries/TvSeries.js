import Card from '../../components/Card/Card'
import { useState, useEffect } from "react";
import './TvSeries.css'
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres'
import useGenre from '../../hooks/useGenre';

const TvSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreforURL=useGenre(selectedGenres)

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    .then(response => response.json())
    .then(data => {
      if(mounted) {
        setTvSeries(data.results)
        setNumOfPages(data.total_pages)}
      })
    return () => mounted = false;
  },[page, genreforURL])
 
  const cards = tvSeries?.map(card=>{
    return <Card
      key={card.id}
      media_type="tv"
      {...card}
    />
  })

  return (
    <div>
      <h1 className="pageTitle">TV Series</h1>
      <Genres 
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="tvSeries">
        {cards}
      </div>
      {numOfPages > 1 && 
      (<CustomPagination setPage={setPage} numOfPages={numOfPages > 500 ? 500 : numOfPages} />)}
    </div>
  )
}

export default TvSeries;