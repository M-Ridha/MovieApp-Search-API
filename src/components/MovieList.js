import React from 'react'
import '../App.css';

function MovieList({ movies, favorite, addFavouriteMovie}) {

    const FavoriteComponent = favorite


    return (
        <div className='card-list'>
            {movies.map((movie, i) =>

                <div className='card' key={i}>
                    <img src={movie.Poster} alt='movie Poster' />
                    <h4 style={{ color: "red" }}> {movie.Title} </h4>
                    <div className='overlay' onClick={()=>addFavouriteMovie(movie)}>
                        <FavoriteComponent></FavoriteComponent>
                    </div>

                    

                </div>





            )}
        </div>
    )
}

export default MovieList