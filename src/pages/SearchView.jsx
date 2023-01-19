import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMediaBySearch } from "../assets/functions/getMediaBySearch";
import { MovieContainer } from "../components/MovieContainer";
import { SerieContainer } from "../components/SerieContainer";
import estilos from './styles/SearchView.css';

export function SearchView(){
    const [ query ] = useSearchParams();
    const valor = query.get('search')
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        getMediaBySearch(valor, setMedias)
    }, [valor])

    return(
        <section className="searchResults-container">
            {medias.map(media => {
            if(media.media_type === 'movie'){
                return(
                    < MovieContainer 
                        key={media.id}
                        movie={media}
                        />
                );
            } else {
                return(
                    < SerieContainer 
                        key={media.id}
                        serie={media}
                        />
                );
            }
        })}
        </section>
    );
}

