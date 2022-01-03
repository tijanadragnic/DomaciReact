import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div className="header">
        <div className='headerLogo'>
            <Link to='/'><img
                className="headerImg"
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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