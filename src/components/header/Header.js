import React, { Component } from 'react';

import './Header.css'

class Header extends Component{
    render(){
        return (
            <header>
                    <a href="#home" id="home">Facebook</a>
                    <a href="#profile" id="profile">Profile</a>
            </header>
        )
    }
}

export default Header;