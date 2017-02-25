import React, { PropTypes } from 'react';

const ForecastContent = ({ summary }) =>  (
  <div className='content'>
    <h3>{summary}</h3>
  </div>
)

ForecastContent.propTypes = {
  summary: PropTypes.string,
}

export default ForecastContent
