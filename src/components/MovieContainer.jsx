import React from "react";
import { Link } from "react-router-dom";
import estilos from './styles/MovieContainer.css'

export function MovieContainer({ movie }){
    const movieId = movie.id;
    return(
        <>
            <article key={movie.id} className="movie-container">
                <Link to={`/movie/${movieId}`}>
                    <img 
                        className="movieImage" 
                        src={ !movie ? '' : `https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title} />
                </Link>
            </article>
        </>
    );
}