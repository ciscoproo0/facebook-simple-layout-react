import React from 'react';

import './Post.css';
import Comment from '../postpage/Comment'

function Post({post}){

    if(post.comments){
        return (
            <div id="post">
            <div id="post-user-info">
                <img src={ post.author.avatar } alt="avatar post" id="post-img"/> <span><b>{ post.author.name }</b></span><br/>
                <small>{ post.date }</small>
            </div>
            <div id="post-content">
                <p>{post.content}</p>                
            </div>
            <hr/>
              { post.comments.map(comment => <Comment key={comment.id} comment={comment}/>) }
            </div>
        )
    }
    return (
        <div id="post">
            <div id="post-user-info">
                <img src={ post.author.avatar } alt="avatar post" id="post-img"/> <span><b>{ post.author.name }</b></span><br/>
                <small>{ post.date }</small>
            </div>
            <div id="post-content">
                <p>{post.content}</p>                
            </div>
            <hr/>
            <br/>
        </div>
    )
}

export default Post;
