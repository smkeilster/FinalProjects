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
        images: ['Totemc.jpg', 'Jellyfishc.jpg', 'Glassc.jpg', 'Lakec.jpg', 'Ashevillec.jpg', 'Washingtonc.jpg', 'BlueRidgec.jpg', 'Roadc.jpg', 'Crabc.jpg', 'Ameliac.jpg', 'CottonPressc.jpg', 'Dukec.jpg', 'Hikec.jpg', 'PortStJoeNaturec.jpg', 'Mushroomc.jpg', 'PortStJoec.jpg', 'Vineyardc.jpg'],
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
          { 'title': 'Ghost Crab', 'fimage': require('../../containers/Images/Crab.jpg'), 'location': 'Port Saint Joe, FL' },
          { 'title': 'Amelia Island Beach', 'fimage': require('../../containers/Images/Amelia.jpg'), 'location': 'Amelia Island, FL' },
          { 'title': 'Worlds Oldest Cotton Press', 'fimage': require('../../containers/Images/CottonPress.jpg'), 'location': 'Latta, SC' },
          { 'title': 'Duke Chapel', 'fimage': require('../../containers/Images/Duke.jpg'), 'location': 'Durham, NC' },
          { 'title': 'Stone Bridge - Boogerman Trail', 'fimage': require('../../containers/Images/Hike.jpg'), 'location': 'Waynesville, NC' },
          { 'title': 'T.H. Stone Memorial St. Joseph Penninsula State Park ', 'fimage': require('../../containers/Images/PortStJoeNature.jpg'), 'location': 'Port Saint Joe, FL' },
          { 'title': 'Mistletoe State Park', 'fimage': require('../../containers/Images/Mushroom.jpg'), 'location': 'Appling, GA ' },
          { 'title': 'Indian Pass', 'fimage': require('../../containers/Images/PortStJoe.jpg'), 'location': 'Port Saint Joe, FL' },
          { 'title': 'Round Barn Winery', 'fimage': require('../../containers/Images/Vineyard.jpg'), 'location': 'Baroda, MI' }],
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
            <div className="imageItem">
              <img className="fImage" src={this.state.fImages[x].fimage} />
            </div>
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
          <div id="myModal" className="modal">
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


