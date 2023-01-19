import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMediaDetails } from "../assets/functions/getMediaDetails";
import { getVideos } from "../assets/functions/getVideos";
import { BackdropImage } from "../components/BackdropImage";
import { HeaderGeneric } from "../components/HeaderGeneric";
import { MediaDescription } from "../components/MediaDescription";
import { MediaImages } from "../components/MediaImages";
import { SimilarMedia } from "../components/SimilarMedia";
import estilos from './styles/MovieView.css';

export function MovieView() {
    const URL_images = 'https://image.tmdb.org/t/p/w500';
    const URL_images300 = 'https://image.tmdb.org/t/p/w300';
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMediaDetails('movie', movieId, setMovie);
    }, [movieId]);
    console.log(movie)
    return (
        <>
            <section className="movieView-container">

                < BackdropImage media={movie} />

                < HeaderGeneric title={movie.title} />

                <div className="movieDescription-container">
                    < MediaDescription 
                        media={movie}
                        mediaType={'movie'}/>

                    < MediaImages 
                        mediaType={'movie'}
                        mediaId={movieId} />

                    < SimilarMedia 
                        mediaType={'movie'} 
                        mediaId={movieId}/>
                </div>
            </section>
        </>
    );
}