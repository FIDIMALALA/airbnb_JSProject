import React, {Component} from 'react';
import '../Assets/Css/main.css';
import logementEntiers from '../Assets/Images/Logements-entiers.jpg';
import logementUniq from '../Assets/Images/Des-logements-uniques.jpg';
import cabanes from '../Assets/Images/Cabanes-et-cottages.jpg';
import animaux from '../Assets/Images/Animaux-de-compagnie-acceptés.jpg';
import univers from '../Assets/Images/votre-univers.jpg';
import experianceLing from '../Assets/Images/expériences-en-ligne.jpg';
import experiance from '../Assets/Images/expériences.jpg';
import aventure from '../Assets/Images/aventures.jpg';

class Main extends Component {
  constructor() {
    super();

    this.state = {
    };
  }


  render() {
      return (
        <main className="drl-container" >
          <div className="drl-main-content">
            <h1 className="main-content-title"> Chez vous, partout </h1>
            <div className="logement">
              <div className="logement-items row">
                <a href="#!">
                  <img src={logementEntiers} alt="Logements entiers"/>
                  <div className="logement-item-title"> Logements entiers </div>
                </a>
              </div>
              <div className="logement-items">
                <a href="#!">
                  <img src={logementUniq} alt="Logements entiers"/>
                  <div className="logement-item-title"> Des logements uniques </div>
                </a>
              </div>
              <div className="logement-items">
                <a href="#!">
                  <img src={cabanes} alt="Logements entiers"/>
                  <div className="logement-item-title"> Cabanes et cottages </div>
                </a>
              </div>
              <div className="logement-items">
                <a href="#!">
                  <img src={animaux} alt="Logements entiers"/>
                  <div className="logement-item-title"> Animaux de compagnie acceptés </div>
                </a>
              </div>
            </div>
            <div className="univers">
              <img className="univer-image" src={univers} alt="Votre univers mérite d'être partagé"/>
              <div className="univer-description">
                <h1 className="univer-description-title"> Votre univers mérite d'être partagé </h1>
                <div className="univer-description-texte"> Tirez parti d'un logement vacant ou d'une chambre inoccupée. </div>
                <div className="univer-description-bnt" > 
                  <button className="btn btn-large"> Devenir hôte </button> 
                </div>
              </div>
            </div>
          </div>
      </main>
      )
    }
}

export default Main;