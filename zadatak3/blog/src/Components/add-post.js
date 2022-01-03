import React from 'react';
import './add-post.css';
import Header from './header';
import axios from 'axios';



class AddPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            title: '',
            image_url: '',
            author: '',
            content: '',
            posts: [],
        }
    }


    async componentDidMount() {
        try {
            const response = await axios.get('https://jsonblob.com/api/jsonBlob/926995957976154112');
            this.setState({ posts: [...response.data] });

            this.setState({ id: this.state.posts.at(-1).id + 1 })
        } catch (err) {
            console.log(err)
        }

    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { id: this.state.id, title: this.state.title, author: this.state.author, image_url: this.state.image_url, content: this.state.content }

        this.state.posts.push(newPost);

        try {
            const response = await axios.put('https://jsonblob.com/api/jsonBlob/926995957976154112', this.state.posts);
        } catch (err) {
            console.log(err)
        }

        console.log(this.state.id)
        this.setState({ id: this.state.id + 1, title: '', image_url: '', author: '', content: '' })
    }


    render() {
        return (
            <div>
                <Header />
                <div className="write">

                    <form className="writeForm" onSubmit={this.handleSubmit}>
                        <div className="writeFormGroup">

                            <div className='writeInputs'>
                                <input
                                    className="writeInput"
                                    placeholder="Title"
                                    type="text"
                                    autoFocus={true}
                                    name='title'
                                    value={this.state.title}
                                    onChange={this.changeHandler}
                                    maxLength={20}
                                    required
                                />
                                <input type="url"
                                    className="writeInput"
                                    placeholder="Photo url"
                                    type="text"
                                    autoFocus={true}
                                    name='image_url'
                                    value={this.state.image_url}
                                    onChange={this.changeHandler}
                                    required />
                                <input type="url"
                                    className="writeInput"
                                    placeholder="Author"
                                    type="text"
                                    autoFocus={true}
                                    name='author'
                                    value={this.state.author}
                                    onChange={this.changeHandler}
                                    maxLength={20}
                                    required
                                />

                            </div>
                            <div className='writeTextArea'>
                                <textarea
                                    className=" writeText"
                                    placeholder="Tell your story..."
                                    type="text"
                                    autoFocus={true}
                                    name='content'
                                    value={this.state.content}
                                    onChange={this.changeHandler}
                                    maxLength={250}
                                    required
                                />
                            </div>
                        </div>
                        <button className="writeSubmit" type="submit">
                            Publish
                        </button>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddPost;