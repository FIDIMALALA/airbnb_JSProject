import React, {Component} from 'react';
import '../Assets/Css/main.css';
import logementEntiers from '../Assets/Images/Logements-entiers.jpg';
import logementUniq from '../Assets/Images/Des-logements-uniques.jpg';
import cabanes from '../Assets/Images/Cabanes-et-cottages.jpg';
import animaux from '../Assets/Images/Animaux-de-compagnie-acceptés.jpg';

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
              <img src={} alt="Votre univers mérite d'être partagé"/>
            </div>
          </div>
      </main>
      )
    }
}

export default Main;