/**
 *
 * DetailPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import logo from '../../assets/images/logo1.png';
import bluePhone from '../../assets/images/phone-blue.png';
import arrowImage from '../../assets/images/arrow.png';
import portfolioImage1 from '../../assets/images/portfolio-1.jpg';
import portfolioImage2 from '../../assets/images/portfolio-2.jpg';
import portfolioImage3 from '../../assets/images/portfolio-3.jpg';
import galaryImage1 from '../../assets/images/gallery-1.jpg';
import galaryImage2 from '../../assets/images/gallery-2.jpg';
import galaryImage3 from '../../assets/images/gallery-3.jpg';
import galaryImage4 from '../../assets/images/gallery-4.jpg';
export function DetailPage() {
  useInjectReducer({ key: 'detailPage', reducer });
  useInjectSaga({ key: 'detailPage', saga });
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div>
      <Helmet>
        <title>DetailPage</title>
        <meta name="description" content="Description of DetailPage" />
      </Helmet>
   <div id="wrapper">
  <header className="header header-portfolio">
    <nav>
      <ul className="navigation">
        <li className="logo">
          <a className="link" href="#"><img src={logo} alt="logo" /></a>
        </li>
        <li>
          <a className="link" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a className="link" href="#about">About</a>
        </li>
        <li>
          <a className="link" href="#contact">Contact</a>
        </li>
      </ul>
      <div className="d-flex align-items-center header-details">
        <div className="mr-2">
          <img src={bluePhone} alt="phone-image" />
        </div>
        <div className="details">
          <span className="number">(555)555-5555</span>
          <span>sunroadconstruction@gmail.com</span>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section className="portfolio-summary">
      <div className="container">
        <div className="desc-container">
          <div className="back-btn">
            <button type="button">
              <img src={arrowImage} />
              <span><Link to="/" style={{color: 'black'}}>Back</Link></span>
            </button>
          </div>
          <div className="portfolio-summary-row">
            <div className="main-img">
              <img className="img-cover" src={portfolioImage1} />
            </div>
            <div className="desc">
              <h3>Custom New Build</h3>
              <p>Experience and expertise to take you from concept to completion. Our business philosophy is simple: operate with transparency, hire good people and pay attention to the details.
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
    <section className="portfolio-filters">
      <div className="container">
        <h2 className="icon-heading">
          <span className="box bg-secondary" />
          <span className="heading text-secondary">Portfolio</span>
        </h2>
        <div className="filters">
          <ul>
            <li>
              <button className="active" type="button">All</button>
            </li>
            <li>
              <button type="button">Construction</button>
            </li>
            <li>
              <button type="button">Floors</button>
            </li>
            <li>
              <button type="button">Remodeling</button>
            </li>
          </ul>
        </div>
        <div className="row pt-4 portfolio-container">
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage1} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage2} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage3} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage1} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage2} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage3} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage1} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage2} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
            <div className="img-holder">
              <img className="img-cover" src={portfolioImage3} />
              <div className="decription">
                <h5>Custom New Build</h5>
                <div className="sub-heading">3,936 sq ft</div>
                <div className="sub-heading">4 bedroom | 4 bath</div>
                <p>Architecture + Interior: Scott &amp; Scott Architects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact portfolio-contact">
      <h2 className="icon-heading">
        <span className="box bg-secondary" />
        <span className="heading text-secondary">Contact</span>
      </h2>
      <div className="row">
        <div className="col-12 col-lg-6 desc-col">
          <div className="contact-logo">
            <a href="#"><img src={logo} alt="logo" /></a>
          </div>
          <p>“JOGeneral Contractor |  Project Management<br />
            Construction Management<br />
            Consistently exceeding our clients’ <br />
            expectations for service, quality and value.”</p>
        </div>
        <div className="col-12 col-lg-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="number">Your phone number</label>
              <input type="number" className="form-control" id="number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows={6} defaultValue={""} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-4">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <p>© Copyright 2021 | SunRoad Construction | All rights reserved</p>
  </footer>
</div>

    </div>
  );
}

DetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detailPage: makeSelectDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DetailPage);
