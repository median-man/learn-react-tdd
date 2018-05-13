let products = [
  { id: 1, name: 'AirMax 90', brand: 'Nike' },
  { id: 2, name: 'Yeezy', brand: 'Adidas' },
  { id: 3, name: 'Classic', brand: 'Reebok' },
];

export function all() {
  return products;
}

export function set(newProducts) {
  products = newProducts;
  return all();
}

export function filterByBrand(brand) {
  const hasBrand = product => product.brand === brand;
  return brand ? all().filter(product => hasBrand(product)) : all();
}
