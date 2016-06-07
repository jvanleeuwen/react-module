import React, { PropTypes } from 'react';

const Item = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};


export default Item;
