import { img_300, unavailable } from '../../config/config';
import Badge from '@material-ui/core/Badge';
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <Badge badgeContent={props.vote_average} color={props.vote_average > 6 ? "primary" : "secondary"}></Badge>
      <img className="card--image" src={`${img_300}${props.poster_path}` || unavailable} />
      <b className="card--title">{props.title || props.name}</b>
      <span className="card--type--date">{props.media_type === "movie" ? "Movie" : "TV series"}
        <span>{props.release_date || props.first_air_date}</span>
      </span>
    </div>
  )
}

export default Card;