import React, { PropTypes } from 'react';

const ForecastFooter = ({ state, country }) => (
  <div className="footer">
    <p className="footer-location">{state}, {country}</p>
  </div>
);

ForecastFooter.propTypes = {
  state: PropTypes.string.isRequired,

  country: PropTypes.string.isRequired
};

export default ForecastFooter;
