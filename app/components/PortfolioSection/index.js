/* eslint-disable no-fallthrough */
import React, { useState } from 'react';
import DetailPage from '../InsideDetailPage';
const PortfolioSection = ({ images, filterImagebyCategory }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      {showDetail ? (
        <DetailPage showDetail={val => setShowDetail(val)} />
      ) : (
        <section className="portfolio-filters" id="portfolio">
          <div className="container">
            <h2 className="icon-heading">
              <span className="box bg-secondary" />
              <span className="heading text-secondary">Portfolio</span>
            </h2>
            <div className="filters">
              <ul>
                <li>
                  <button
                    className="active"
                    type="button"
                    onClick={() => filterImagebyCategory('all')}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="contruction"
                    onClick={() => filterImagebyCategory('contruction')}
                  >
                    Construction
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="floor"
                    onClick={() => filterImagebyCategory('floor')}
                  >
                    Floors
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="remodeling"
                    onClick={() => filterImagebyCategory('remodeling')}
                  >
                    Remodeling
                  </button>
                </li>
              </ul>
            </div>
            <div className="row pt-4 portfolio-container">
              {images &&
                images.map(item => (
                  <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
                    <div
                      className="img-holder"
                      onClick={() => setShowDetail(true)}
                    >
                      <img className="img-cover" src={item} />
                      <div className="decription">
                        <h5>Custom New Build</h5>
                        <div className="sub-heading">3,936 sq ft</div>
                        <div className="sub-heading">4 bedroom | 4 bath</div>
                        <p>
                          Architecture + Interior: Scott &amp; Scott Architects
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default PortfolioSection;
