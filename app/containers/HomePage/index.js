/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import logo from '../../assets/images/logo1.png';
import bluePhone from '../../assets/images/phone-blue.png';
import BannerImage from '../../assets/images/banner.jpg';
import phoneWhite from '../../assets/images/phone-white.png';
import portfolioImage1 from '../../assets/images/portfolio-1.jpg';
import portfolioImage2 from '../../assets/images/portfolio-2.jpg';
import portfolioImage3 from '../../assets/images/portfolio-3.jpg';
import AboutMeImage from '../../assets/images/Elias.jpg';
import 'react-phone-input-2/lib/style.css';

export default function HomePage() {
  const [value, setValue] = useState();
  return (
    <>
      <div id="wrapper">
        <header className="header">
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
              <div className="mr-4">
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
          <section
            className="hero"
            style={{ backgroundImage: `url(${BannerImage})` }}
          >
            <div className="content">
              <div className="title">
                <h1>
                  <span className="text-primary">VISIONARY CONSTRUCTION</span>{' '}
                  <span className="text-secondary">EXCLUSIVE QUALITY</span>
                </h1>
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/detail-page?action_type=view-portfolio"
                    style={{ color: 'white' }}
                  >
                    View Portfolio
                  </Link>
                </button>
              </div>
              <div className="desc py-5 py-lg-0">
                <p className="mb-5">
                  Experience and expertise to take you from concept to
                  completion. Our business philosophy is simple: operate with
                  transparency, hire good people and pay attention to the
                  details.
                </p>
                <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start contact-details">
                  <div className="mr-md-4">
                    <img
                      className="d-none d-lg-block"
                      src={bluePhone}
                      alt="phone-image"
                    />
                    <img
                      className="d-block d-lg-none mb-2"
                      src={phoneWhite}
                      alt="phone-image"
                    />
                  </div>
                  <div className="details">
                    <div>(555)555-5555</div>
                    <div>sunroadconstruction@gmail.com</div>
                  </div>
                </div>
                <button type="button" className="btn btn-primary mt-5">
                  <Link
                    to="/detail-page?action_type=view-portfolio"
                    style={{ color: 'white' }}
                  >
                    View Portfolio
                  </Link>
                </button>
              </div>
            </div>
            <div
              className="img-section"
              style={{ backgroundImage: `url(${BannerImage})` }}
            />
          </section>
          <section className="portfolio" id="portfolio">
            <div className="container">
              <h2 className="icon-heading">
                <span className="box bg-secondary" />
                <span className="heading text-secondary">My Portfolio</span>
              </h2>
              <div className="row py-4">
                <div className="col-12 col-md-6 col-lg-4 portfolio-holder">
                  <h6>Constructions</h6>
                  <div className="img-holder">
                    <Link to="/detail-page?action_type=inside-details">
                      <img className="img-cover" src={portfolioImage1} />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 portfolio-holder">
                  <h6>Floors</h6>
                  <div className="img-holder">
                    <Link to="/detail-page?action_type=inside-details">
                      <img className="img-cover" src={portfolioImage2} />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 portfolio-holder">
                  <h6>Remodeling</h6>
                  <div className="img-holder">
                    <Link to="/detail-page?action_type=inside-details">
                      <img className="img-cover" src={portfolioImage3} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/detail-page?action_type=view-portfolio"
                    style={{ color: 'white' }}
                  >
                    View Portfolio
                  </Link>
                </button>
              </div>
            </div>
          </section>
          <section className="about" id="about">
            <div
              className="img-section"
              style={{ backgroundImage: `url(${AboutMeImage})` }}
            />
            <div className="content">
              <h2 className="icon-heading">
                <span className="box bg-primary" />
                <span className="heading text-primary">About Me</span>
              </h2>
              <div className="title">
                <h3>Elias Uribe</h3>
                <p className="m-lg-0">
                  JOGeneral Contractor | Project Management
                  <br />
                  Construction Management
                  <br />
                  Consistently exceeding our clients’ <br />
                  expectations for service, quality and value.
                </p>
              </div>
              <ul className="list">
                <li>JOGeneral Contractor</li>
                <li>Project Management</li>
                <li>Construction Management</li>
                <li>Consistently exceeding our</li>
              </ul>
            </div>
          </section>
          <section className="clients">
            <div className="content">
              <div className="text-center">
                <h2 className="icon-heading">
                  <span className="box bg-primary" />
                  <span className="heading text-primary">
                    What my Clients say
                  </span>
                </h2>
              </div>
              <div className="clients-container">
                <div className="client-holder">
                  <p>
                    “JOGeneral Contractor | Project Management
                    <br />
                    Construction Management
                    <br />
                    Consistently exceeding our clients’ <br />
                    expectations for service, quality and value.”
                  </p>
                </div>
                <div className="client-holder">
                  <p>
                    “JOGeneral Contractor | Project Management
                    <br />
                    Construction Management
                    <br />
                    Consistently exceeding our clients’ <br />
                    expectations for service, quality and value.”
                  </p>
                </div>
                <div className="client-holder">
                  <p>
                    “JOGeneral Contractor | Project Management
                    <br />
                    Construction Management
                    <br />
                    Consistently exceeding our clients’ <br />
                    expectations for service, quality and value.”
                  </p>
                </div>
              </div>
            </div>
            <div className="img-section" />
          </section>
          <section className="contact" id="contact">
            <h2 className="icon-heading">
              <span className="box bg-secondary" />
              <span className="heading text-secondary">Contact</span>
            </h2>
            <div className="row">
              <div className="col-12 col-lg-6 desc-col">
                <div className="contact-logo">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
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
    </>
  );
}
