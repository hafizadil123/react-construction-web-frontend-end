import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '../../assets/images/logo1.png';
import 'react-phone-input-2/lib/style.css';

const ContactUs = ({ data }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const apiURL = 'https://aqueous-thicket-70637.herokuapp.com/user/send-email';
  const contactUsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Min 50 charecters required!')
      .required('Required'),
    message: Yup.string()
      .min(10, 'Min 10 charecters required!')
      .max(50, 'Min 50 charecters required!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

  const generateContactEmail = async (obj, resetForm) => {
    setLoading(true);
    setTimeout(async () => {
      const res = await axios.post(apiURL, obj);
      if (!res) {
        console.log('err', res);
        setError(true);
      }
      console.log('sucess', res);
      setValue('');
      setError(false);
      resetForm();
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="icon-heading">
          <span className="box bg-secondary" />
          <span className="heading text-secondary">
            {data && data.contactText}
          </span>
        </h2>
        <div className="row">
          <div className="col-12 col-lg-6 desc-col">
            <div className="contact-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={contactUsSchema}
              onSubmit={(values, { resetForm }) => {
                // same shape as initial values
                values.phoneNumber = value;
                generateContactEmail(values, resetForm);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  {!error && error !== null && (
                    <div className="alert alert-success alert-dismissible">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        onClick={() => setError(null)}
                      >
                        &times;
                      </button>
                      <strong>Success!</strong> Email has been sent!
                    </div>
                  )}
                  {error && error !== null && (
                    <div className="alert alert-danger alert-dismissible">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        onClick={() => setError(null)}
                      >
                        &times;
                      </button>
                      <strong>Error!</strong> something went wrong!
                    </div>
                  )}
                  <div className="form-group">
                    <label className="font-size-lg" htmlFor="name">
                      Your name
                    </label>
                    <Field name="name" className="form-control" type="text" />
                    {errors.name && touched.name ? (
                      <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="form-group font-size-lg">
                    <label className="font-size-lg" htmlFor="number">
                      Your phone number
                    </label>
                    <PhoneInput
                      inputProps={{
                        name: 'phoneNumber',
                        required: true,
                        autoFocus: true,
                      }}
                      value={value}
                      onChange={setValue}
                      placeholder="(555) 555-5555"
                      onlyCountries={['us', 'ca']}
                      masks="(...) ..-..-.."
                    />
                  </div>
                  <div className="form-group font-size-lg">
                    <label className="font-size-lg" htmlFor="email">
                      Email
                    </label>
                    <Field name="email" className="form-control" type="email" />
                    {errors.email && touched.email ? (
                      <div style={{ color: 'red' }}>{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-group font-size-lg">
                    <label className="font-size-lg" htmlFor="message">
                      Message
                    </label>
                    <Field
                      name="message"
                      as="textarea"
                      className="form-control"
                      rows={6}
                      defaultValue=""
                    />
                    {errors.message && touched.message ? (
                      <div style={{ color: 'red' }}>{errors.message}</div>
                    ) : null}
                  </div>

                  <div className="text-center">
                    {isLoading ? (
                      <button
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="">please wait...</span>
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary mt-4">
                        Send
                      </button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
