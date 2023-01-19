import React from "react";
import { Link } from "react-router-dom";
import chevron from '../assets/icons/chevron.svg';

export function HeaderGeneric({title}) {
    return (
        <header>
            <nav className="nav-generic">
                <Link to='/'><img src={chevron} className="backArrow-generic"></img></Link>
                <h1 className="genericTitle">{title}</h1>
            </nav>
        </header>
    );
}