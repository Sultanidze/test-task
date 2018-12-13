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
    };

    const menuNode = document.querySelector('.menu');
    const menuToggleNode = menuNode.querySelector('.menu__toggler');
    const iconWrapperNodes = menuNode.querySelectorAll('.icon__wrapper');
    const menuItemNodes = menuNode.querySelectorAll('.menu__item');

    const itemClickHandler = function(e) {
      const menuItem = this.customParent('.menu__item')
      console.log(menuItem)
      menuItemNodes.forEach( item => item.classList.remove('active'))
      menuNode.classList.add('animated')
      menuItem.classList.add('active')
      const circleNode = menuItem.querySelector('.icon_circle')
      
      const animationCallback = function(){
        menuNode.classList.remove('animated')
        menuItem.classList.remove('active')
        circleNode.removeEventListener("animationend", animationCallback)
        console.log("circle animationend");
      }
      circleNode.addEventListener("animationend", animationCallback)
    }
    iconWrapperNodes.forEach( item => item.addEventListener('click', itemClickHandler))

    const togglerAnimationEndHandler = function(e){
      menuToggleNode.classList.remove('closing');
      console.log("togglerAnimationEndHandler")
      
      menuToggleNode.removeEventListener('animationend', togglerAnimationEndHandler);
    }
    const togglerTransitionendEndHandler = function(e){
      if (e.target !== menuToggleNode) return;
      console.log("togglerTransitionendEndHandler")
      menuNode.classList.remove('closing', 'opened');
      // menuNode.classList.add('closed');
      menuToggleNode.removeEventListener('transitionend', togglerTransitionendEndHandler);
    }
    const toggleMenuHandler = function(e) {
      if (menuNode.classList.contains('opened')) {
        // menuNode.classList.remove('closing', 'opened'); // temp, without animation
        menuToggleNode.addEventListener('transitionend', togglerTransitionendEndHandler);
        menuToggleNode.addEventListener('animationend', togglerAnimationEndHandler);
        menuToggleNode.classList.add('closing');
      } else {
        menuNode.classList.add('opened');
        console.log("added 'opened'")
        // console.log("removed 'opened'")
      }
    }
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
