import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import BrandSelector from './BrandSelector';

Enzyme.configure({ adapter: new Adapter() });

let mockBrands;
let wrapper;

beforeEach(() => {
  mockBrands = ['Nike', 'Adidas'];
  wrapper = shallow(<BrandSelector brands={mockBrands} />);
});

it('should render a `<select>` element', () => {
  expect(wrapper.find('select').length).toEqual(1);
});

it('should render an `<option>` for each brand in props.brands', () => {
  const selectWrapper = wrapper.find('option');
  const optionIndex = 0;
  const optionWrapper = selectWrapper.at(optionIndex);

  function hasExpectedValue() {
    return expect(optionWrapper.prop('value')).toEqual(mockBrands[optionIndex]);
  }

  function containsBrandText() {
    return expect(optionWrapper.contains(mockBrands[optionIndex])).toBeTruthy();
  }

  expect(selectWrapper.length).toEqual(mockBrands.length);
  hasExpectedValue();
  containsBrandText();
});
