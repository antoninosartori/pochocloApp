import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/icons/pochocloLogo.svg';
import estilos from './styles/HeaderHome.css';

export function HeaderHome() {
    return (
        <header>
            <nav>
                <div className="navLeft">
                    <Link to={'/'}><img className="logoItem" src={logo} alt="logo" /></Link>
                </div>
                <div className="navRight">
                    <Link to={'/movies'} className="navItem">Movies</Link>
                    <Link to={'/series'} className="navItem">Series</Link>
                </div>
            </nav>
        </header>
    );
}