import { img_300, unavailable } from '../../config/config';
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img className="card--image" src={`${img_300}${props.poster_path}` || unavailable} />
      <b className="card--title">{props.title || props.name}</b>
      <span className="card--type--date">{props.media_type === "movie" ? "Movie" : "TV series"}
        <span>{props.release_date || props.first_air_date}</span>
      </span>
    </div>
  )
}

export default Card;