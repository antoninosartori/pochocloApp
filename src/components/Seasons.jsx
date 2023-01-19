import React, { useEffect, useState } from "react";
import { getEpisodes } from "../assets/functions/getEpisodes";
import estilos from './styles/Seasons.css';

export function Seasons({ media }){
    const URL_images300 = 'https://image.tmdb.org/t/p/w300';
    const [ inputValue, setInputValue] = useState('');
    const [episodes, setEpisodes ] = useState([]);
    const seasons = media.seasons;
    
    useEffect(() => {
        getEpisodes(media.id, inputValue, setEpisodes)
    }, [inputValue, media.id])

    const onChangeSelect = (event) => {
        setInputValue(parseInt(event.target.value))
    }
console.log(episodes)
    return(
        <>
            <section className="seasons-container">
                <select 
                    className="seasons-select"
                    onChange={onChangeSelect}>
                        <option value="1">seasons</option>
                        {seasons ? seasons.map(season => {
                            return(
                                <option
                                    className="seasons-option"
                                    key={season.id}    
                                    value={season.season_number}
                                    >{season.name}</option>
                            );
                        }) : null}
                </select>
                <div className="episodes-scrollContainer">
                    {episodes ? episodes.map(episode => {
                        return(
                            <article 
                                key={episode.id}
                                className='episode-container'>
                                <img
                                    className="episodeImg"
                                    src={`${URL_images300}${episode.still_path}`} 
                                    alt={episode.name} />
                                <h3 className="episode-title">{episode.name}</h3>
                                <p className="episode-description">{episode.overview}</p>
                            </article>
                        )
                    }) : null}
                </div>
            </section>
        </>
    );
}