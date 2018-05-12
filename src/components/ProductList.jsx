import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
  console.table(props.products);
  return <div>ProductList</div>;
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
