import React from "react";
import { Link } from "react-router-dom";
import playIcon from '../assets/icons/play.svg';
import estilos from './styles/BackdropImage.css'

export function BackdropImage({ media }) {
    const URL_images = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className="backdropImage-container">
            <img
                className="backdropImage"
                src={media ? `${URL_images}${media.poster_path}` : null}
                alt={media.title} />
            <Link to={`/watch/${media.id}`}>
                <img className="playIcon" src={playIcon} alt="play" />
            </Link>
        </div>
    );
}