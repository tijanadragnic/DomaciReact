import React from 'react';
import './singlePost.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
let showError = 'Loading...'
function Prop() {
    const params = useParams()
    const [posts, setPosts] = useState([]);






    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get("https://jsonblob.com/api/jsonBlob/926995957976154112");
                setPosts(response.data);
            } catch (err) {
                console.log(err);
            }

        };

        getPosts();
    }, []);

    return (posts[0] == undefined ? <h1 className='loading'>{showError}</h1> : <div className='singleContainer'><div className='imgContainer'><img className='singleImg' src={posts[params.id].image_url} alt="Blog Image" /><h1>{posts[params.id].title}</h1><h2>By: {posts[params.id].author}</h2></div><div className='singlePostText'><p>{posts[params.id].content}</p></div></div>)
}

export default Prop;