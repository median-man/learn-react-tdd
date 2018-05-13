import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
  const { onProductSelect, filter } = props;
  const productListItems = products => products
    .filter(product => (props.filter.brand ? filter.brand === product.brand : true))
    .map(product => (
      <li key={product.id}>
        <div
          role="button"
          tabIndex="0"
          onClick={() => onProductSelect(product)}
          onKeyPress={() => onProductSelect(product)}
        >
          {product.name} {product.brand}
        </div>
      </li>));
  return <ul>{productListItems(props.products)}</ul>;
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onProductSelect: PropTypes.func.isRequired,
  filter: PropTypes.shape({ brand: PropTypes.string }),
};

ProductList.defaultProps = {
  filter: {},
};

export default ProductList;
