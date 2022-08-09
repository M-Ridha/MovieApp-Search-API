import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites'
import RemoveFavorite from './components/RemoveFavorite';

function App() {

  const [movies, setMovies] = useState([])
  const [favourites , setFavourites] = useState([])
  const [search,setSearch] = useState('')

  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=a2eaab59`
    const res = await fetch(url)
    const resJson = await res.json()
    console.log(resJson)
    if(resJson.Search){
      setMovies(resJson.Search)
    }
    
  }

  useEffect(()=>{
    getMovieRequest(search);
    console.log('useEffect')
  },[search])

  useEffect(()=>{
    const movieFav = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    );
    setFavourites(movieFav)
  },[])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))
  } 
  
  
  
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites,movie]
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
    /* setFavourites([...favourites,movie]) */
    /* saveToLocalStorage(setFavourites([...favourites,movie])) */
    
  }

  const remove = (movie) => {
    const DeleteMovie = favourites.filter(mov=>mov.imdbID !== movie.imdbID)
    setFavourites(DeleteMovie)
    saveToLocalStorage(DeleteMovie)
  }

  return (
    <div className='movie-app body'>
      <div className="nav">
        <NavBar heading ='movies'/>
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <div className='list'>
        <MovieList movies={movies} addFavouriteMovie={addFavouriteMovie} favorite={AddFavorites}/>
      </div>

      <div className="nav">
        <hr></hr>
        <h1> Favorites Movie</h1>
        <hr></hr>
      </div>

      <div className='list'>
        <MovieList movies={favourites} addFavouriteMovie={remove} favorite={RemoveFavorite}/>
      </div>

    </div>
  );
}

export default App;
