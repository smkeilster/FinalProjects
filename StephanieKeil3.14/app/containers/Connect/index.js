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
        <NavBar />
        <div className="pageC">
          <div className="me">
            <div className="pictureFrame">
              <img width="299" height="450" src={require('../Images/SK.jpg')} alt={"Stephanie Keil"} className="image" />
            </div>
            <p className="connect"> Let's get in touch. <a href="http://www.linkedin.com/in/keilstephanie/"> LinkedIn</a> messages work best.</p>{"\n"}
            <div className="logoFrame">
              <a href="http://www.linkedin.com/in/keilstephanie/">
                <img className="logo" src={require('../Images/linkedin.png')} />
              </a>
              <a href="http://github.com/smkeilster">
                <img className="logo" src={require('../Images/gitHub.png')} />
              </a>
            </div>
          </div>

          {/* <div className="contact">
            <form action="">
            <label>Name:</label>
            <input type="text" className="field" />
            <label>Email:</label>
            <input type="text" className="field" />
            <label>Message:</label>
            <textarea type="text" className="field"> </textarea>
            <input type="submit" value="Submit"/>
            </form>
          </div> */}
        </div>
      </div>
    );
  }
}
