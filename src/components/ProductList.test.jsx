import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import * as MockProducts from '../../tests/utils/MockProducts';
import ProductList from './ProductList';

describe('ProductList', () => {
  Enzyme.configure({ adapter: new Adapter() });

  let wrapper;
  let mockProducts;
  let productSelectFn;

  beforeEach(() => {
    mockProducts = MockProducts.create();
    productSelectFn = jest.fn();

    wrapper = shallow(<ProductList products={mockProducts} onProductSelect={productSelectFn} />);
  });

  afterEach(() => {
    productSelectFn.mockReset();
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

  describe('when props.filter.brand is is set', () => {
    it('should render a filtered list of products', () => {
      const excludedBrand = mockProducts[1].brand;
      wrapper.setProps({ filter: { brand: mockProducts[0].brand } });
      expect(wrapper.contains(excludedBrand)).toBeFalsy();
    });
  });

  describe('props.onProductSelect()', () => {
    let firstEl;

    beforeEach(() => {
      firstEl = wrapper.find('li').first().find('div');
      expect(productSelectFn.mock.calls.length).toEqual(0);
    });

    function onProductSelectCalledWithExpectedArgs() {
      expect(productSelectFn.mock.calls.length).toEqual(1);
      expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
    }

    it('should be called when a product `<div>` is clicked', () => {
      firstEl.simulate('click');
      onProductSelectCalledWithExpectedArgs();
    });

    it('should be called when `enter` key is pressed on a product `<div>`', () => {
      firstEl.simulate('keypress', { key: 'Enter' });
      onProductSelectCalledWithExpectedArgs();
    });
  });
});
