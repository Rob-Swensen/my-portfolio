import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.scss';

function Header(){
    return(
        <div className='header'>
            <Link to='/'>
                <p>Home</p>
            </Link>
            <Link to='/projects'>
                <p>Projects</p>
            </Link>
            <Link to='/contact'>
                <p>Contact</p>
            </Link>
        </div>
    )
}

export default Header;