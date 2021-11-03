/* eslint-disable no-fallthrough */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailPage from '../InsideDetailPage';
const PortfolioSection = ({
  detailData,
  filterImagebyCategory,
  title,
  // eslint-disable-next-line react/prop-types
  categoryType,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState(false);
  const [type, setType] = useState(categoryType || 'allType');

  const showDetailPage = (val, dataObj) => {
    setShowDetail(val);
    setData(dataObj);
  };
  // eslint-disable-next-line no-shadow
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
                    value="remodeling"
                    className={type === 'remodeling' ? `active` : ''}
                    onClick={() => updateCategoryByClick('remodeling')}
                  >
                    Remodeling
                  </button>
                </li>
              </ul>
            </div>
            <div className="row pt-4 portfolio-container justify-content-center">
              {detailData &&
                detailData.length > 0 &&
                detailData.map(item => (
                  <div className="col-12 col-sm-6 col-lg-4 portfolio-wrapper">
                    {/* The <div> element has a child <button> element that allows keyboard interaction */}
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div
                      className="img-holder"
                      onClick={() => showDetailPage(true, item)}
                      onKeyDown={() => showDetailPage(true, item)}
                    >
                      <img
                        className="img-cover"
                        alt="cover"
                        src={item && item[0] && item[0].url}
                      />
                      <div className="decription">
                        <h5>
                          {item && item[0] && item[0].otherInfo.projectName}
                        </h5>
                        <div className="sub-heading">
                          {item && item[0] && item[0].otherInfo.sqrft}
                        </div>
                        <div className="sub-heading">
                          {item && item[0] && item[0].otherInfo.bedroom}{' '}
                          {item && item[0] && item[0].otherInfo.bathrooms}
                        </div>
                        <p>
                          {item &&
                            item[0] &&
                            item[0].otherInfo.shortDescription}
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

PortfolioSection.propTypes = {
  detailData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterImagebyCategory: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default PortfolioSection;
