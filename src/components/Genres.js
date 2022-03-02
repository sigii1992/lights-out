import { useEffect } from "react"
import Chip from '@material-ui/core/Chip';

const Genres = ({type, genres, setGenres, selectedGenres, setSelectedGenres, setPage}) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  }

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  }

  useEffect(() => {
    let mounted = true;
    fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      if(mounted) {
        setGenres(data.genres)}
      })
    return () => mounted = false;
    // eslint-disable-next-line
  },[])

  const selectedChip = selectedGenres?.map(genre => {
    return <Chip 
      key={genre.id}
      label={genre.name}
      style={{ margin: 3 }}
      clickable
      color="secondary"
      onDelete={() => handleRemove(genre)}
    />
  })

  const genreChip = genres?.map(genre => {
    return <Chip 
      key={genre.id}
      label={genre.name}
      style={{ margin: 3 }}
      clickable
      color="primary"
      onClick={() => handleAdd(genre)}
    />
  })

  return (
    <div style={{ padding: "6px 20px" }}>
      {selectedChip}
      {genreChip}
    </div>
  )
}

export default Genres;