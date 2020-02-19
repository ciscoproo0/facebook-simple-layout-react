import React, { Component } from 'react';

import './PostList.css'
import Post from '../postpage/Post'

class PostList extends Component{
    state = {
        posts: [
                {
                id: 1,
                author: {
                    name: "Larissa Cristina",
                    avatar: "https://media1.popsugar-assets.com/files/thumbor/CX4iUNVhGZp-PxaBcPQx-50evTU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/11/01/801/n/1922441/tmp_kxURtd_e3a880309601db42_eye-for-ebony-399310.jpg"
                },
                date: "04 Jun 2019",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ex sit amet dolor cursus volutpat. Nunc tristique posuere lacus, non ultricies massa hendrerit vel. Mauris orci orci, molestie et pellentesque quis, porttitor eget elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt convallis lectus ac venenatis. Sed lacinia euismod congue",
                comments: [
                    {
                    id: 2,
                    author: {
                        name: "Maria Fernanda",
                        avatar: "https://thoughtcatalog.files.wordpress.com/2014/07/summer2017_23_00753.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all"
                    },
                    content: "Pellentesque et purus malesuada, egestas nisl nec, tincidunt eros. Integer gravida efficitur sapien ultricies egestas. Donec varius vitae turpis at placerat."
                    },
                    {
                    id: 3,
                    author: {
                        name: "Denize Brandão",
                        avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fwomensmedia%2Ffiles%2F2018%2F07%2FPhoto-happy-1-unsplash-michael-dam.jpg"
                    },
                    content: "Suspendisse lacinia neque felis, sit amet consequat est finibus non. Nullam congue sem a fermentum ornare. In et ipsum a magna sagittis congue non id tortor. Donec enim nibh, cursus eu lorem sed, fringilla faucibus enim. Curabitur imperdiet consectetur condimentum. Praesent quis tincidunt magna. Aliquam eleifend massa sit amet viverra tempus. Integer ultricies rutrum ligula quis luctus. Quisque turpis dui, convallis a tempor vitae, consectetur tempor risus. Aliquam a massa tortor."
                    },
                ]
            },
            {
            id: 3,
            author: {
                name: "Maria Fernanda",
                avatar: "https://thoughtcatalog.files.wordpress.com/2014/07/summer2017_23_00753.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all"
            },
            date: "05 Jun 2019",
            content: "Pellentesque et purus malesuada, egestas nisl nec, tincidunt eros. Integer gravida efficitur sapien ultricies egestas. Donec varius vitae turpis at placerat."
            },
            {
            id: 4,
            author: {
                name: "Roberto Júnior",
                avatar: "https://im.indiatimes.in/content/2017/Jan/card-image_carlacoulson_com_1483448746_1483448770.jpg"
            },
            date: "04 Jun 2019",
            content: "In ut ex sit amet dolor cursus volutpat. Nunc tristique posuere lacus, non ultricies massa hendrerit vel.",
            comments: [
                {
                id: 1,
                author: {
                    name: "Larissa Cristina",
                    avatar: "https://thoughtcatalog.files.wordpress.com/2014/07/summer2017_23_00753.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all"
                },
                content: "Integer gravida efficitur sapien ultricies egestas. Donec varius vitae turpis at placerat."
                },
                ]
            },
            {
            id: 5,
            author: {
                name: "Roberto Júnior",
                avatar: "https://im.indiatimes.in/content/2017/Jan/card-image_carlacoulson_com_1483448746_1483448770.jpg"
            },
            date: "08 Jun 2019",
            content: "In ut ex sit amet dolor cursus volutpat. Nunc tristique posuere lacus, non ultricies massa hendrerit vel. Mauris orci orci, molestie et pellentesque quis, porttitor eget elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt convallis lectus ac venenatis.",
            },
        ]
    }
    render(){
        return(
        <div id="post-list">
         { this.state.posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
        )
    }
}

export default PostList;


