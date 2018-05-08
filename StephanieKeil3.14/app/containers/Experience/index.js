/*
 *
 * Experience
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';

export default class Experience extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Experience" meta={[ { name: 'description', content: 'Description of Experience' }]}/>
        <NavBar/>
        <div className="page">
          <p>Coming Soon...</p>
        </div>
      </div>
    );
  }
}
