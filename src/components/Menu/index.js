import React from 'react';
import { Link } from 'react-router-dom';
import flix from '../../assets/img/flix.png';
import ButtonLink from './components/ButtonLink'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={flix} alt="Logo"></img>
            </Link>

            <ButtonLink className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;