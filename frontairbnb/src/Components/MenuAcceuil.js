import React, {Component} from 'react';
import  Logosvg from './Logosvg';
import UserMenu from './UserMenu';

class MenuAcceuil extends Component {
constructor() {
  super();

  this.state = {
  };
}

listMenu(){
  return(
      <div className="drl-nav-menu-liste">
        <ul className="drl-nav-listes">
            <li className="drl-nav-item drl-active"> <div>Hébergements <span></span></div> </li>
            <li className="drl-nav-item"><div>Expériences <span></span></div> </li>
            <li className="drl-nav-item"><div><a href="#!">Expériences en ligne </a> <span></span></div> </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="drl-menu">
          <Logosvg />
          <div className="drl-form-menu">
            <form>
                {this.listMenu()}
            </form>
          </div>
          <UserMenu />
      </div>
    </div>
    )
  }
}

export default MenuAcceuil;