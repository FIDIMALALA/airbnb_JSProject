import React, { Component, Fragment } from 'react';
import Menu from "./Menu";
import ImageHeader from '../Assets/Images/imgbghead.webp'
import '../Assets/Css/header.css'

class Header extends Component {
    render() {
        return (
            <>
            <Menu />
            <div className="header" style={{backgroundColor: "black"}}>
                <img src={ImageHeader} alt=""/>
                <div role="heading">
                    <span id="text-slogan">Made possible by host</span>
                </div>
            </div>
            </>

        )
    }
}

export default Header
