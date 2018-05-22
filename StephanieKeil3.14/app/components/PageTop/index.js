/**
*
* PageTop
*
*/

import React from 'react';

import './style.css';
import './styleM.css';
import Arrow from 'react-icons/lib/fa/arrow-circle-o-up';

export default class PageTop extends React.PureComponent {


  render() {
    return (
      <div className="arrowLocation" id="arrow">
        <a href="#top">
        <Arrow className="arrow"/>
        </a>
      </div>
    );
  }
}
