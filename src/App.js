import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
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
            <Route path='/tv-series' element={<TVseries/>} />
            <Route path='/search' element={<Search/>} />
          </Routes>
        </Container>  
      </div>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
