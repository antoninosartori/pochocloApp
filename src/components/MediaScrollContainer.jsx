import React, { useEffect, useState } from "react";
import estilos from './styles/ScrollContainer.css';
import { getTrends } from "../assets/functions/getTrends";
import { MovieContainer } from "./MovieContainer";
import { SerieContainer } from "./SerieContainer";

export function MediaScrollContainer ({mediaType, headerTitle}) {
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        getTrends(`${mediaType}`,setMedias);
    }, [])

    return(
        <>
            <section className="trending-container">
                <div className="trending-header">
                    <h2 className="title">{headerTitle}</h2>
                    <button className="btn-trending">+</button>
                </div>
                <div className="trending-scrollContainer">
                    { medias ? medias.map(media => {
                        if(mediaType === 'movie'){
                            return(
                                < MovieContainer
                                key={media.id}
                                movie={media} />
                            );
                        } else{
                            return(
                                < SerieContainer
                                key={media.id}
                                serie={media} />
                            );
                        }
                    }) : null } 
                </div>
            </section>
        </>
    );
} 