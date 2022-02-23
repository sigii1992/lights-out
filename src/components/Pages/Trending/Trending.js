import { useState, useEffect } from 'react';
import Card from '../../Card/Card'

const Trending = () => {
  const [trendingContent, setTrendingContent] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => setTrendingContent(data.results))
  },[])

  console.log(trendingContent)

  const cards = trendingContent.map(card=>{
    return <Card 
      key={card.id}
      {...card}
    />
  })
  
  return (
    <div>
      <h1 className="pageTitle">Trending</h1>
      <div className="trending">
        {trendingContent && cards}
      </div>
    </div>
  )
}

export default Trending;