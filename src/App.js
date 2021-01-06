import React, { Component } from 'react';
import './App.css';
import Submit from './Submit';
import Posts from './Posts';

class App extends Component {
    constructor() {
        super();
        this.state = {
            view: "SUBMIT"
        }

        // bind this keyword to class methods
        this.switchView = this.switchView.bind(this);
    }

    render() {
        if (this.state.view === "SUBMIT") {
            return(
                // <div>
                    <Submit
                        switchView={this.switchView}
                    />
                // </div>
            )
        } else if (this.state.view === "POSTS") {
            return(
                <Posts
                    switchView={this.switchView}
                />
            )
        }
    }

    // switch between submit view and display posts view
    switchView() {
        if (this.state.view === "SUBMIT") {
            this.setState({ view: "POSTS" });
        } else if (this.state.view === "POSTS") {
            this.setState({ view: "POSTS" });
        }
    }
}

export default App;
