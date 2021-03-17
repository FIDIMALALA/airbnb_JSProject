import React, { Component, Fragment } from 'react'

export class Menu extends Component {
    
    render() {
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper black">
                        <a href="" className="left">airbnb</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="hide-on-med-and-down right">
                            <li><a href="">Places to stay</a></li>
                            <li><a href="">Experience</a></li>
                            <li><a href=""></a>Online Experiences</li>
                            <li><a href=""></a>Become a host</li>
                            <li><a className="btn waves-effect waves-light">Compte</a></li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Menu

