import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import 'react-phone-input-2/lib/style.css';

const ContactUs = () => {
  const [value, setValue] = useState();
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="icon-heading">
          <span className="box bg-secondary" />
          <span className="heading text-secondary">Contact</span>
        </h2>
        <div className="row">
          <div className="col-12 col-lg-6 desc-col">
            <div className="contact-logo">
              <Link to="/">
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
                  placeholder="(555) 555-5555"
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
    </>
  );
};

export default ContactUs;
