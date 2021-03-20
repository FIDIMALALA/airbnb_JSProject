import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
          <footer class="page-footer grey lighten-4">
            <div class="container">
                <div className="row">
                    <div className="col s3">
                        <p className="black-text text-darken-2"><b>A PROPOS</b></p>
                         <p className="grey-text text-darken-2">Fonctionnement d'Airbnb</p>
                         <p className="grey-text text-darken-2">Newsroom</p>
                         <p className="grey-text text-darken-2">Investisseurs</p>
                         <p className="grey-text text-darken-2">Airbnb Plus</p>
                         <p className="grey-text text-darken-2">Airbnb Luxe</p>
                         <p className="grey-text text-darken-2">HotelTonight</p>
                         <p className="grey-text text-darken-2">Airbnb for Work</p>
                         <p className="grey-text text-darken-2">C'est possible, grâce aux hôtes</p>
                         <p className="grey-text text-darken-2">Jeux olympiques</p>
                         <p className="grey-text text-darken-2">Carrières</p>
                         <p className="grey-text text-darken-2">Lettre des fondateurs</p>   
                    </div>

                    <div className="col s3">
                        <p className="black-text text-darken-2"><b>COMMUNAUTE</b></p>
                        <p className="grey-text text-darken-2">Diversité et intégration</p>
                        <p className="grey-text text-darken-2">Accessibilité</p>
                        <p className="grey-text text-darken-2">Partenaires Airbnb</p>
                        <p className="grey-text text-darken-2">Logements d'urgence</p>
                        <p className="grey-text text-darken-2">Parrainage de voyageurs</p>
                        <p className="grey-text text-darken-2">Airbnb.org</p>
                    </div>

                    <div className="col s3">
                        <p className="black-text text-darken-2"><b>HOTE</b></p>
                        <p className="grey-text text-darken-2">Héberger des voyageurs</p>
                        <p className="grey-text text-darken-2">Organiser une expérience en ligne</p>
                        <p className="grey-text text-darken-2">Organiser une expérience</p>
                        <p className="grey-text text-darken-2">Accueil responsable</p>
                        <p className="grey-text text-darken-2">Centre de ressources</p>
                        <p className="grey-text text-darken-2">Community Center</p>
                    </div>

                    <div className="col s3">
                    <p className="black-text text-darken-2"><b>ASSISTANCE</b></p>
                    <p className="grey-text text-darken-2">Nos mesures face au COVID-19</p>
                    <p className="grey-text text-darken-2">Centre d'aide</p>
                    <p className="grey-text text-darken-2">Options d'annulation</p>
                    <p className="grey-text text-darken-2">Service d'aide aux voisins</p>
                    <p className="grey-text text-darken-2">Confiance et sécurité</p>

                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container black-text text-darken-2">
                    © 2021 Airbnb, Inc.
                    <a class="grey-text text-darken-2 right" href="o">Français (FR)</a>
                </div>
            </div>
          </footer>
        )
    }
}

export default Footer
