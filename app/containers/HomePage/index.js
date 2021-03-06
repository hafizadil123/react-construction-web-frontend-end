/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo1.png';
import bluePhone from '../../assets/images/phone-blue.png';
import phoneWhite from '../../assets/images/phone-white.png';
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENV,
  CONTENTFUL_ENTRY_ID,
} from '../../utils/constants';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/contactUs';
const contentful = require('contentful');

export default function HomePage() {
  const [data, setData] = useState({});
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: CONTENTFUL_SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: CONTENTFUL_ENV,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    client
      .getEntry(CONTENTFUL_ENTRY_ID)
      .then(entry => {
        const { fields } = entry || {};
        setData(fields);
      })
      .catch(err => console.warn(err));
  }, []);
  return (
    <>
      <div id="wrapper">
        <header className="header">
          <nav>
            <ul className="navigation">
              <li className="logo">
                <Link className="link" to="/">
                  <img
                    src={data && data.logo && data.logo.fields.file.url}
                    alt="logo"
                  />
                </Link>
              </li>
              <li>
                <a
                  className="link nav-font mt-lg-5 ml-md-5 ml-lg-3"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a className="link nav-font mt-lg-5" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="link nav-font mt-lg-5" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center header-details">
              <div className="mr-4">
                <img src={bluePhone} alt="phone-blue" />
              </div>
              <div className="details">
                <div>{data && data.phoneNumber}</div>
                <div>{data && data.email}</div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section
            className="hero"
            style={{
              backgroundImage: `url(${data &&
                data.mainCoverPicture &&
                data.mainCoverPicture.fields &&
                data.mainCoverPicture.fields.file.url})`,
            }}
          >
            <div className="content ">
              <div className="title mt-lg-5 d-md-none">
                <h1 className="mb-md-4 mt-lg-4 d-md-none">
                  <span className="text-primary">
                    {data && data.mainHeading}
                    <br />
                  </span>{' '}
                  <span className="text-secondary">
                    {data && data.mainSubHeading}
                  </span>
                </h1>
                <button type="button" className="btn btn-primary button-font">
                  <Link
                    to="/detail-page?action_type=view-portfolio&type=allType"
                    style={{ color: 'white' }}
                  >
                    View Portfolio
                  </Link>
                </button>
              </div>
              <div className="desc py-5 py-lg-0">
                <p className="mb-5 font-size-lg">
                  {data && data.mainDescription}
                </p>
                <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start contact-details">
                  <div className="mr-md-4">
                    <img
                      className="d-none d-lg-block"
                      src={bluePhone}
                      alt="phone-blue"
                    />
                    <img
                      className="d-block d-lg-none mb-2"
                      src={phoneWhite}
                      alt="phone-white"
                    />
                  </div>
                  <div className="details">
                    <div>{data && data.phoneNumber}</div>
                    <div>{data && data.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-5 button-font"
                >
                  <Link
                    to="/detail-page?action_type=view-portfolio&type=allType"
                    style={{ color: 'white' }}
                  >
                    View Portfolio
                  </Link>
                </button>
              </div>
            </div>
            <div
              className="img-section"
              style={{
                backgroundImage: `url(${data &&
                  data.mainCoverPicture &&
                  data.mainCoverPicture.fields &&
                  data.mainCoverPicture.fields.file.url})`,
              }}
            />
          </section>
          <section className="portfolio" id="portfolio">
            <div className="container">
              <h2 className="icon-heading">
                <span className="box bg-secondary" />
                <span className="heading text-secondary">
                  {data && data.portfolioHeading}
                </span>
              </h2>
              <div className="row py-4 justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 portfolio-holder">
                  <h6>{data && data.categoryOne}</h6>
                  <div className="img-holder">
                    <Link to="/detail-page?action_type=view-portfolio&type=constructionType">
                      <img
                        className="img-cover"
                        alt="construction"
                        src={
                          data &&
                          data.categoryOneImage &&
                          data.categoryOneImage.fields &&
                          data.categoryOneImage.fields.file.url
                        }
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 portfolio-holder">
                  <h6>{data && data.categoryThree}</h6>
                  <div className="img-holder">
                    <Link to="/detail-page?action_type=view-portfolio&type=remodeling">
                      <img
                        className="img-cover"
                        alt="remodeling"
                        src={
                          data &&
                          data.categoryThreeImage &&
                          data.categoryThreeImage.fields &&
                          data.categoryThreeImage.fields.file.url
                        }
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary rfs-btn button-font"
                >
                  <Link
                    to="/detail-page?action_type=view-portfolio&type=allType"
                    style={{ color: 'white' }}
                  >
                    View Portfolio
                  </Link>
                </button>
              </div>
            </div>
          </section>
          <AboutUs data={data} />
          <ContactUs data={data} />
        </main>
        <footer>
          <p className="font-size-lg">
            ?? Copyright 2021 | SunRoad Construction | All rights reserved
          </p>
        </footer>
      </div>
    </>
  );
}
