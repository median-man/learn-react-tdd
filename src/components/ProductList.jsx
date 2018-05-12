import React from 'react';
import PropTypes from 'prop-types';


function ProductList(props) {
  const li = product => <li key={product.id}>{product.name} {product.brand}</li>;
  return <ul>{props.products.map(li)}</ul>;
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
