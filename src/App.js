import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import TvSeries from './Pages/TvSeries/TvSeries'
import Search from './Pages/Search/Search'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <div className="App">
        <Container>
          <Routes>
            <Route path='/' element={<Trending/>} exact />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/tv-series' element={<TvSeries/>} />
            <Route path='/search' element={<Search/>} /> 
          </Routes>
        </Container>  
      </div>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
