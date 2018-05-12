import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductList from './ProductList';

Enzyme.configure({ adapter: new Adapter() });

it('should render a list of products as an unordered list', () => {
  const mockProducts = [
    { id: 1, name: 'Mock Product 1', brand: 'MockBrandA' },
    { id: 2, name: 'Mock Product 2', brand: 'MockBrandB' },
    { id: 3, name: 'Mock Product 3', brand: 'MockBrandC' },
  ];
  const expectedLength = mockProducts.length;
  const wrapper = shallow(<ProductList products={mockProducts} />);
  expect(wrapper.find('li').length).toEqual(expectedLength);
});
