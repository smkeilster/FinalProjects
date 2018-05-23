/**
*
* NavBar
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';



import './style.css';
import './styleM.css';
import Bars from 'react-icons/lib/fa/bars';


export default class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    }
  }

  handleMenu = () => {
    if (this.state.menuOpen === true) {
      this.setState({
        menuOpen: false
      })
    }
    else if (this.state.menuOpen === false) {
      this.setState({
        menuOpen: true
      })
    }
  }

  renderMenu() {
    if (this.state.menuOpen === true) {
      return (
        <nav className="navMobile">
          <NavLink to="/Connect" activeClassName="selected" className="navButton">Connect</NavLink>
          <NavLink to="/Travel" activeClassName="selected" className="navButton">Travels</NavLink>
          <NavLink to="/Experience" activeClassName="selected" className="navButton">Experience</NavLink>
          <NavLink exact to="/" activeClassName="selected" className="navButton">Home</NavLink>
        </nav>
      )
    }
  }
  render() {
    return (
      <div className="topLayer">
        <div className="mStick">
          <div className="header"> Stephanie Keil</div>
          <div className="headerMobile"> SK</div>
          <div className="navbar">
            <nav className="nav">
              <NavLink to="/Connect" activeClassName="selected" className="navButton">Connect</NavLink>
              <NavLink to="/Travel" activeClassName="selected" className="navButton" >Travels</NavLink>
              <NavLink to="/Experience" activeClassName="selected" className="navButton" >Experience</NavLink>
              <NavLink exact to="/" activeClassName="selected" className="navButton">Home</NavLink>
            </nav>
            <Bars className="menuIcon" onClick={this.handleMenu} />
          </div>
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}
