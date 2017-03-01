import React, { PropTypes } from 'react';

const ForecastContent = ({ maxTemp, minTemp }) => (
  <div className="content">
    <div className="content-temp">
      <p className="content-max-temp" title="Maximum Temperature">{maxTemp.toFixed(0)}&deg;</p>
      <p className="content-min-temp" title="Minumum Temperature">{minTemp.toFixed(0)}&deg;</p>
    </div>
  </div>
);

ForecastContent.propTypes = {
  maxTemp: PropTypes.number.isRequired,

  minTemp: PropTypes.number.isRequired
};

export default ForecastContent;
