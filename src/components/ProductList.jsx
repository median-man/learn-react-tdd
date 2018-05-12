import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
  window.console.log(props.products);
  return <div>ProductList</div>;
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
