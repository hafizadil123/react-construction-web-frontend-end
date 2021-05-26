import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import arrowImage from '../../assets/images/arrow.png';
const InsideDetailpage = ({ showDetail, data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [firstItem] = (data && data.length > 0 && data) || [];
  const {
    otherInfo: { projectName, longDescription, sqrft, bedroom, bathrooms },
    url,
  } = firstItem || [];
  return (
    <section className="portfolio-summary">
      <div className="container">
        <div className="desc-container">
          <div className="back-btn">
            <button type="button" onClick={() => showDetail(false)}>
              <img src={arrowImage} alt="arrow-img" />
              <span>Back</span>
            </button>
          </div>
          {
            <div className="portfolio-summary-row">
              <div className="main-img">
                <img className="img-cover" src={url} alt="img-cover" />
              </div>
              <div className="desc">
                <h3>{projectName}</h3>
                <p>{longDescription}</p>
                <ul>
                  <li>{sqrft} sq ft</li>
                  <li>
                    {bedroom} bedroom | {bathrooms} bath
                  </li>
                </ul>
              </div>
            </div>
          }
          <div className="row images-gallery">
            {data &&
              data.length > 0 &&
              data.map(item => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="img-holder">
                    <img
                      className="img-cover"
                      src={item.url}
                      alt="img-cover1"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
InsideDetailpage.propTypes = {
  showDetail: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default InsideDetailpage;
