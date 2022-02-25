import { useEffect } from "react"
import Chip from '@material-ui/core/Chip';

const Genres = ({type, genres, setGenres, selectedGenres, setSelectedGenres, setPage}) => {

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      if(mounted) {
        setGenres(data.genres)}
      })
    return () => mounted = false;
  },[type, setGenres])

  console.log(genres)

  const genreChip = genres?.map(genre => {
    return <Chip 
      key={genre.id}
      label={genre.name}
      style={{ margin: 3 }}
      clickable
      color="primary"
    />
  })

  return (
    <div style={{ padding: "6px 0" }}>
      {genreChip}
    </div>
  )
}

export default Genres;