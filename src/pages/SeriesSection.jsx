import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderGeneric } from "../components/HeaderGeneric";
import { MediaCategoriesList } from "../components/MediaCategoriesList";

export function SeriesSection() {
    return (
        <>
            < HeaderGeneric
                title={'Series'} />

            <div id="categoriesList" className="categoriesList-container">
                < MediaCategoriesList mediaType={'tv'} />

                < Outlet />
            </div>
        </>
    );
};