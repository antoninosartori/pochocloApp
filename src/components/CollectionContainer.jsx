import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollections } from "../assets/functions/getCollections";
import estilos from './styles/CollectionsScrollContainer.css';


export function CollectionContainer({ collectionId }){
    const [ collections, setCollections] = useState([]);


    useEffect(() => {
                getCollections(collectionId, setCollections)
    }, [collectionId])

    return(
        <>
            <article key={collections.id} className="collection-container">
                <Link to={`/collection/${collectionId}`}>
                    <img 
                        className="collectionImage" 
                        src={ !collections ? '' : `https://image.tmdb.org/t/p/w300${collections.poster_path}`}
                        alt={collections.name} />
                </Link>
            </article>
        </>
    );

}