import React, { useEffect, useState } from 'react';
import { getImages } from '../assets/functions/getImages';
import estilos from './styles/MediaImages.css';

export function MediaImages({mediaType, mediaId}) {
    const URL_images = 'https://image.tmdb.org/t/p/w500';
    const URL_images300 = 'https://image.tmdb.org/t/p/w300';
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages(mediaType, mediaId, setImages)
    }, [mediaId])

    return(
        <section className='mediaImages-container'>
            <div className="mediaImages-header">
                <h2>Pictures</h2>
            </div>
            <div className="mediaImages-scrollContainer">
                {images ? images.map(image => {
                    return(
                    <img
                        className='mediaImages-img'
                        key={image.file_path}
                        src={`${URL_images}${image.file_path}`}
                        alt='picture' />)
                }) : null }
            </div>
        </section>
    );
} 