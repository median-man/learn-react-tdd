import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductList from './ProductList';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let mockProducts;

beforeEach(() => {
  mockProducts = [
    { id: 1, name: 'Mock Product 1', brand: 'MockBrandA' },
    { id: 2, name: 'Mock Product 2', brand: 'MockBrandB' },
    { id: 3, name: 'Mock Product 3', brand: 'MockBrandC' },
  ];
  wrapper = shallow(<ProductList products={mockProducts} />);
});

function containsTextAt(text, index) {
  const el = wrapper.find('li').at(index);
  expect(el.contains(text)).toEqual(true);
}

it('should render a list of products as an unordered list', () => {
  const expectedLength = mockProducts.length;
  expect(wrapper.find('li').length).toEqual(expectedLength);
});

it('should display the product name in each `<li>` element', () => {
  mockProducts.forEach(({ name }, index) => containsTextAt(name, index));
});

it('should display the brand name in each `<li>` element', () => {
  mockProducts.forEach(({ brand }, index) => containsTextAt(brand, index));
});
