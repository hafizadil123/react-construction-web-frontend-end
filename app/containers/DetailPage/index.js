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
import makeSelectDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo from '../../assets/images/logo1.png';
import 'react-phone-input-2/lib/style.css';
import ContactUs from '../../components/contactUs';
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENV,
  CONTENTFUL_ENTRY_ID,
} from '../../utils/constants';
import bluePhone from '../../assets/images/phone-blue.png';
import InsideDetailpage from '../../components/InsideDetailPage';
import PortfolioSection from '../../components/PortfolioSection';
import AboutUs from '../../components/AboutUs';
const contentful = require('contentful');
export function DetailPage({ dispatch }) {
  const [data, setData] = useState({});
  const [detailData, setDetailData] = useState({});
  const [allData, setAllData] = useState();
  useInjectReducer({ key: 'detailPage', reducer });
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: CONTENTFUL_ENV,
  });

  const filterImagesFromContentfulData = data => {
    const filterImages =
      data &&
      data.length > 0 &&
      data.map(item => {
        const mapImages = {
          meta: item.fields,
        };
        return mapImages;
      });
    const filteredArray =
      filterImages &&
      filterImages.length > 0 &&
      filterImages.map(item =>
        item.meta.images.map(el => {
          const mappedObject = {
            url: el.fields && el.fields.file.url,
            title: el.fields && el.fields.title,
            description: el.fields && el.fields.description,
            otherInfo: item.meta,
          };

          return mappedObject;
        }),
      );
    return filteredArray;
  };
  useEffect(() => {
    client
      .getEntry(CONTENTFUL_ENTRY_ID)
      .then(entry => {
        const { fields } = entry || {};
        setData(fields);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    client
      .getEntry('5hQuA3Yn57RWghqe75ztMa')
      .then(entry => {
        const { fields } = entry || {};

        const { allType, constructionType, floorType, remodeling } =
          fields || {};
        const filterData = {
          allType,
          constructionType,
          floorType,
          remodeling,
        };
        setDetailData(filterImagesFromContentfulData(filterData[categoryType]));
        setAllData(fields);
      })
      .catch(err => console.log(err));
  }, []);

  useInjectSaga({ key: 'detailPage', saga });
  const {
    location: { search },
  } = history || {};
  const actionType = queryString.parse(search).action_type;
  const categoryType = queryString.parse(search).type;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filterImagebyCategory = val => {
    switch (val) {
      case 'constructionType':
        setDetailData(filterImagesFromContentfulData(allData.constructionType));
        break;
      case 'floorType':
        setDetailData(filterImagesFromContentfulData(allData.floorType));

        break;
      case 'remodeling':
        setDetailData(filterImagesFromContentfulData(allData.remodeling));
        break;
      case 'allType':
        setDetailData(filterImagesFromContentfulData(allData.allType));
        break;
      default:
        return [];
    }
    return null;
  };
  const renderOnActionType = type => {
    switch (type) {
      case 'inside-details':
        return <InsideDetailpage />;
      case 'view-portfolio':
        return (
          <PortfolioSection
            detailData={detailData}
            filterImagebyCategory={val => filterImagebyCategory(val)}
            categoryType={categoryType}
            title="Portfolio"
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
                  <img
                    src={
                      allData && allData.logo && allData.logo.fields.file.url
                    }
                    alt="logo"
                  />
                </Link>
              </li>
              <li className="ml-lg-5">
                <a className="link nav-font" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="link nav-font" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="link nav-font" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center header-details">
              <div className="mr-2">
                <img src={bluePhone} alt="phone-image" />
              </div>
              <div className="details font-size-lg">
                <span className="number">{allData && allData.phoneNumber}</span>
                <span> {allData && allData.email}</span>
              </div>
            </div>
          </nav>
        </header>
        <main className="portfolio-main">
          {renderOnActionType(actionType)}
          <AboutUs data={data} />
          <ContactUs data={data} />
        </main>
        <footer>
          <p className="font-size-lg">
            © Copyright 2021 | SunRoad Construction | All rights reserved
          </p>
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
