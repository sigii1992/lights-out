import './Header.css'
import MovieIcon from '@material-ui/icons/Movie';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

const Header = () => {
const handleClick = () => window.scroll(0, 0);

  return (
    <div className="header" onClick={handleClick}>
      <h1>
        <MovieIcon className="icon" />
        Lights out!
        <LocalMoviesIcon className="icon" />
      </h1>
    </div>
  )
}

export default Header;