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

// https://github.com/Ramotion/circle-menu replica
class App extends Component {
  componentDidMount(){
    // IE11 forEach polyfill
    // if (window.NodeList && !NodeList.prototype.forEach) {
    //   NodeList.prototype.forEach = Array.prototype.forEach;
    // }

    // like jQuery parent
    Element.prototype.customParent = function(selector) {
      var elem = this;
      var ishaveselector = selector !== undefined;
     
      while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
          continue;
        }
     
        if (!ishaveselector || elem.matches(selector)) {
          return elem;
        }
      }
    }

    const menuNode = document.querySelector('.menu');
    const menuToggleNode = menuNode.querySelector('.menu__toggler');
    const iconWrapperNodes = menuNode.querySelectorAll('.icon__wrapper');
    const menuItemNodes = menuNode.querySelectorAll('.menu__item');

    const togglerTransitionendEndHandler = function(e){
      if (e.target !== menuToggleNode) return;
      menuToggleNode.classList.remove('disabled', 'state_close');
      menuToggleNode.classList.add('enabled', 'state_open');
      menuToggleNode.removeEventListener('transitionend', togglerTransitionendEndHandler);
    }
    const toggleMenuHandler = function(e) {
      if (menuToggleNode.classList.contains('disabled') || menuNode.classList.contains('animated')) return;
      if (menuNode.classList.contains('opened')) {
        menuToggleNode.classList.remove('enabled');
        menuToggleNode.classList.add('disabled');
        menuNode.classList.remove('opened');
        menuToggleNode.addEventListener('transitionend', togglerTransitionendEndHandler);
      } else {
        menuNode.classList.remove('closed');
        menuNode.classList.add('opened');
        menuToggleNode.classList.remove('state_open');
        menuToggleNode.classList.add('state_close');
      }
    }
    menuToggleNode.addEventListener('click', toggleMenuHandler)

    const itemClickHandler = function(e) {
      if (menuNode.classList.contains('animated')) return;
      menuNode.classList.add('animated')
      menuToggleNode.classList.remove('enabled');
      menuToggleNode.classList.add('disabled');

      const hideUnactive = function(){
        menuToggleNode.classList.remove('disabled', 'state_close');
        menuToggleNode.classList.add('enabled', 'state_open');
        menuNode.classList.add('animated_end')
        menuToggleNode.removeEventListener('transitionend', hideUnactive);
      }
      menuToggleNode.addEventListener('transitionend', hideUnactive);

      menuItemNodes.forEach( item => item.classList.remove('active'))

      const menuItem = this.customParent('.menu__item')
      menuItem.classList.add('active')

      const circleNode = menuItem.querySelector('.icon_circle')
      const circleAnimEndHandler = function(){
        menuNode.classList.add('closed')
        menuNode.classList.remove('opened')
        menuItem.classList.remove('active')
        menuNode.classList.remove('animated', 'animated_end')
        circleNode.removeEventListener('animationend', circleAnimEndHandler)
      }
      circleNode.addEventListener('animationend', circleAnimEndHandler)
    }
    iconWrapperNodes.forEach( item => item.addEventListener('click', itemClickHandler))
  }
  render() {
    return (
      <div className="App">
        <div className="menu__wrapper">
          <nav className="menu">
            <div className="menu__toggler enabled state_open">
                <MenuIcon className="icon_item icon_burger" alt="menu" />
                <CloseIcon className="icon_item icon_close" alt="close" />
            </div>
            <ul className="list_menu">
              <li className="menu__item home">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_animated">
                  <div className="wrapper_rotate">
                    <div className="wrapper_translate">
                      <div className="icon__wrapper">
                        <HomeIcon className="icon_item" alt="home" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item search">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_animated">
                  <div className="wrapper_rotate">
                    <div className="wrapper_translate">
                      <div className="icon__wrapper">
                        <SearchIcon className="icon_item" alt="search" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item notification">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_animated">
                  <div className="wrapper_rotate">
                    <div className="wrapper_translate">
                      <div className="icon__wrapper">
                        <NotificationIcon className="icon_item" alt="notification" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item settings">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_animated">
                  <div className="wrapper_rotate">
                    <div className="wrapper_translate">
                      <div className="icon__wrapper">
                        <SettingsIcon className="icon_item" alt="settings" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu__item location">
                <div className="circle__wrapper wrapper_rotate">
                  <Circle className="icon_circle" />
                </div>
                <div className="wrapper_animated">
                  <div className="wrapper_rotate">
                    <div className="wrapper_translate">
                      <div className="icon__wrapper">
                        <LocationIcon className="icon_item" alt="location" />
                      </div>
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
