import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => {
  <div className='container'>{children}</div>;
};

PageContainer.defaultProps = {
  children: null,
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
