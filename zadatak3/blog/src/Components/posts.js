import React from 'react';
import './posts.css';
import './post.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from './post'


class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: false,
        }
    }

    async componentDidMount() {

        try {
            const response = await axios.get('https://jsonblob.com/api/jsonBlob/926995957976154112');

            this.setState({ posts: [...response.data] })
        } catch (err) {
            this.setState({ error: true })
            console.log(err)
        }
    }

    render() {

        return (this.state.error ? <div className='errorMessage'><h1>Error Occured. Please refresh the page!</h1><button onClick={() => { window.location.reload() }}>Refresh</button></div> : this.state.posts.length > 0 ? <div className='container'> {this.state.posts.map((post) => { return (<Link key={post.id} to={`/${post.id}`} className='titleLink'><div><img src={post.image_url} alt="img" /><div className='postText'><h1>{post.title}</h1><h2>By: {post.author}</h2><p>{post.content}</p></div></div></Link>) })}</div> : <div className='loadingPosts'><p>Loading Posts...</p></div>)

    }
}

export default Posts;

