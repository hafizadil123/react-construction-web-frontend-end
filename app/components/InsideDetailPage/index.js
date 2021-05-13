import React from 'react';
import { Link } from 'react-router-dom';
import arrowImage from '../../assets/images/arrow.png';
import portfolioImage1 from '../../assets/images/portfolio-1.jpg';
import galaryImage1 from '../../assets/images/gallery-1.jpg';
import galaryImage2 from '../../assets/images/gallery-2.jpg';
import galaryImage3 from '../../assets/images/gallery-3.jpg';
import galaryImage4 from '../../assets/images/gallery-4.jpg';
const InsideDetailpage = () => (
  <section className="portfolio-summary">
    <div className="container">
      <div className="desc-container">
        <div className="back-btn">
          <button type="button">
            <img src={arrowImage} />
            <span>
              <Link to="/" style={{ color: 'black' }}>
                Back
              </Link>
            </span>
          </button>
        </div>
        <div className="portfolio-summary-row">
          <div className="main-img">
            <img className="img-cover" src={portfolioImage1} />
          </div>
          <div className="desc">
            <h3>Custom New Build</h3>
            <p>
              Experience and expertise to take you from concept to completion.
              Our business philosophy is simple: operate with transparency, hire
              good people and pay attention to the details.
            </p>
            <ul>
              <li>3,936 sq ft</li>
              <li>4 bedroom | 4 bath</li>
              <li>3,936 sq ft</li>
              <li>4 bedroom | 4 bath</li>
            </ul>
          </div>
        </div>
        <div className="row images-gallery">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage1} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage2} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage1} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage2} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage3} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage4} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage3} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="img-holder">
              <img className="img-cover" src={galaryImage4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InsideDetailpage;
