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
              <div className="univer-description">
                <h1 className="univer-description-title"> Votre univers mérite d'être partagé </h1>
                <div className="univer-description-texte"> Tirez parti d'un logement vacant ou d'une chambre inoccupée. </div>
                <div className="univer-description-bnt" > 
                  <button className="btn btn-large"> Devenir hôte </button> 
                </div>
              </div>
              <div className="univer-content-image">
                <img className="univer-image" src={univers} alt="Votre univers mérite d'être partagé"/>
              </div>
            </div>
            <div className="decouverte">
              <h1 className="main-content-title"> Découvrez le monde </h1>
              <div className="decouverte-description">
                Des activités uniques organisées par des experts locaux, en personne ou en ligne.
              </div>
              <div className="decouverte-content">
                <div className="decouverte-content-items row">
                  <div className="decouverte-item">
                    <a href="#!">
                      <img className="decouverte-item-image" src={experianceLing} alt="Expériences en ligne"/>
                      <div className="decouverte-item-title"> Expériences en ligne </div>
                      <div className="decouverte-item-texte"> Parcourez le monde sans sortir de chez vous. </div>
                    </a>
                  </div>
                  <div className="decouverte-item">
                    <a href="#!">
                      <img className="decouverte-item-image" src={experiance} alt="Expériences"/>
                      <div className="decouverte-item-title"> Expériences </div>
                      <div className="decouverte-item-texte"> Prenez part à des activités, où que vous soyez. </div>
                    </a>
                  </div>
                  <div className="decouverte-item">
                    <a href="#!">
                      <img className="decouverte-item-image" src={aventure} alt="Aventures"/>
                      <div className="decouverte-item-title"> Aventures </div>
                      <div className="decouverte-item-texte"> Partez pour un voyage de plusieurs jours, repas et logement compris. </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
      )
    }
}

export default Main;