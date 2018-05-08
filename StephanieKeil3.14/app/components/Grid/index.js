/**
*
* Grid
*
*/

import React from 'react';
import Popup from "reactjs-popup";



import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {
  constructor() {
    super();
    this.state =
      {
        images: ['Totemc.jpg', 'Jellyfishc.jpg', 'Glassc.jpg', 'Lakec.jpg', 'Ashevillec.jpg', 'Washingtonc.jpg', 'BlueRidgec.jpg', 'Roadc.jpg', 'Crabc.jpg'],
        isOpen: false,
        fImages: [
          { 'title': 'Worlds Tallest Totem Pole', 'fimage': require('../../containers/Images/Totem.jpg'), 'location': 'Foyil, OK' },
          { 'title': 'Monterey Bay Aquarium', 'fimage': require('../../containers/Images/Jellyfish.jpg'), 'location': 'Monterey, CA' },
          { 'title': 'The Belagio', 'fimage': require('../../containers/Images/Glass.jpg'), 'location': 'Las Vegas, NV' },
          { 'title': 'Lake Oconee', 'fimage': require('../../containers/Images/Lake.jpg'), 'location': 'Lake Oconee, GA' },
          { 'title': 'Window Front', 'fimage': require('../../containers/Images/Asheville.jpg'), 'location': 'Asheville, NC' },
          { 'title': 'Washington Monument', 'fimage': require('../../containers/Images/Washington.jpg'), 'location': 'Washington D.C.' },
          { 'title': 'Tree 1367', 'fimage': require('../../containers/Images/BlueRidge.jpg'), 'location': 'Blue Ridge, GA' },
          { 'title': '33°26\u002734.4\u0027N 82°13\u002742.1\u0027W', 'fimage': require('../../containers/Images/Road.jpg'), 'location': 'Grovetown, GA' },
          { 'title': 'Ghost Crab', 'fimage': require('../../containers/Images/Crab.jpg'), 'location': 'Port Saint Joe, FL' }],
        modal: null,
      }


  }

  renderfImages = (x) => {
    this.setState({
      isOpen: true,
      modal:
        <div className="modalContent">
          <span className="close" onClick={this.closeModal}>X</span>
          <div className="content">
            <div className="infoTitle">{this.state.fImages[x].title}</div>
            <div className="location">{this.state.fImages[x].location}</div>
            <img className="fImageItem" src={this.state.fImages[x].fimage} />
          </div>
        </div>
    });
  }



  closeModal = () => {
    this.setState({ isOpen: false })
  }


  render() {

    return (

      // this builds the grid and runs through the image array//
      <div>
        {this.state.isOpen &&
          <div
            id="myModal"
            className="modal"
          >
            {this.state.modal}

          </div>}

        <div className="grid">
          {this.state.images.map((image, index) => (
            <div className="gridItem" key={index}>
              <img src={require('../../containers/Images/' + image)} className="gridImage" onClick={() => this.renderfImages(index)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}


