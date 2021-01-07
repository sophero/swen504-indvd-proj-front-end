import React from 'react';
import './Posts.css';

function PostRow(props) {
    let name = props.name;
    if (name === "") name = "Anonymous";

    return(
        <div className="post-row__container">
            <div className="post-row__details">
                <div className="post-row__name">Posted by: {name}</div>
            </div>
            <div className="post-row__body">{props.body}</div>
            <div className="post-row__footer">
                <div className="post-row__timestamp">{props.timestamp}</div>
                <div className="post-row__delete"
                    onClick={() => props.deletePost(props._id)}
                >[x]</div>
            </div>
        </div>
    );
}

export default PostRow;
