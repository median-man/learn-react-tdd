import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductList from './components/ProductList';
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
});

function findProductList() {
  return appWrapper.find(ProductList);
}

it('handleProductSelect() adds product to state.selectedProducts', () => {
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

it('renders a `<ProductList />`', () => {
  expect(findProductList().length).toEqual(1);
});

it('sets ProductList.props.products', () => {
  appWrapper.setState({ products: mockProducts });
  expect(findProductList().prop('products')).toEqual(mockProducts);
});

it('sets ProductList.props.onProductSelect', () => {
  const expected = appWrapper.instance().handleProductSelect;
  const actual = findProductList().prop('onProductSelect');
  expect(actual).toBe(expected);
});

it('renders heading', () => {
  expect(appWrapper.find('h1').length).toEqual(1);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
