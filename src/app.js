import React from 'react'

import './app.css';

import Header from './components/header/Header';
import PostList from './components/postpage/PostList';

function App(){
    return (
        <>
            <Header />

        <div id="content-body">
            <PostList />
        </div>
        </>
    )
}

export default App;