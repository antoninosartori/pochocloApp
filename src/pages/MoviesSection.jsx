import React, { useEffect, useState } from "react";
import estilos from './styles/MoviesSection.css'
import { Outlet } from "react-router-dom";
import { MediaCategoriesList } from "../components/MediaCategoriesList";
import { HeaderGeneric } from "../components/HeaderGeneric";

export function MoviesSection () {
    return(
        <>
            < HeaderGeneric 
                title={'Movies'} />

            <div id="categoriesList" className="categoriesList-container">
                < MediaCategoriesList 
                    mediaType={'movie'}
                    />
                < Outlet />
            </div>
            
        </>
    );
};