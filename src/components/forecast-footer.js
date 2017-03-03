import React, { PropTypes } from 'react';

/** Stateless functional component responsible for rendering the location of
* the user
*/
const ForecastFooter = ({ city, country }) => (
  <div className="footer">
    <div>
      <img src="images/location.png" alt="location" className="icon-img location-img" />
      <span className="footer-location">{city}, {country}</span>
    </div>
  </div>
);

ForecastFooter.propTypes = {
  city: PropTypes.string.isRequired,

  country: PropTypes.string.isRequired
};

export default ForecastFooter;
