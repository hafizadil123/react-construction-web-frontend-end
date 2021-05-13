/**
 *
 * DetailPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import history from 'utils/history';
import queryString from 'query-string';
import { useInjectReducer } from 'utils/injectReducer';
import PhoneInput from 'react-phone-input-2';
import makeSelectDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo from '../../assets/images/logo1.png';
import 'react-phone-input-2/lib/style.css';

import bluePhone from '../../assets/images/phone-blue.png';
import InsideDetailpage from '../../components/InsideDetailPage';
import PortfolioSection from '../../components/PortfolioSection';
import portfolioImage1 from '../../assets/images/portfolio-1.jpg';
import portfolioImage2 from '../../assets/images/portfolio-2.jpg';
import portfolioImage3 from '../../assets/images/portfolio-3.jpg';

export function DetailPage({ dispatch }) {
  useInjectReducer({ key: 'detailPage', reducer });
  const [images, setImages] = useState([
    portfolioImage1,
    portfolioImage2,
    portfolioImage3,
    portfolioImage2,
    portfolioImage3,
    portfolioImage1,
    portfolioImage2,
    portfolioImage3,
    portfolioImage1,
  ]);
  const [value, setValue] = useState();

  useInjectSaga({ key: 'detailPage', saga });
  console.log('dispacth', dispatch);
  const {
    location: { search },
  } = history || {};
  const actionType = queryString.parse(search).action_type;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filterImagebyCategory = val => {
    console.log('val', val);
    switch (val) {
      case 'contruction':
        setImages([
          portfolioImage3,
          portfolioImage2,
          portfolioImage1,
          portfolioImage2,
          portfolioImage3,
          portfolioImage1,
          portfolioImage3,
          portfolioImage2,
          portfolioImage1,
        ]);
        break;
      case 'floor':
        setImages([
          portfolioImage1,
          portfolioImage2,
          portfolioImage3,
          portfolioImage2,
          portfolioImage3,
          portfolioImage1,
          portfolioImage2,
          portfolioImage3,
          portfolioImage1,
        ]);
        break;
      case 'remodeling':
        setImages([
          portfolioImage3,
          portfolioImage2,
          portfolioImage1,
          portfolioImage2,
          portfolioImage3,
          portfolioImage1,
          portfolioImage3,
          portfolioImage2,
          portfolioImage1,
        ]);
        break;
      default:
        return [
          portfolioImage1,
          portfolioImage2,
          portfolioImage3,
          portfolioImage2,
          portfolioImage3,
          portfolioImage1,
          portfolioImage2,
          portfolioImage3,
          portfolioImage1,
        ];
    }
  };
  const renderOnActionType = type => {
    switch (type) {
      case 'inside-details':
        return <InsideDetailpage />;
      case 'view-portfolio':
        return (
          <PortfolioSection
            images={images}
            filterImagebyCategory={val => filterImagebyCategory(val)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div id="wrapper">
        <header className="header header-portfolio">
          <nav>
            <ul className="navigation">
              <li className="logo">
                <Link className="link" to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li>
                <a className="link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center header-details">
              <div className="mr-2">
                <img src={bluePhone} alt="phone-image" />
              </div>
              <div className="details">
                <span className="number">(555)555-5555</span>
                <span> sunroadconstruction@gmail.com</span>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {renderOnActionType(actionType)}
          <section className="contact portfolio-contact">
            <h2 className="icon-heading">
              <span className="box bg-secondary" />
              <span className="heading text-secondary">Contact</span>
            </h2>
            <div className="row">
              <div className="col-12 col-lg-6 desc-col">
                <div className="contact-logo">
                  <Link to="#">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <p>
                  “JOGeneral Contractor | Project Management
                  <br />
                  Construction Management
                  <br />
                  Consistently exceeding our clients’ <br />
                  expectations for service, quality and value.”
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Your name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Your phone number</label>
                    <PhoneInput
                      value={value}
                      onChange={setValue}
                      onlyCountries={['us', 'ca']}
                      masks="(...) ..-..-.."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={6}
                      defaultValue=""
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-4">
                      Send
                    </button>
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
