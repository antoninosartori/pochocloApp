import React, { useEffect, useState } from "react";
import { MovieContainer } from './MovieContainer.jsx';
import { SerieContainer } from './SerieContainer.jsx';
import { getSimilarMedias } from "../assets/functions/getSimilarMedias";
import estilos from './styles/SimilarMedia.css';

export function SimilarMedia({mediaType, mediaId }) {
    const [similarMedia, setSimilarMedia] = useState([]);

    useEffect(() => {
        getSimilarMedias(mediaType, mediaId, setSimilarMedia)
    }, [mediaId])

    return(
        <section className="similarMedia-container">
            <div className="similarMedia-header">
                <h2>{`Similar ${mediaType}s`}</h2>
            </div>
            <div className="similarMedia-scrollContainer">
                {similarMedia ? similarMedia.map(similarMed => {
                    if(mediaType === 'movie'){
                        return(
                            < MovieContainer 
                                key={similarMed.id}
                                movie={similarMed}/>
                    )} else{
                        return(
                            < SerieContainer 
                                key={similarMed.id}
                                serie={similarMed}/>
                    )}
                }) : null}
            </div>
        </section>
    );
    
}