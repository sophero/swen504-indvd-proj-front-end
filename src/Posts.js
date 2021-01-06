import React from 'react';
import PostRow from './PostRow';
import './Posts.css';

function Posts(props) {
    // iterate through posts data and return JSX to display
    let posts = props.posts.map((data, ind) => {
        return <PostRow
            name={data.name}
            body={data.body}
            timestamp={data.timestamp}
            _id={data._id}
            key={ind}
            deletePost={props.deletePost}
        />
    });
    posts.reverse(); // order posts from most recent to oldest

    return(
        <div>
            <button onClick={props.switchView}>Back to Post</button>
            <h1 className="posts__header">Recent Posts</h1>
            {posts}
        </div>
    )
}

export default Posts;
