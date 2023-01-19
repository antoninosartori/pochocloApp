import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMediaByCategory } from "../assets/functions/getMediaByCategory";
import { MovieContainer } from "./MovieContainer";
import { SerieContainer } from "./SerieContainer";
import estilos from './styles/MediaCategoryLink.css'

export function MediaCategoryLink({ mediaType }) {
    const { categoryId, categoryName } = useParams();
    const [categoryMedia, setCategoryMedia] = useState([]);

    useEffect(() => {
        getMediaByCategory(`${mediaType}`, categoryId, setCategoryMedia);
    }, [categoryId]);


    return (
        <>
            <div className="categoryActive-scrollContainer">
                <h2>{`${categoryName}`}</h2>
                <div className="trending-scrollContainer">
                    {categoryMedia.map(media => {
                        if (mediaType === 'movie') {
                            return (
                                < MovieContainer
                                    key={media.id}
                                    movie={media} />
                            );
                        } else {
                            return (
                                < SerieContainer
                                    key={media.id}
                                    serie={media} />
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}