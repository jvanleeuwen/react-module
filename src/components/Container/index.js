import React, { PropTypes } from 'react';

const Container = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
