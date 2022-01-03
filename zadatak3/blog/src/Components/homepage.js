import React from 'react';
import Header from './header';
import Posts from './posts';
import './homepage.css';


const Homepage = () => {
    return (<>
        <Header />
        <div className='allPosts'><h1>All Posts</h1></div>
        <Posts />
    </>);
}

export default Homepage;