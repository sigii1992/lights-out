import { img_300, unavailable } from '../../config/config';
import Badge from '@material-ui/core/Badge';
import './Card.css'
import ContentModal from '../ContentModal/ContentModal';

const Card = (props) => {
  return (
    <ContentModal media_type={props.media_type} id={props.id}>
      <Badge badgeContent={props.vote_average ? props.vote_average : '?'} color={props.vote_average > 6 ? "primary" : "secondary"}></Badge>
      <img className="card--image" alt='' src={props.poster_path ? `${img_300}${props.poster_path}` : unavailable} />
      <b className="card--title">{props.title || props.name}</b>
      <span className="card--type--date">{props.media_type === "movie" ? "Movie" : "TV series"}
        <span>{props.release_date || props.first_air_date ? props.release_date || props.first_air_date : "Unknown date"}</span>
      </span>
    </ContentModal>
  )
}

export default Card;