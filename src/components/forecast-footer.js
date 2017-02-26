import React, { PropTypes } from 'react';

const ForecastFooter = ({ city, country }) => (
  <div className='footer'>
    <p className='footer-location'>{city}, {country}</p>
  </div>
)

ForecastFooter.propTypes = {
  city: PropTypes.string,

  country: PropTypes.string,
}

export default ForecastFooter
