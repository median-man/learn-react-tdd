import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import BrandSelector from './BrandSelector';

Enzyme.configure({ adapter: new Adapter() });

let mockProducts;
let mockBrands;
let wrapper;
let brandSelectFn;

const findAllOptions = () => wrapper.find('option');
const createWrapper = () =>
  shallow(<BrandSelector products={mockProducts} onBrandSelect={brandSelectFn} />);

beforeEach(() => {
  mockProducts = [
    { id: 1, name: 'Mock Product 1', brand: 'MockBrandA' },
    { id: 2, name: 'Mock Product 2', brand: 'MockBrandB' },
  ];
  mockBrands = ['MockBrandA', 'MockBrandB'];
  brandSelectFn = jest.fn();
  wrapper = createWrapper();
});

it('should render a `<select>` element', () => {
  expect(wrapper.find('select').length).toEqual(1);
});

it('should render an `<option>` for each brand in props.products', () => {
  const options = findAllOptions();
  const optionIndex = 0;
  const optionWrapper = options.at(optionIndex);

  function hasExpectedValue() {
    return expect(optionWrapper.prop('value')).toEqual(mockBrands[optionIndex]);
  }

  function containsBrandText() {
    return expect(optionWrapper.contains(mockBrands[optionIndex])).toBeTruthy();
  }

  expect(options.length).toEqual(mockBrands.length);
  hasExpectedValue();
  containsBrandText();
});

it('should not repeat brands', () => {
  mockProducts.push({ id: 3, name: 'Mock Product 3', brand: 'MockBrandA' });
  wrapper = createWrapper();
  expect(findAllOptions().length).toEqual(mockBrands.length);
});

describe('props.onBrandSelect()', () => {
  it('should be called when brand `<select>` changes', () => {
    const selectWrapper = wrapper.find('select');
    selectWrapper.simulate('change', { target: { value: 'hello' } });
    expect(brandSelectFn).toHaveBeenCalled();
  });

  it('should be called with the brand', () => {
    const selectWrapper = wrapper.find('select');
    selectWrapper.simulate('change', { target: { value: 'hello' } });
    expect(brandSelectFn.mock.calls[0][0]).toEqual('hello');
  });
});
