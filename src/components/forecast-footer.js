import React, { PropTypes } from 'react';

const ForecastFooter = ({ maxTemp, minTemp }) => (
  <div className="footer">
    <div className="footer-max-temp">
      <p>Max Temp</p>
      <span>{minTemp}</span>
    </div>
    <div className="footer-min-temp">
      <p>Min Temp</p>
      <span>{minTemp}</span>
    </div>
  </div>
)

ForecastFooter.propTypes = {
  maxTemp: PropTypes.number,

  minTemp: PropTypes.number,
}

export default ForecastFooter
