import React from 'react';
import AboutMeImage from '../../assets/images/Elias.jpg';
const AboutUs = () => (
  <>
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
            <span className="heading text-primary">What my Clients say</span>
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
  </>
);

export default AboutUs;