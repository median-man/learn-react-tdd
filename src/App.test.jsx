import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import * as MockProducts from '../tests/utils/MockProducts';
import ProductList from './components/ProductList';
import BrandSelector from './components/BrandSelector';
import * as products from './state/products';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

let appWrapper;
let mockProducts;
beforeEach(() => {
  mockProducts = MockProducts.create();
  products.set(mockProducts);
  appWrapper = shallow(<App />);
  appWrapper.setState({ products: mockProducts, currentBrand: '' });
});

function findProductList() {
  return appWrapper.find(ProductList);
}

it('handleProductSelect() should add a product to state.selectedProducts', () => {
  const input = mockProducts[0];
  const expected = [input];
  let handleProductSelect;
  let selectedProducts;

  const setUp = () => {
    selectedProducts = () => appWrapper.state('selectedProducts');
    ({ handleProductSelect } = appWrapper.instance());
    expect(selectedProducts()).toEqual([]);
  };

  setUp();
  handleProductSelect(input);
  expect(selectedProducts()).toEqual(expected);
});

it('handleBrandSelect() should filter and update state.products', () => {
  const expected = mockProducts.slice(0, 1);
  const [{ brand: input }] = expected;

  const { handleBrandSelect } = appWrapper.instance();
  handleBrandSelect(input);

  const actual = appWrapper.state('products');
  expect(actual).toEqual(expected);
});

it('should render a `<ProductList />`', () => {
  expect(findProductList().length).toEqual(1);
});

it('should set ProductList.props.products', () => {
  appWrapper.setState({ products: mockProducts });
  expect(findProductList().prop('products')).toEqual(mockProducts);
});

it('should set ProductList.props.onProductSelect', () => {
  const expected = appWrapper.instance().handleProductSelect;
  const actual = findProductList().prop('onProductSelect');
  expect(actual).toBe(expected);
});

it('should render the number of items in the cart', () => {
  const expected = '2';
  appWrapper.setState({ selectedProducts: [mockProducts[0], mockProducts[2]] });
  const cartEl = appWrapper.find('.items-in-cart');
  expect(cartEl.length).toEqual(1);
  expect(cartEl.text()).toEqual(expect.stringContaining(expected));
});

describe('BrandSelector props set by render()', () => {
  const findBrandSelector = () => appWrapper.find(BrandSelector);
  it('should render a `<BrandSelector>', () => {
    expect(findBrandSelector().length).toEqual(1);
  });

  it('should set BrandSelector.props.products', () => {
    const actual = findBrandSelector().prop('products');
    expect(actual).toEqual(mockProducts);
  });

  it('should set BrandSelector.props.onProductSelect', () => {
    const expected = appWrapper.instance().handleBrandSelect;
    const actual = findBrandSelector().prop('onBrandSelect');
    expect(actual).toBe(expected);
  });
});


it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
