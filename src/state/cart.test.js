import * as MockProducts from '../../tests/utils/MockProducts';
import Cart from './cart';

let mockProducts;

beforeEach(() => {
  mockProducts = MockProducts.create();
  Cart.empty();
});

describe('items()', () => {
  it('returns array of items in the cart', () => {
    mockProducts.forEach(product => Cart.addItem(product));
    expect(Cart.items()).toEqual(mockProducts);
  });

  it('returns a copy', () => {
    Cart.addItem(mockProducts[0]);
    expect(Cart.items()[0]).not.toBe(mockProducts[0]);
  });
});

describe('empty()', () => {
  it('should clear all items from cart', () => {
    mockProducts.forEach(product => Cart.addItem(product));
    Cart.empty();
    expect(Cart.items().length).toEqual(0);
  });

  it('should return cart', () => {
    expect(Cart.empty()).toBe(Cart);
  });
});

describe('addItem()', () => {
  it('should add a product to the cart', () => {
    const [mockProduct] = mockProducts;
    Cart.addItem(mockProduct);
    expect(Cart.items()).toEqual([mockProduct]);
  });

  it('should return cart', () => {
    expect(Cart.addItem()).toBe(Cart);
  });

  it('should not add anything when product is undefined', () => {
    Cart.addItem();
    expect(Cart.items()).toEqual([]);
  });
});

describe('count()', () => {
  it('should return the number of items in the cart', () => {
    expect(Cart.count()).toEqual(0);
    Cart.addItem(mockProducts[0]);
    expect(Cart.count()).toEqual(1);
  });
});
