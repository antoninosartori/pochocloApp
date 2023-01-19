import React from "react";
import { Link } from "react-router-dom";
import estilos from './styles/SerieContainer.css'

export function SerieContainer({ serie }){
    const serieId = serie.id;
    return(
        <>
            <article key={serie.id} className="serie-container">
                <Link to={`/tv/${serieId}`}>
                    <img 
                        className="serieImage" 
                        src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} 
                        alt={serie.name} />
                </Link>
            </article>
        </>
    );
}