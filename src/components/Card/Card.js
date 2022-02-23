const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title || props.name}</h3>
      <p>{props.media_type}</p>
    </div>
  )
}

export default Card;