import React, { PropTypes } from 'react';

const ForecastContent = ({ maxTemp, minTemp }) => (
  <div className='content'>
    <div className='content-temp'>
      <p className='content-max-temp'>{maxTemp.toFixed(0)}&deg;</p>
      <p className='content-min-temp'>{minTemp.toFixed(0)}&deg;</p>
    </div>
  </div>
)

ForecastContent.propTypes = {
  maxTemp: PropTypes.number,

  minTemp: PropTypes.number,
}

export default ForecastContent
