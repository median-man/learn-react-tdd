import React from 'react';
import PropTypes from 'prop-types';

function BrandSelector(props) {
  return (
    <select>
      {props.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
    </select>
  );
}

BrandSelector.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BrandSelector;
