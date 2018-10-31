import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';

import AccountsUIWrapper from './AccountsUIWrapper.js';
//el login y sign up se pueden realizar personalizado con accounts, de esta forma ustedes podrian crear sus propios templates sin limitarse al que viene por defecto 
export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onChange: props.onChange
    };
  }
//la imagen del logo deberia ser mas grande
//con google fonts pueden explorar tipografias que den valor a lo que quieren transmitir 
  render() {
    return (
      <nav className="navbar sticky-top">
        <a className="letraBonita navbar-brand nav-link hvr-icon-grow" href="/">
          <img id="imgBrand" className="hvr-icon" src="/logo.svg" alt="brand"/>
          Knowie
        </a>
        <div className="row" id="">

          {!!Meteor.user() && (Meteor.user().username === 'Deportes' || Meteor.user().username === 'Decanatura' || Meteor.user().username === 'CTP' || Meteor.user().username === 'Uniandinos' || Meteor.user().username === 'ANDAR') ? <div className="col nav-item navbar-tab">
            <Link className="nav-link hvr-underline-from-center" to="/new">Crear Actividad</Link>
          </div> : ''}

          <div className="col nav-item navbar-tab" id="sign-in">
            <AccountsUIWrapper/>
          </div>
        </div>
      </nav>
    );
  }
}
