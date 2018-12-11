import React, { Component } from 'react';
import {ReactComponent as MenuIcon}  from './assets/icons/menu.svg';
import {ReactComponent as CloseIcon}  from './assets/icons/close.svg';
import {ReactComponent as HomeIcon}  from './assets/icons/home.svg';
import {ReactComponent as SearchIcon}  from './assets/icons/search.svg';
import {ReactComponent as NotificationIcon}  from './assets/icons/notification.svg';
import {ReactComponent as SettingsIcon}  from './assets/icons/settings.svg';
import {ReactComponent as LocationIcon}  from './assets/icons/location.svg';
import './assets/scss/App.scss';

class App extends Component {
  toggleMenu = () => {

  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        <div className="menu__wrapper">
          <nav className="menu">
            <div className="menu__item menu__toggle" onClick={this.toggleMenu}>
                <MenuIcon class="icon_menu icon_open" alt="menu" />
                <CloseIcon class="icon_menu icon_close" alt="close" />
            </div>
            <ul className="menu__list">
              <li className="menu__item menu__item_home">
                <HomeIcon class="icon_item" alt="home" />
              </li>
              <li className="menu__item menu__item_search">
                <SearchIcon class="icon_item" alt="search" />
              </li>
              <li className="menu__item menu__item_notification">
                <NotificationIcon class="icon_item" alt="notification" />
              </li>
              <li className="menu__item menu__item_settings">
                <SettingsIcon class="icon_item" alt="settings" />
              </li>
              <li className="menu__item menu__item_location">
                <LocationIcon class="icon_item" alt="location" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
