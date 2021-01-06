import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import './Submit.css';

const API_URL = "https://zach-project.herokuapp.com";

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            post: "",
            posts: {},
            view: "SUBMIT"
        };

        // bind this keyword referring to this class to class methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.retrievePosts = this.retrievePosts.bind(this);
        this.switchView = this.switchView.bind(this);
    }

    async componentDidMount() {
        // print posts. wow, doing the await thing actually works! without await, it will call the method but continue without awaiting the results
        await this.retrievePosts();
        console.log("posts in state:");
        console.log(this.state.posts);
    }

    render() {
        if (this.state.view === "POSTS") {
            return(
                    <Posts
                        switchView={this.switchView}
                    />
            )
        } else if (this.state.view === "SUBMIT") {
            return(
                <div className="widget__container">
                    <h2 className="header__question">
                    What are you grateful for today?
                    </h2>
                    <textarea
                        ref={this.postInput}
                        className="input__textarea-post"
                        // type="text"
                        onClick={e => e.target.select()}
                        onChange={e => this.setState({ post: e.target.value })}
                        onKeyUp={e => {if (e.key === "Enter") this.handleSubmit()}}
                        value={this.state.post}
                        placeholder="What are you grateful for today?"
                    />
                    <input
                        ref={this.nameInput}
                        className="input__name"
                        type="text"
                        onClick={e => e.target.select()}
                        onChange={e => this.setState({ name: e.target.value })}
                        onKeyUp={e => {if (e.key === "Enter") this.handleSubmit()}}
                        value={this.state.name}
                        placeholder="Name (optional)"
                    />
                    <button className="input__submit-button" onClick={this.handleSubmit}>submit</button>
                    <div className="posts__container">

                    </div>
                </div>
            );
        }
    }

    async handleSubmit() {
        let name = this.state.name.trim();
        let body = this.state.post.trim();
        if (body === "") return; // prevent empty post

        const post = {
            name,
            body,
            timestamp: Date().toString()
        }
        console.log(post);
        console.log(`posting to: ${API_URL}/posts`);
        let res = await axios.post(`${API_URL}/posts`, post);
        // console.log(res.data);
        this.switchView();
    }

    async retrievePosts() {
        let res = await axios.get(`${API_URL}/posts`);
        this.setState({ posts: res.data });
    }

    // switch between submit view and display posts view
    switchView() {
        console.log("switchView running");
        if (this.state.view === "SUBMIT") {
            this.setState({ view: "POSTS" });
        } else if (this.state.view === "POSTS") {
            this.setState({ view: "SUBMIT" });
        }
    }
}

export default Submit;
