import React, { Component} from 'react';
import ImageMap from '../Assets/Images/map.jpg';
import ImageHeader from '../Assets/Images/imgbghead.webp';
import MenuAcceuil from './MenuAcceuil';
import '../Assets/Css/header.css'

export class Menu extends Component {
    
    constructor(){
        super();
        this.state={
          stateDate: null,
          endDate: null,
          affadresse: false,
          isOpen: false
        };
        this.textInput = React.createRef();

        this.toggleContainer = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);

        this.adultes = 0;
        this.enfants = 0;
        this.bebe = 0;
      }
      //execution du masquage /affichage 
      componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
      }
    
      componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
      }
    
      onClickHandler() {
        this.setState(currentState => ({
          isOpen: !currentState.isOpen
        }));
        this.textInput.current.focus();
      }
    
      onClickOutsideHandler(event) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
          this.setState({ isOpen: false });
        }
      }  

    adresse(){
        
        return(
            <div className="adresse-content">
                <div className="adresse-content-list">
                    <img src={ImageMap} alt="map" width="48px" height="48px"/>
                    <div> Découvrir des destinations à proximité </div>
                </div>
                <h6> ESCAPADES PRÈS DE CHEZ VOUS </h6>

            </div>
        )
    }  
    voyageurs(){
        return(
            <div className="voyageurs-content">
                <div className="voyageurs-content-list">
                    <div className="v-texte">
                        <span className="v-title"> Adultes </span><br/>
                        <span className="v-detail" > 13 ans et plus </span>
                    </div>
                    <div className="v-traitement"> 
                        <span class="btn-floating btn-small"> - </span>
                        <span> {this.adultes} </span>
                        <span class="btn-floating btn-small"> + </span>
                    </div>
                </div>
                <hr></hr>
                <div className="voyageurs-content-list">
                    <div className="v-texte">
                        <span className="v-title"> Enfants </span><br/>
                        <span className="v-detail" > De 2 à 12 ans </span>
                    </div>
                    <div className="v-traitement"> 
                        <span class="btn-floating btn-small"> - </span>
                        <span> {this.enfants} </span>
                        <span class="btn-floating btn-small"> + </span>
                    </div>
                </div>
                <hr></hr>
                <div className="voyageurs-content-list">
                    <div className="v-texte">
                        <span className="v-title"> Bébés </span><br/>
                        <span className="v-detail" > - de 2 ans </span>
                    </div>
                    <div className="v-traitement"> 
                        <span class="btn-floating btn-small"> - </span>
                        <span> {this.bebe} </span>
                        <span class="btn-floating btn-small"> + </span>
                    </div>
                </div>
            </div>
        )
    }
   
    searchMenu(){
    return(
        <div className="drl-menu-search btn"> 
            <span className="drl-search-text">Commencez votre recherche</span> 
            <span className="drl-search-icon"><i className="material-icons">search</i> </span>
        </div>
    )
    }
    itemHerbgmtMenu(){
    return(
        <div className="item-all-container">
            <div ref={this.toggleContainer} className="item-adress drl-herbgmt-liste drl-active">
                <div onClick={this.onClickHandler} >adresse</div>
                <div>
                    <input ref={this.textInput} type="text" placeholder="Où allez-vous ?" name="adresse" id="adresse" />
                </div>
                {this.state.isOpen &&(
                <div> {this.adresse()} </div>)}
            </div>
            <div className="item-arrivee-depart drl-herbgmt-liste">
                <div className="drl-item-title" >
                <div id="drl_arrivee">Arrivée</div> 
                <div id="drl_depart">Départ</div> 
                </div>
                <div className="drl-item-content">  </div>
            </div>
            <div ref={this.toggleContainer} className="item-voyageurs-search drl-herbgmt-liste">
                <div onClick={this.onClickHandler}>
                    <div>voyageurs</div>
                    <div className="text-input" id="vayageur"> Qui?  </div>
                </div>
                <div className="drl-last-list">
                    <span className="drl-last-list-icon"><i className="material-icons">search</i></span> 
                    <span className="drl-last-list-texte" > Rechercher </span>
                </div>
                {this.state.isOpen && (
                    <div> {this.voyageurs()} </div>
                )}
            </div>
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
                <div className="search-banner"> {this.itemHerbgmtMenu()} </div>
                <div className="img-intro"><img src={ImageHeader} alt=""/></div>
                <div className="header-slogan">
                    <span id="text-slogan">C'est possible, grâce aux hôtes</span>
                </div>
            </div>
            <p></p>
            <p></p>
        </header> 
        )
    }
}

export default Menu
