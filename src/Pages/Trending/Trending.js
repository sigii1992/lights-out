import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'
import CustomPagination from '../../components/Pagination/CustomPagination';

const Trending = () => {
  const [page, setPage] = useState(1)
  const [trendingContent, setTrendingContent] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    .then(response => response.json())
    .then(data => setTrendingContent(data.results))
  },[page])

  const cards = trendingContent?.map(card=>{
    return <Card 
      key={card.id}
      {...card}
    />
  })
  
  return (
    <div>
      <h1 className="pageTitle">Trending</h1>
      <div className="content">
        {cards}
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Trending;