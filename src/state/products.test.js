import * as products from './products';
import ProductList from '../components/ProductList';

let mockProducts;
const initialProducts = products.all();
beforeEach(() => {
  mockProducts = [
    { id: 1, name: 'product 1', brand: 'brand 1' },
    { id: 2, name: 'product 2', brand: 'brand 2' },
    { id: 3, name: 'product 3', brand: 'brand 3' },
  ];
});

afterEach(() => {
  products.set(initialProducts);
});

describe('set()', () => {
  it('should set the array of products', () => {
    products.set(mockProducts);
    expect(products.all()).toEqual(mockProducts);
  });

  it('should return array of products', () => {
    expect(products.set(mockProducts)).toEqual(mockProducts);
  });
});

describe('all()', () => {
  it('should return all products', () => {
    products.set(mockProducts);
    expect(products.all()).toEqual(mockProducts);
  });
});

describe('filterByBrand(brand)', () => {
  it('should return only products with matching brand', () => {
    products.set(mockProducts);
    expect(products.filterByBrand('brand 1')).toEqual([mockProducts[0]]);
  });

  it('should return all products when brand is ""', () => {
    products.set(mockProducts);
    expect(products.filterByBrand('')).toEqual(mockProducts);
  });
});

describe('each product', () => {
  it('should have name, brand, and id properties', () => {
    const matcher = {
      id: expect.stringMatching(/\d+/),
      name: expect.any(String),
      brand: expect.any(String),
    };
    products.all().forEach(product => expect(product).toMatchObject(matcher));
  });
});
