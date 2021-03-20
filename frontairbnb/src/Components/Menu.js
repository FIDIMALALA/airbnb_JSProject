import React, { Component} from 'react';
import ImageHeader from '../Assets/Images/imgbghead.webp';
import MenuAcceuil from './MenuAcceuil';
import BanniereRecherche from './BanniereRecherche';
import '../Assets/Css/header.css';

export class Menu extends Component {
    
    constructor(){
        super();
        this.state={
         
        };
        
      }
   
    searchMenu(){
    return(
        <div className="drl-menu-search btn"> 
            <span className="drl-search-text">Commencez votre recherche</span> 
            <span className="drl-search-icon"><i className="material-icons">search</i> </span>
        </div>
    )
    }
   
    
    render() {
        return (
        <header>
            <div className="drl-header-banner" style={{backgroundColor: "black"}}>
                <div className="infocovid"> 
                    <a href="https://fr.airbnb.com/covid-traveler" >Accédez aux dernières informations sur les mesures prises par Airbnb face au COVID-19</a> 
                </div>
                <div className="drl-navbar-fixed">
                    <MenuAcceuil />
                </div>
                <div className="search-banner"> <BanniereRecherche /> </div>
                <div className="img-intro"><img src={ImageHeader} alt=""/></div>
                <div className="header-slogan">
                    <span id="text-slogan">C'est possible, grâce aux hôtes</span>
                </div>
            </div>
        </header> 
        )
    }
}

export default Menu
