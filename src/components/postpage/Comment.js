import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css'

function Comment({comment}){
    return(
        <>
        <div id="comment-img">
            <img src={comment.author.avatar} alt="avatar comment"/>
        </div>
        <div id="comment-content">
            <span><b>{comment.author.name}</b></span> <p>{comment.content}</p>
        </div>
        </>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
}

export default Comment;