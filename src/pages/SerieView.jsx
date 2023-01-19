import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMediaDetails } from "../assets/functions/getMediaDetails";
import { BackdropImage } from "../components/BackdropImage";
import { HeaderGeneric } from "../components/HeaderGeneric";
import { MediaDescription } from "../components/MediaDescription";
import { MediaImages } from "../components/MediaImages";
import { Seasons } from "../components/Seasons";
import { SimilarMedia } from "../components/SimilarMedia";

export function SerieView () {
    const URL_images = 'https://image.tmdb.org/t/p/w500';
    const URL_images300 = 'https://image.tmdb.org/t/p/w300';
    const { serieId } = useParams();
    const [ serie, setSerie] = useState([]);

    useEffect(() => {
        getMediaDetails('tv', serieId, setSerie);
    }, [serieId])
    

    return(
        <>
            <section className="movieView-container">
                < BackdropImage media={serie} />

                < HeaderGeneric title={serie.name} />

                <div className="movieDescription-container">
                    < MediaDescription 
                        media={serie}
                        mediaType={'serie'} />

                    < Seasons 
                        media={serie}/>

                    < MediaImages 
                        mediaType={'tv'}
                        mediaId={serieId} />

                    < SimilarMedia 
                        mediaType={'tv'}
                        mediaId={serieId} />
                </div>
            </section>
        </>
    );
}