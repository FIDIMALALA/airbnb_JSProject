import React, { Component } from 'react';
import imageCard from '../Assets/Images/imageHome.jpg';
import Header from './Header';
import Main from './Main';

export class Accueil extends Component {
    render() {
        return (
          <div>
            <Header />
            <Main />
          </div>
        )
    }
}

export default Accueil
