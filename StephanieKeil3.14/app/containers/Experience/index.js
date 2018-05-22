/*
 *
 * Connect
 *
 */

import React from 'react';
import Helmet from 'react-helmet'; import './style.css';
import './styleM.css';
import NavBar from 'components/NavBar';
import PageTop from 'components/PageTop';
export default class Experience extends React.PureComponent {

  render() {
    return (
      <div>
        <Helmet title="Experience" meta={[{ name: 'description', content: 'Description of Experience' }]} />
        <NavBar />
        <div className="page">
        <Resume/>
        <PageTop/>
        </div>
      </div>
    );
  }
}

class Resume extends React.PureComponent {
  render() {
    return (
      <div className="resume">
        <div className="section">
          <h2> Skills:</h2>
          <p>Microsoft Excel, PowerPoint, Keynote, HTML, CSS, JavaScript, PHP, MySQL, Google Cloud, PeopleSoft, Asana, DCM, Facebookfor Business, Twitter for Business and LinkedIn for Business</p>
        </div>
        <div className="section">
          <h2> Hobbies:</h2>
          <p>Vegetable gardening, Cooking, Hiking, Traveling, Cross country skiing and Running</p>
        </div>
        <div className="section">
          <h2>Education:</h2>
          <h3>The Clubhou.se with Augusta Technical College</h3>
          <h5>Spring 2018</h5>
          <p>Code Bootcamp program</p>
          <h3>University of Minnesota -	Curtis L. Carlson School of Management</h3>
          <h5>May 2011</h5>
          <p>Bachelor of Science in Business, Marketing & International Business</p>
          <h3>Université Jean Moulin Lyon III </h3>
          <h5>Spring 2010</h5>
          <p>S.E.L.F. (Study in English in Lyon, France) exchange program</p>
        </div>
        <div className="section">
          <h2>Experience:</h2>
          <h3>Freelancer</h3>
            <h5>February 2018-March 2018</h5>
            <ul>
              <li>Support media planning and buying efforts for Minneapolis based advertising agency</li>
            </ul>
          <h3>Media Supervisor - Social Media Specialist</h3>
            <h5>April 2013-February 2018</h5>
            <ul>
              <li>Develop strategic media plans for various B2B and B2C clients in numerous industries allocating over $1 million budget</li>
              <li>Oversee paid social media activity for the agency’s 10 principle clients</li>
              <li>Analyze campaign metrics to optimize KPIs and provide in flight adjustments to the client</li>
              <li>Media team excel guru, hold regliar tutorials on best practices</li>
              <li>Trained 13 media analysts and 2 media planners</li>
              <li>Became company’s first and only full-time remote employee January 2014, earned two promotions during this time</li>
            </ul>
            <h3>Business Coordinator II</h3>
            <h5>May 2011-April 2013</h5>
            <ul>
              <li>Placed and maintained all purchase orders for the Acorn Catalog, circulation 14 million, to ensure timely delivery to the warehouse</li>
              <li>Processed all personalized orders, managing relationships between vendors and customer service reps to guarantee fulfillment and customer satisfaction, average 150 per day</li>
              <li>Maintained weekly backorder report, contacted vendors to negotiate expedited delivery</li>
              <li>Media team excel guru, hold regliar tutorials on best practices</li>
              <li>Approved all invoices for payment, served as accounts payable contact</li>
              <li>Revived company’s culture committee, planned and coordinated outings and social events</li>
            </ul>  
        </div>
      </div>
    );
  }
}

