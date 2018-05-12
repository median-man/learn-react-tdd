import React from 'react';
import PropTypes from 'prop-types';

function BrandSelector(props) {
  const onlyUnique = (item, index, array) => array.indexOf(item) === index;
  const brands = products => products.map(product => product.brand).filter(onlyUnique);
  return (
    <select onChange={event => props.onBrandSelect(event.target.value)}>
      {brands(props.products)
          .map(brand => <option key={brand} value={brand}>{brand}</option>)}
    </select>
  );
}

BrandSelector.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBrandSelect: PropTypes.func.isRequired,
};

export default BrandSelector;
