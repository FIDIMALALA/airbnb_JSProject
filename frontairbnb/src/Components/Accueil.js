import React, { Component } from 'react';
import imageCard from '../Assets/Images/imageHome.jpg'

export class Accueil extends Component {
    render() {
        return (
          <div className="container">
            <div className="card">
              <div className="card-image">
                <img src={imageCard} alt="sary"/>
                <span className="card-title">AirBnB Tech JS</span>
              </div>

              <div className="card-time">
                <p>Salut les amis, bienvenu sur notre plateforme de developpement de AirBnB</p>
                <p>Bon developpement ;)</p>
                <ol>
                  <li>Sidonie</li>
                  <li>Lionel</li>
                  <li>Hery</li>
                  <li>Thierry</li>
                  De:
                  <li>Iangolana</li>
                </ol>
              </div>
            </div>
          </div>  
        )
    }
}

export default Accueil
