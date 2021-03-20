import React, { Component} from 'react';
import ImageMap from '../Assets/Images/map.jpg';
import Calandar from './Canlandar'

export class BanniereRecherche extends Component {
    
  constructor(){
      super();
      this.state={
        affadresse: false,
        isOpenAdresse: false,
        isOpenVoyageur: false,
        adresseIsActive : "",
        voyageurIsActive : "",
        adresse: "",
        adultes : 0,
        enfants : 0,
        bebes : 0,
        totalVoyageur: 0,
        affVoyageur: "Qui ?"
      };
      this.textInput = React.createRef();

      this.toggleContainerAdresse = React.createRef();
      this.toggleContainerVoyageur = React.createRef();
      this.onClickHandlerAdresse = this.onClickHandlerAdresse.bind(this);
      this.onClickHandlerVoyageur = this.onClickHandlerVoyageur.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
    //execution du masquage /affichage 
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandlerAdresse(e) {
      e.preventDefault();
      this.setState(currentState => ({
        isOpenAdresse: !currentState.isOpenAdresse
      }));
      this.textInput.current.focus();
      this.setState({adresseIsActive: " drl-active"});
    }
    
    onClickHandlerVoyageur() {
      this.setState(currentState => ({
        isOpenVoyageur: !currentState.isOpenVoyageur
      }));
      this.setState({voyageurIsActive: " drl-active"});
    }

    onClickOutsideHandler(event) {
      if (this.state.isOpenAdresse && !this.toggleContainerAdresse.current.contains(event.target)) {
        this.setState({ isOpenAdresse: false, adresseIsActive: "" });
        
      }
      if (this.state.isOpenVoyageur && !this.toggleContainerVoyageur.current.contains(event.target)) {
        this.setState({ isOpenVoyageur: false, voyageurIsActive: "" });
      }
    }  
    
  incrementation(elemt){
    let totalVoyageur = this.state.totalVoyageur;
    if(elemt === "adultes"){
      this.setState({adultes: this.state.adultes+1});
      this.setState({totalVoyageur: totalVoyageur+1});
      if(totalVoyageur+1 > 1 && this.state.bebes <1){
        this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs" })
      }else if(totalVoyageur+1 === 1 && this.state.bebes < 1){
        this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs"})
      }else if(totalVoyageur+1 > 1 && this.state.bebes > 1){
        this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébés"})
      }else if(totalVoyageur+1 === 1 && this.state.bebes > 1) { 
        this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageur et "+ (this.state.bebes).toString() +" Bébés" }) 
      }else{
        this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébé" }) 
      }
      
    }
    if(elemt === "enfants"){
      if(this.state.adultes === 0){
        this.setState({enfants: this.state.enfants+1});
        this.setState({adultes : this.state.adultes+1});
        this.setState({totalVoyageur: totalVoyageur+2});
        this.setState({affVoyageur: (totalVoyageur+2).toString()+" Voyageurs" })
      }else{
        this.setState({enfants: this.state.enfants+1});
        this.setState({totalVoyageur: totalVoyageur+1});
        if(totalVoyageur+1 > 1 && this.state.bebes <1){
          this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs" })
        }else if(totalVoyageur+1 > 1 && this.state.bebes > 1){
          this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébés"})
        }else if(totalVoyageur+1 === 1 && this.state.bebes > 1) { 
          this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageur et "+ (this.state.bebes).toString() +" Bébés" }) 
        }else{
          this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébé" }) 
        }
      }
      
    }
    if(elemt === "bebes"){
      if(this.state.adultes === 0){
        this.setState({bebes: this.state.bebes+1});
        this.setState({adultes : this.state.adultes+1});
        this.setState({totalVoyageur: totalVoyageur+1});
        this.setState({affVoyageur: (totalVoyageur+1).toString()+" Voyageur et 1 Bébe" })
      }else{
        this.setState({bebes: this.state.bebes+1});
        if(totalVoyageur > 1 && this.state.bebes+1 > 1){
          this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageurs et "+ (this.state.bebes+1).toString() +" Bébés"})
        }else if(totalVoyageur == 1 && this.state.bebes+1 > 1) { 
          this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageur et "+ (this.state.bebes+1).toString() +" Bébés" }) 
        }else{
          this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageurs et "+ (this.state.bebes+1).toString() +" Bébé" }) 
        }
      }
    }
  
  }
 
  decrementation(elemt){
    let totalVoyageur = this.state.totalVoyageur;
    if(elemt === "adultes" && this.state.adultes >0){
      this.setState({adultes: this.state.adultes-1});
      this.setState({totalVoyageur: totalVoyageur-1});
      
      if(totalVoyageur-1 > 1 && this.state.bebes <1){
        this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageurs" })
      }else if(totalVoyageur-1 === 1 && this.state.bebes < 1){
        this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageur"})
      }else if(totalVoyageur-1 > 1 && this.state.bebes > 1){
        this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébés"});
      }else if(totalVoyageur-1 === 1 && this.state.bebes > 1) { 
        this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageur et "+ (this.state.bebes).toString() +" Bébés" }) ;
      }else if(totalVoyageur-1 > 1 && this.state.bebes === 1){
        this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébé" }); 
      }
      if(this.state.adultes-1 == 0){
        this.setState({totalVoyageur: 0});
        this.setState({affVoyageur: "Qui ?"});
        this.setState({enfants: 0});
        this.setState({bebes: 0});
      }
    }
    if(elemt === "enfants" && this.state.enfants >0){
      this.setState({enfants: this.state.enfants-1});
      //if(this.state.adultes > 1) {
        this.setState({totalVoyageur: totalVoyageur-1});
        if(totalVoyageur-1 > 1 && this.state.bebes <1){
          this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageurs" })
        }else if(totalVoyageur-1 === 1 && this.state.bebes < 1){
          this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageur"})
        }else if(totalVoyageur-1 > 1 && this.state.bebes > 1){
          this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébés"});
        }else if(totalVoyageur-1 === 1 && this.state.bebes > 1) { 
          this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageur et "+ (this.state.bebes).toString() +" Bébés" }) ;
        }else if(totalVoyageur-1 > 1 && this.state.bebes === 1){
          this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageurs et "+ (this.state.bebes).toString() +" Bébé" }); 
        }
      //}
    }
    if(elemt === "bebes" && this.state.bebes >0){
      this.setState({bebes: this.state.bebes-1});
      if(totalVoyageur > 1 && this.state.bebes-1 <1){
        this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageurs" })
      }else if(totalVoyageur === 1 && this.state.bebes-1 < 1){
        this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageur"})
      }else if(totalVoyageur > 1 && this.state.bebes-1 > 1){
        this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageurs et "+ (this.state.bebes-1).toString() +" Bébés"});
      }else if(totalVoyageur === 1 && this.state.bebes-1 > 1) { 
        this.setState({affVoyageur: (totalVoyageur-1).toString()+" Voyageur et "+ (this.state.bebes-1).toString() +" Bébés" }) ;
      }else if(totalVoyageur > 1 && this.state.bebes-1 === 1){
        this.setState({affVoyageur: (totalVoyageur).toString()+" Voyageurs et "+ (this.state.bebes-1).toString() +" Bébé" }); 
      }
    }
   
  }
  desabled(elt){
    if(elt === "adultes" && this.state.adultes <= 0){
      return "desactiv";
    } 
    if(elt === "enfants" && this.state.enfants <= 0){
      return "desactiv";
    }  
    if(elt === "bebes" && this.state.bebes <= 0){
      return "desactiv";
    }   
  }  
 
  adresse(){
      return(
          <div className="adresse-content">
              <div onClick={this.affAdresse.bind(this)} data-adresse="Découvrir des destinations à proximité" className="adresse-content-list">
                  <img src={ImageMap} alt="map" width="48px" height="48px"/>
                  <div> Découvrir des destinations à proximité </div>
              </div>
              <h6> ESCAPADES PRÈS DE CHEZ VOUS </h6>

          </div>
      )
  }  
  affAdresse(e){
    this.setState({adresse : e.currentTarget.dataset.adresse});
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
                      <span className={this.desabled('adultes')+" btn-floating btn-small"} onClick={()=>{this.decrementation("adultes")}}> - </span>
                      <span className="v-traitement-result"> {this.state.adultes} </span>
                      <span className="btn-floating btn-small"  onClick={()=>{this.incrementation("adultes")}}> + </span>
                  </div>
              </div>
              <hr></hr>
              <div className="voyageurs-content-list">
                  <div className="v-texte">
                      <span className="v-title"> Enfants </span><br/>
                      <span className="v-detail" > De 2 à 12 ans </span>
                  </div>
                  <div className="v-traitement"> 
                      <span className={this.desabled('enfants')+" btn-floating btn-small"} onClick={()=>{this.decrementation("enfants")}}> - </span>
                      <span className="v-traitement-result"> {this.state.enfants} </span>
                      <span className="btn-floating btn-small" onClick={()=>{this.incrementation("enfants")}} > + </span>
                  </div>
              </div>
              <hr></hr>
              <div className="voyageurs-content-list">
                  <div className="v-texte">
                      <span className="v-title"> Bébés </span><br/>
                      <span className="v-detail" > - de 2 ans </span>
                  </div>
                  <div className="v-traitement"> 
                      <span className={this.desabled('bebes')+" btn-floating btn-small"} onClick={()=>{this.decrementation("bebes")}}> - </span>
                      <span className="v-traitement-result"> {this.state.bebes} </span>
                      <span className="btn-floating btn-small" onClick={()=>{this.incrementation("bebes")}}> + </span>
                  </div>
              </div>
          </div>
      )
  }
  btnRecherche(){
    return(
      <div className="drl-last-list">
        <span className="drl-last-list-icon"><i className="material-icons">search</i></span> 
        <span className="drl-last-list-texte" > Rechercher </span>
      </div>
    )
  }

  itemHerbgmtMenu(){
    return(
      <div className="item-all-container">
        <div ref={this.toggleContainerAdresse}>
          <div onClick={this.onClickHandlerAdresse} className={"item-adress drl-herbgmt-liste"+this.state.adresseIsActive}>
            <div>adresse</div>
            <div>
                <input ref={this.textInput} type="text" placeholder="Où allez-vous ?" value={this.state.adresse} name="adresse" id="adresse" />
            </div>
            {this.state.isOpenAdresse &&(
            <div> {this.adresse()} </div>)}
          </div>
        </div>
        <div className="item-arrivee-depart drl-herbgmt-liste">
            <div className="drl-item-title" >
              <div id="drl_arrivee">Arrivée</div> 
              <div id="drl_depart">Départ</div> 
            </div>
            <div className="drl-item-content"> <Calandar /> </div>
        </div>
        <div ref={this.toggleContainerVoyageur} className={"item-voyageurs-search drl-herbgmt-liste"+this.state.voyageurIsActive}>
            <div className="drl-item-title-voyage" onClick={this.onClickHandlerVoyageur}>
                <div>voyageurs</div>
                <div className="text-input" id="vayageur"> {this.state.affVoyageur}  </div>
            </div>
            <div className="btn-recherche">
              <button className="btn btn-floating btn-large"> <i className="material-icons">search</i> </button>
            </div>
            {this.state.isOpenVoyageur && (
                <div> {this.voyageurs()} </div>
            )}
        </div>
      </div>
    )
  }

  render() {
    return (
      this.itemHerbgmtMenu()
    )
  }

}

export default BanniereRecherche ;