import React from "react";
import { Link } from "react-router-dom";
import estilos from './styles/MediaDescription.css';

export function MediaDescription({ media, mediaType }) {
    const categories = media.genres;

    return (
        <>
            <div className="mediaDescription-header">
                <h2>description</h2>
                <span className="mediaScore">{media.vote_average}</span>
            </div>
            <p className="mediaDescription-paragraph">{media.overview}</p>
            <ol className="categoriesMedia-container">
                {categories ? categories.map(category => {
                    return (
                        <Link key={category.id}
                            id={`id${category.id}`}
                            className='categoryItem'
                            to={`/${mediaType}s/category/${category.id}/${category.name}`}
                            >{category.name}</Link>
                        );
                            }) : null}
            </ol>
        </>
    );
}