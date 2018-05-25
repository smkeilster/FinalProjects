/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import Slider from 'components/Slider';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[{ name: 'description', content: 'Description of Home' }]} />
        <NavBar />
        <Info />
        
      </div>
    );
  }
}

class Info extends React.PureComponent {

  render() {
    return (
      <div className="pageH">
        <div className="text1" > A Minnesota native currently located in Augusta, Georgia.
          I'm a Vegetable gardening enthusiast who is on a quest to visit all 50 states.
          
        </div>
        <Slider />
        <div className="text2">
          I have a background in advertising, primarily media planning, and recently joined the coding world. 
          After completing the Code Boot Camp at the Clubhou.se, I've uncovered my fondness for 
          database oranization and management. 
        </div>
      </div>
    );
  }
}