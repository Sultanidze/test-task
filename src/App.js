import React, { Component } from 'react';
import {ReactComponent as MenuIcon}  from './assets/icons/menu.svg';
import {ReactComponent as CloseIcon}  from './assets/icons/close.svg';
import {ReactComponent as HomeIcon}  from './assets/icons/home.svg';
import {ReactComponent as SearchIcon}  from './assets/icons/search.svg';
import {ReactComponent as NotificationIcon}  from './assets/icons/notification.svg';
import {ReactComponent as SettingsIcon}  from './assets/icons/settings.svg';
import {ReactComponent as LocationIcon}  from './assets/icons/location.svg';
import {ReactComponent as Circle}  from './assets/icons/circle.svg';
import './assets/scss/App.scss';

class App extends Component {
  componentDidMount(){
    // IE11 forEach polyfill
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    // like jQuery parent
    Element.prototype.parent = function(selector) {
      var parent;
      var elem = this;
      var ishaveselector = selector !== undefined;
     
      while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
          continue;
        }
     
        if (!ishaveselector || elem.matches(selector)) {
          return parent;
        }
      }
    };

    const iconWrapperNodes = document.querySelectorAll('.icon__wrapper');
    iconWrapperNodes.forEach( item => item.addEventListener('click', function(e) {
      console.log(this);
    }))

    const menuNode = document.querySelector('.menu');
    const toggleMenuHandler = function(e) {
      if (menuNode.classList.toggle('opened')) {

      } 
      console.log('toggleMenu')
    }
    const menuToggleNode = document.querySelector('.menu__toggler');
    menuToggleNode.addEventListener('click', toggleMenuHandler)
  }
  render() {
    return (
      <div className="App">
        <div className="menu__wrapper">
          <nav className="menu">
            <div className="menu__toggler">
                <MenuIcon className="icon_item icon_burger" alt="menu" />
                <CloseIcon className="icon_item icon_close" alt="close" />
            </div>
            <ul className="list_menu">
              <li className="menu__item home">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_rotate">
                  <div className="wrapper_translate">
                    <div className="icon__wrapper">
                      <HomeIcon className="icon_item" alt="home" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item search">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_rotate">
                  <div className="wrapper_translate">
                    <div className="icon__wrapper">
                      <SearchIcon className="icon_item" alt="search" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item notification">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_rotate">
                  <div className="wrapper_translate">
                    <div className="icon__wrapper">
                      <NotificationIcon className="icon_item" alt="notification" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item settings">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_rotate">
                  <div className="wrapper_translate">
                    <div className="icon__wrapper">
                      <SettingsIcon className="icon_item" alt="settings" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item location">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_rotate">
                  <div className="wrapper_translate">
                    <div className="icon__wrapper">
                      <LocationIcon className="icon_item" alt="location" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
