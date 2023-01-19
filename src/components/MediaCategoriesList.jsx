import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../assets/functions/getCategories";
import estilos from './styles/MediaCategoriesList.css';

export function MediaCategoriesList ({mediaType}) {
    const [categories, setCategories ] = useState([]);

    useEffect(() => {
        getCategories(mediaType ,setCategories)
    }, [mediaType])

    return(
        <>
            <ul className="categoriesList-ul">
                {categories.map(category => {
                    return(
                        <NavLink 
                        className={({ isActive }) => isActive ? 'btnCategorie-active' : ''}
                        key={category.id} 
                        to={`category/${category.id}/${category.name}`}>
                            <li  className="categoryItem" id={`id${category.id}`}>{category.name} </li>
                        </NavLink>
                    )
                })}
            </ul>
        </>
    )
}