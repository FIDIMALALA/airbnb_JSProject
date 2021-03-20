import React, { Component } from 'react';
<<<<<<< HEAD
import facebook from '../Assets/Images/facebook.png';
import twitter from '../Assets/Images/twitter.jpg';
import instagram from '../Assets/Images/instagram.png';
=======
import {Link} from 'react-router-dom';
>>>>>>> f807792bdfeb2befd8007d87bc8dde3769e568cb

export class Footer extends Component {
    render() {
        return (
          <footer>
            <div className="footer-content">
              <div className="footer-widget row">
                  <div className="col s3 apropos">
                    <h6 className="footer-widget-title"> À PROPOS </h6>
                    <ul className="footer1-itms">
                        <li> <a href="#!"> Fonctionnement d'Airbnb </a> </li>
                        <li> <a href="#!"> Newsroom </a> </li>
                        <li> <a href="#!"> Investisseurs </a> </li>
                        <li> <a href="#!"> Airbnb Plus </a> </li>
                        <li> <a href="#!"> Airbnb Luxe </a> </li>
                        <li> <a href="#!"> HotelTonight </a> </li>
                        <li> <a href="#!"> Airbnb for Work </a> </li>
                        <li> <a href="#!"> C'est possible, grâce aux hôtes </a> </li>
                        <li> <a href="#!"> Jeux olympiques </a> </li>
                        <li> <a href="#!"> Carrières </a> </li>
                        <li> <a href="#!"> Lettre des fondateurs </a> </li>
                    </ul>
                  </div>
                  <div className="col s3 communaute">
                    <h6 className="footer-widget-title"> COMMUNAUTÉ </h6>
                    <ul className="footer1-itms">
                        <li> <a href="#!"> Diversité et intégration </a> </li>
                        <li> <a href="#!"> Lutte contre la discrimination </a> </li>
                        <li> <a href="#!"> Accessibilité </a> </li>
                        <li> <a href="#!"> Partenaires Airbnb </a> </li>
                        <li> <a href="#!"> Logements d'urgence </a> </li>
                        <li> <a href="#!"> Parrainage de voyageurs </a> </li>
                        <li> <a href="#!"> Cartes cadeaux </a> </li>
                        <li> <a href="#!"> Airbnb.org </a> </li>
                    </ul>
                  </div>
                  <div className="col s3 hote">
                    <h6 className="footer-widget-title"> HÔTE </h6>
                    <ul className="footer1-itms">
                        <li> <a href="#!"> Héberger des voyageurs </a> </li>
                        <li> <a href="#!"> Organiser une expérience en ligne </a> </li>
                        <li> <a href="#!"> Organiser une expérience </a> </li>
                        <li> <a href="#!"> Accueil responsable </a> </li>
                        <li> <a href="#!"> Centre de ressources  </a> </li>
                        <li> <a href="#!"> Community Center  </a> </li>
                    </ul>
                  </div>
                  <div className="col s3 assistance">
                    <h6 className="footer-widget-title"> ASSISTANCE </h6>
                    <ul className="footer1-itms">
                        <li> <a href="#!"> Nos mesures face au COVID-19 </a> </li>
                        <li> <a href="#!"> Centre d'aide </a> </li>
                        <li> <a href="#!"> Options d'annulation </a> </li>
                        <li> <a href="#!"> Service d'aide aux voisins </a> </li>
                        <li> <a href="#!"> Confiance et sécurité </a> </li>
                    </ul>
                  </div>
              </div>
              <div className="footer-end row">
                  <div className="footer-end-copie col s3">
                    © 2021 Airbnb, Inc. All rights reserved
                  </div>
                  <div className="footer-end-other col s6">
                    <ul>
                      <li> <a href="#!"> Confidentialité </a> </li>
                      <li> <a href="#!"> Conditions générales </a> </li>
                      <li> <a href="#!"> Plan du site </a> </li>
                      <li> <a href="#!"> Fonctionnement du site </a> </li>
                    </ul>
                  </div>
                  <div className="footer-end-social-link col s3">
                    <a href="#!" className="footer-end-langue"> <span><i className="material-icons"> language </i></span>  <span>Français</span>  </a>
                    <a href="#!" className="footer-end-devise" > <span>$</span>  <span> USD </span> </a>
                    <div className="media">
                      <a href="#!"> <img src= {facebook} alt="facebook"/> </a>
                      <a href="#!"> <img src= {twitter} alt="facebook"/> </a>
                      <a href="#!"> <img src= {instagram} alt="facebook"/> </a>
                    </div>  
                  </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer
