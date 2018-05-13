import * as MockProducts from '../../tests/utils/MockProducts';
import * as products from './products';

let mockProducts;
const initialProducts = products.all();
beforeEach(() => {
  mockProducts = MockProducts.create();
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

describe('allBrands()', () => {
  let expectedBrands;

  function testAllBrands() {
    products.set(mockProducts);
    expect(products.allBrands()).toEqual(expectedBrands);
  }

  it('should return an array of product brands', () => {
    expectedBrands = mockProducts.map(product => product.brand);
    testAllBrands();
  });

  it('should not have duplicate brands', () => {
    const mockProduct = mockProducts[0];
    expectedBrands = [mockProduct.brand];
    mockProducts = [mockProduct, mockProduct];
    testAllBrands();
  });
});
