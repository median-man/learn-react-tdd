import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductList from './components/ProductList';
import BrandSelector from './components/BrandSelector';
import App from './App';


Enzyme.configure({ adapter: new Adapter() });

let appWrapper;
let mockProducts;
beforeEach(() => {
  appWrapper = shallow(<App />);
  mockProducts = [
    { id: 1, name: 'AirMax 90', brand: 'Nike' },
    { id: 2, name: 'Yeezy', brand: 'Adidas' },
    { id: 3, name: 'Classic', brand: 'Reebok' },
  ];
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

it('handleBrandSelect() should set state.currentBrand', () => {
  const expected = 'mockBrand';

  const { handleBrandSelect } = appWrapper.instance();
  handleBrandSelect(expected);

  const actual = appWrapper.state('currentBrand');
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

it('should set ProductList.props.filter', () => {
  const expected = { brand: 'testBrand' };
  appWrapper.setState({ currentBrand: 'testBrand' });
  const actual = findProductList().prop('filter');
  expect(actual).toEqual(expected);
});

it('should render the number of items in the cart', () => {
  const expected = '3';
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
