import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    return (<div className="header">
        <div className='headerLogo'>
            <Link to='/'><img
                className="headerImg"
                src={logo}
                alt="Logo"
            /></Link>

        </div>

        <div className="headerTitles">
            <Link to='/add-post'><button>Add post</button></Link>
        </div>
    </div>
    );
}

export default Header;