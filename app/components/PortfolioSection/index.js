/* eslint-disable no-fallthrough */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailPage from '../InsideDetailPage';
const PortfolioSection = ({
  detailData,
  filterImagebyCategory,
  title,
  categoryType,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState(false);
  const [type, setType] = useState(categoryType || 'allType');

  const showDetailPage = (val, dataObj) => {
    setShowDetail(val);
    setData(dataObj);
  };
  const updateCategoryByClick = type => {
    filterImagebyCategory(type);
    setType(type);
  };
  return (
    <>
      {showDetail ? (
        <DetailPage showDetail={val => setShowDetail(val)} data={data} />
      ) : (
        <section className="portfolio-filters" id="portfolio">
          <div className="container">
            <h2 className="icon-heading">
              <span className="box bg-secondary" />
              <span className="heading text-secondary">{title}</span>
            </h2>
            <div className="filters">
              <ul>
                <li>
                  <button
                    className={type === 'allType' ? `active` : ''}
                    type="button"
                    onClick={() => updateCategoryByClick('allType')}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={type === 'constructionType' ? `active` : ''}
                    value="contruction"
                    onClick={() => updateCategoryByClick('constructionType')}
                  >
                    Construction
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={type === 'floorType' ? `active` : ''}
                    value="floor"
                    onClick={() => updateCategoryByClick('floorType')}
                  >
                    Floors
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="remodeling"
                    className={type === 'remodeling' ? `active` : ''}
                    onClick={() => updateCategoryByClick('remodeling')}
                  >
                    Remodeling
                  </button>
                </li>
              </ul>
            </div>
            <div className="row pt-4 portfolio-container">
              {detailData &&
                detailData.length > 0 &&
                detailData.map(item => (
                  <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
                    <div
                      className="img-holder"
                      onClick={() => showDetailPage(true, item)}
                    >
                      <img className="img-cover" src={item[0].url} />
                      <div className="decription">
                        <h5>{item[0].otherInfo.projectName}</h5>
                        <div className="sub-heading">
                          {item[0].otherInfo.description}
                        </div>
                        <div className="sub-heading">
                          {/* {item[0].otherInfo.bedroom} bedroom |{' '}
                          {item[0].otherInfo.bathrooms} bath */}
                        </div>
                        <p>{item[0].otherInfo.shortDescription}</p>
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

PortfolioSection.propTypes = {
  detailData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterImagebyCategory: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default PortfolioSection;
