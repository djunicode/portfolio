import React from 'react';
import PropTypes from 'prop-types';

const Education = (props) => {
    const { course, institute, start_year, end_year, result, location } = props.education;
  return (
    <div>
      <p><span className="text_bold">{ institute }</span> | { course }</p>
      <p>{start_year} - {end_year} | { location }</p>
      <p>Result: { result }</p>
    </div>
  )
}

Education.propTypes = {
    education: PropTypes.object.isRequired
};

export default Education
