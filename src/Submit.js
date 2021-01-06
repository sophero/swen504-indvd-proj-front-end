import React, { Component } from 'react';

class Submit extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            post: ""
        };

        // bind class this keyword to class methods
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render() {
        return(
            <div className="search__container--sub">
                <h2>
                What are you grateful for today?
                </h2>
                <div>
                    <input
                        ref={this.nameInput}
                        className="name__input"
                        type="text"
                        onClick={e => e.target.select()}
                        onChange={e => this.setState({ name: e.target.value })}
                        onKeyUp={e => {if (e.key === "Enter") this.handleSubmit()}}
                        value={this.state.name}
                        placeholder="Enter your name (optional)"
                    />
                </div>
                <div>
                    <input
                        ref={this.postInput}
                        className="post__input"
                        type="text"
                        onClick={e => e.target.select()}
                        onChange={e => this.setState({ post: e.target.value })}
                        onKeyUp={e => {if (e.key === "Enter") this.handleSubmit()}}
                        value={this.state.post}
                        placeholder="What are you grateful for today?"
                        />
                </div>
                <div>
                    <button className="submit__button" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );

    }

    handleSubmit() {
        // console.log("submit working");
        // let name = this.state.name.trim();
        // if (name === "") name = "Anonymous";
        const post = {
            name: this.state.name.trim(),
            body: this.state.post.trim(),
            timestamp: Date().toString()
        }
        console.log(post);
    }
}

export default Submit;
