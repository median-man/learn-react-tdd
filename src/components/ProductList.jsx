import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
  const { onProductSelect } = props;
  return (
    <ul>
      {props.products.map(product => (
        <li key={product.id}>
          <div
            role="button"
            tabIndex="0"
            onClick={() => onProductSelect(product)}
            onKeyPress={() => onProductSelect(product)}
          >
            {product.name} {product.brand}
          </div>
        </li>))}
    </ul>);
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onProductSelect: PropTypes.func.isRequired,
};

export default ProductList;
