/*
 *
 * Travel
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import Grid from "components/Grid";

export default class Travel extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Travel" meta={[ { name: 'description', content: 'Description of Travel' }]}/>
      <NavBar/>
      <Grid/>

      </div>
    );
  }
}
