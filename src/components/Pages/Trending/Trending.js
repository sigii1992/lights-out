import { useState, useEffect } from 'react';

const Trending = () => {
  const [trendingData, setTrendingData] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => setTrendingData(data.results))
  },[])

  console.log(trendingData)

  return (
    <div>
      <h1 className="pageTitle">Trending</h1>
    </div>
  )
}

export default Trending;