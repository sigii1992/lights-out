import { useState, useEffect } from 'react';
import Card from '../../Card/Card'
import CustomPagination from '../../Header/Pagination/CustomPagination';
import './Trending.css'

const Trending = () => {
  const [page, setPage] = useState(1)
  const [trendingContent, setTrendingContent] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    .then(response => response.json())
    .then(data => setTrendingContent(data.results))
  },[page])

  // console.log(trendingContent)

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
      <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Trending;