/*
 *
 * Connect
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';

export default class Connect extends React.PureComponent {

  // storeTask = () => {
  //   let data = new FormData();
  //   data.append()
  // }

  render() {
    return (
      <div >
        <Helmet title="Connect" meta={[{ name: 'description', content: 'Description of Connect' }]} />
        <NavBar/>
        <div className="page">
          <div className="me">
            <img src={require('../Images/SK.jpg')} alt={"Stephanie Keil"} className="image" />
            <div className="logos">
            <a href="https://www.linkedin.com/in/keilstephanie/">
            <img src={require('../Images/linkedin.png')} />
            </a>
            <a href="https://github.com/smkeilster">
            <img src={require('../Images/gitHub.png')} />
            </a>
            </div>
          </div>
          <div className="contact">
            <form action="">
            <label>Name:</label>
            <input type="text" className="field" />
            <label>Email:</label>
            <input type="text" className="field" />
            <label>Message:</label>
            <textarea type="text" className="field"> </textarea>
            <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
