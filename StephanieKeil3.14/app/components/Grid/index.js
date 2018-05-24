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
        images: ['Totemc.jpg', 'Jellyfishc.jpg', 'Nashuac.jpg', 'Gutheriec.jpg','Roadc.jpg', 'Ashevillec.jpg','Washingtonc.jpg',  'BlueRidgec.jpg',  'Lakec.jpg', 'Glassc.jpg',   'Ameliac.jpg','Crabc.jpg',    'Hikec.jpg','Mushroomc.jpg','PortStJoec.jpg', 'PortStJoeNaturec.jpg', 'Dukec.jpg', 'Vineyardc.jpg', 'Bridgec.jpg', 'Tybeec.jpg', 'CottonPressc.jpg'],
        isOpen: false,
        fImages: [
          { 'title': 'Worlds Tallest Totem Pole', 'fimage': require('../../containers/Images/Totem.jpg'), 'location': 'Foyil, OK' },
          { 'title': 'Monterey Bay Aquarium', 'fimage': require('../../containers/Images/Jellyfish.jpg'), 'location': 'Monterey, CA' },
          { 'title': 'Nashua River', 'fimage': require('../../containers/Images/Nashua.jpg'), 'location': 'Nashua, NH' },
          { 'title': 'Gutherie Theater', 'fimage': require('../../containers/Images/Gutherie.jpg'), 'location': 'Minneapolis, MN' },
          { 'title': '33°26\u002734.4\u0027N 82°13\u002742.1\u0027W', 'fimage': require('../../containers/Images/Road.jpg'), 'location': 'Grovetown, GA' },
          { 'title': 'Window Front', 'fimage': require('../../containers/Images/Asheville.jpg'), 'location': 'Asheville, NC' },
          { 'title': 'Washington Monument', 'fimage': require('../../containers/Images/Washington.jpg'), 'location': 'Washington D.C.' },
          { 'title': 'Tree 1367', 'fimage': require('../../containers/Images/BlueRidge.jpg'), 'location': 'Blue Ridge, GA' },
          { 'title': 'Lake Oconee', 'fimage': require('../../containers/Images/Lake.jpg'), 'location': 'Lake Oconee, GA' },
          { 'title': 'The Belagio', 'fimage': require('../../containers/Images/Glass.jpg'), 'location': 'Las Vegas, NV' },
          { 'title': 'Amelia Island Beach', 'fimage': require('../../containers/Images/Amelia.jpg'), 'location': 'Amelia Island, FL' },
          { 'title': 'Ghost Crab', 'fimage': require('../../containers/Images/Crab.jpg'), 'location': 'Port Saint Joe, FL' },
          { 'title': 'Stone Bridge - Boogerman Trail', 'fimage': require('../../containers/Images/Hike.jpg'), 'location': 'Waynesville, NC' },
          { 'title': 'Mistletoe State Park', 'fimage': require('../../containers/Images/Mushroom.jpg'), 'location': 'Appling, GA ' },
          { 'title': 'Indian Pass', 'fimage': require('../../containers/Images/PortStJoe.jpg'), 'location': 'Port Saint Joe, FL' },
          { 'title': 'T.H. Stone Memorial St. Joseph Penninsula State Park ', 'fimage': require('../../containers/Images/PortStJoeNature.jpg'), 'location': 'Port Saint Joe, FL' },
          { 'title': 'Duke Chapel', 'fimage': require('../../containers/Images/Duke.jpg'), 'location': 'Durham, NC' },
          { 'title': 'Round Barn Winery', 'fimage': require('../../containers/Images/Vineyard.jpg'), 'location': 'Baroda, MI' },
          { 'title': 'Tallulah Gorge State Park', 'fimage': require('../../containers/Images/Bridge.jpg'), 'location': 'Tallulah Falls, GA' },
          { 'title': 'Tybee Island Lighthouse', 'fimage': require('../../containers/Images/Tybee.jpg'), 'location': 'Tybee Island, GA' },
          { 'title': 'Worlds Oldest Cotton Press', 'fimage': require('../../containers/Images/CottonPress.jpg'), 'location': 'Latta, SC' }],
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


