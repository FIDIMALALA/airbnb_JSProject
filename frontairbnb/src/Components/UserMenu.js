import React, {Component} from 'react';
/**
 * 
 */
class UserMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpenUser: false
    };
    this.toggleContainerUser = React.createRef();
    this.onClickHandlerUser = this.onClickHandlerUser.bind(this);
    this.onClickOutsideHandlerUser = this.onClickOutsideHandlerUser.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandlerUser);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandlerUser);
  }

  onClickHandlerUser() {
    this.setState(currentState => ({
      isOpenUser: !currentState.isOpenUser
    }));
  }
  onClickOutsideHandlerUser(event) {
    if (this.state.isOpenUser && !this.toggleContainerUser.current.contains(event.target)) {
      this.setState({ isOpenUser: false});
    }
  }
  language(){
    //style={{position : 'relative'}}
    //style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', stroke-width: '3', overflow: 'visible'}}
    return(
    <div className="laguage-modal">
      <div className="content-language" >
        <div className="close-language"><button className="btn btn-small">x</button></div>
        <div className="_qcfp0r">
        <div className="langue-region">
          <div  className="_1ta63mdq"><span className="_1hixhjjv">Langue et région</span></div>
          <div  className="_1ta63mdq"><span className="_1ezr7jp">Devise</span></div>
        </div>
        <section>
          <div className="language-sugget">
            <div className="_osmab1">
              <h5 tabindex="-1" className="_14i3z6h">Langue et région suggérée</h5>
            </div>
            <div>English</div>
            <div className="_a7a5sx">United States</div>
          </div>
        </section>
        <section>
            <div className="_1oowfvr"><div className="_osmab1"><h5 className="_14i3z6h">Choisissez une langue et une région</h5></div><ul className="drl-liste-laguage"><li><a className="_uhhvxco"  href="#!"><div>Français</div><div className="_a7a5sx">France</div></a></li><li><a href="#!"><div>Azərbaycan dili</div><div className="_a7a5sx">Azərbaycan</div></a></li><li><a href="#!"><div>Bahasa Indonesia</div><div className="_a7a5sx">Indonesia</div></a></li><li><a href="#!"><div>Bosanski</div><div className="_a7a5sx">Bosna i Hercegovina</div></a></li><li><a href="#!"><div>Català</div><div className="_a7a5sx">Espanya</div></a></li><li><a href="#!"><div>Čeština</div><div className="_a7a5sx">Česká republika</div></a></li><li><a href="#!"><div>Crnogorski</div><div className="_a7a5sx">Crna Gora</div></a></li><li><a href="#!"><div>Dansk</div><div className="_a7a5sx">Danmark</div></a></li><li><a href="#!"><div>Deutsch</div><div className="_a7a5sx">Deutschland</div></a></li><li><a href="#=AT"><div>Deutsch</div><div className="_a7a5sx">Österreich</div></a></li><li><a href="#!"><div>Deutsch</div><div className="_a7a5sx">Schweiz</div></a></li><li><a href="#!"><div>Eesti</div><div className="_a7a5sx">Eesti</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">Australia</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">Canada</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">Guyana</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">India</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">Ireland</div></a></li><li><a href="#=NZ"><div>English</div><div className="_a7a5sx">New Zealand</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">Singapore</div></a></li><li><a href="#!"><div>English</div><div className="_a7a5sx">United Arab Emirates</div></a></li><li><a href="#=GB"><div>English</div><div className="_a7a5sx">United Kingdom</div></a></li><li><a href="#!"><div>Español</div><div className="_a7a5sx">Argentina</div></a></li><li><a href="#=BZ"><div>Español</div><div className="_a7a5sx">Belice</div></a></li><li><a href="#!"><div>Español</div><div className="_a7a5sx">Bolivia</div></a></li><li><a href="#=CL"><div>Español</div><div className="_a7a5sx">Chile</div></a></li><li><a href="#!"><div>Español</div><div className="_a7a5sx">Colombia</div></a></li><li><a href="#=CR"><div>Español</div><div className="_a7a5sx">Costa Rica</div></a></li><li><a href="#!"><div>Español</div><div className="_a7a5sx">Ecuador</div></a></li><li><a href="#=SV"><div>Español</div><div className="_a7a5sx">El Salvador</div></a></li><li><a href="#!"><div>Español</div><div className="_a7a5sx">España</div></a></li><li><a href="#e=US"><div>Español</div><div className="_a7a5sx">Estados Unidos</div></a></li><li><a href="#=GT"><div>Español</div><div className="_a7a5sx">Guatemala</div></a></li><li><a href="#=HN"><div>Español</div><div className="_a7a5sx">Honduras</div></a></li><li><a href="#=CO"><div>Español</div><div className="_a7a5sx">Latinoamérica</div></a></li><li><a href="#e=MX"><div>Español</div><div className="_a7a5sx">México</div></a></li><li><a href="#!"><div>Español</div><div className="_a7a5sx">Nicaragua</div></a></li><li><a href="#=PA"><div>Español</div><div className="_a7a5sx">Panamá</div></a></li><li><a href="#=PY"><div>Español</div><div className="_a7a5sx">Paraguay</div></a></li><li><a href="#=PE"><div>Español</div><div className="_a7a5sx">Perú</div></a></li><li><a href="#=VE"><div>Español</div><div className="_a7a5sx">Venezuela</div></a></li><li><a href="#=BE"><div>Français</div><div className="_a7a5sx">Belgique</div></a></li><li><a href="#=CA"><div>Français</div><div className="_a7a5sx">Canada</div></a></li><li><a href="#=CH"><div>Français</div><div className="_a7a5sx">Suisse</div></a></li><li><a href="#!"><div>Gaeilge</div><div className="_a7a5sx">Éire</div></a></li><li><a href="#!"><div>Hrvatski</div><div className="_a7a5sx">Hrvatska</div></a></li><li><a href="#!"><div>isiXhosa</div><div className="_a7a5sx">eMzantsi Afrika</div></a></li><li><a href="#!"><div>isiZulu</div><div className="_a7a5sx">iNingizimu Afrika</div></a></li><li><a href="#!"><div>Íslenska</div><div className="_a7a5sx">Ísland</div></a></li><li><a href="#!"><div>Italiano</div><div className="_a7a5sx">Italia</div></a></li><li><a href="#=CH"><div>Italiano</div><div className="_a7a5sx">Svizzera</div></a></li><li><a href="#!"><div>Kiswahili</div><div className="_a7a5sx">Āfrika</div></a></li><li><a href="#!"><div>Latviešu</div><div className="_a7a5sx">Latvija</div></a></li><li><a href="#!"><div>Lietuvių</div><div className="_a7a5sx">Lietuva</div></a></li><li><a href="#!"><div>Magyar</div><div className="_a7a5sx">Magyarország</div></a></li><li><a href="#!"><div>Malti</div><div className="_a7a5sx">Malta</div></a></li><li><a href="#!"><div>Melayu</div><div className="_a7a5sx">Malaysia</div></a></li><li><a href="#=BE"><div>Nederlands</div><div className="_a7a5sx">België</div></a></li><li><a href="#!"><div>Nederlands</div><div className="_a7a5sx">Nederland</div></a></li><li><a href="#!"><div>Norsk</div><div className="_a7a5sx">Norge</div></a></li><li><a href="#!"><div>Polski</div><div className="_a7a5sx">Polska</div></a></li><li><a href="#!"><div>Português</div><div className="_a7a5sx">Brasil</div></a></li><li><a href="#=PT"><div>Português</div><div className="_a7a5sx">Portugal</div></a></li><li><a href="#!"><div>Română</div><div className="_a7a5sx">România</div></a></li><li><a href="#!"><div>Shqip</div><div className="_a7a5sx">Shqipëri</div></a></li><li><a href="#!"><div>Slovenčina</div><div className="_a7a5sx">Slovensko</div></a></li><li><a href="#!"><div>Slovenščina</div><div className="_a7a5sx">Slovenija</div></a></li><li><a href="#!"><div>Srpski</div><div className="_a7a5sx">Srbija</div></a></li><li><a href="#!"><div>Suomi</div><div className="_a7a5sx">Suomi</div></a></li><li><a href="#!"><div>Svenska</div><div className="_a7a5sx">Sverige</div></a></li><li><a href="#!"><div>Tagalog</div><div className="_a7a5sx">Pilipinas</div></a></li><li><a href="#!"><div>Tiếng Việt</div><div className="_a7a5sx">Việt Nam</div></a></li><li><a href="#!"><div>Türkçe</div><div className="_a7a5sx">Türkiye</div></a></li><li><a href="#!"><div>Ελληνικά</div><div className="_a7a5sx">Ελλάδα</div></a></li><li><a href="#!"><div>Български</div><div className="_a7a5sx">България</div></a></li><li><a href="#!"><div>Македонски</div><div className="_a7a5sx">Северна Македонија</div></a></li><li><a href="#!"><div>Русский</div><div className="_a7a5sx">Россия</div></a></li><li><a href="#!"><div>Українська</div><div className="_a7a5sx">Україна</div></a></li><li><a href="#!"><div>ქართული</div><div className="_a7a5sx">საქართველო</div></a></li><li><a href="#!"><div>Հայերեն</div><div className="_a7a5sx">Հայաստան</div></a></li><li><a href="#!"><div>עברית</div><div className="_a7a5sx">ישראל</div></a></li><li><a href="#!"><div>العربية</div><div className="_a7a5sx">العالم</div></a></li><li><a href="#!"><div>हिन्दी</div><div className="_a7a5sx">भारत</div></a></li><li><a href="#!"><div>ไทย</div><div className="_a7a5sx">ประเทศไทย</div></a></li><li><a href="#!"><div>한국어</div><div className="_a7a5sx">대한민국</div></a></li><li><a href="#!"><div>日本語</div><div className="_a7a5sx">日本</div></a></li><li><a href="#!"><div>简体中文</div><div className="_a7a5sx">美国</div></a></li><li><a href="#=US"><div>繁體中文</div><div className="_a7a5sx">美國</div></a></li><li><a href="#!"><div>简体中文</div><div className="_a7a5sx">中国</div></a></li><li><a href="#=HK"><div>繁體中文</div><div className="_a7a5sx">香港</div></a></li><li><a href="#=TW"><div>繁體中文</div><div className="_a7a5sx">台灣</div></a></li></ul></div>
        </section>
        </div>
      </div>
    </div>  
    )
  }
  userItems(){
    return(
    <div className="drl-user-items">
      <a className="user-item" href="#!"> Inscription </a>
      <a className="user-item" href="#!"> Connexion </a> 
      <div className="hr"></div>
      <a className="user-item" href="#!"> Héberger des voyageurs </a>
      <a className="user-item" href="#!"> Créér une expérience </a>
       <a className="user-item" href="#!"> Aide </a>
    </div>
   ) 
  }
  render() {
    return(
      <div className="drl-menu-right-item d-flex">
        <a className="menu-right-item-a" href="#!" > <span>Devenez hôte</span> </a>
        <i className="menu-right-item-i material-icons right"> language </i>
        <div className="menu-right-user" ref={this.toggleContainerUser}>
          <div onClick={this.onClickHandlerUser} type="button" className="drl-btn-user btn" >
            <i className="material-icons drl-first" >dehaze</i>
            <i className="material-icons" >account_circle</i>
          </div>
          {this.state.isOpenUser && ( 
            <div>{this.userItems()}</div>
          )}
        </div>
        {/* <di>{this.language()}</di> */}
      </div>
    )
  }
}


export default UserMenu;