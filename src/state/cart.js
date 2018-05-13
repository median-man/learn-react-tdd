let cart = [];

export default {
  items() {
    const copyItem = item => Object.assign({}, item);
    return cart.map(copyItem);
  },

  addItem(product) {
    if (product) cart.push(product);
    return this;
  },

  empty() {
    cart = [];
    return this;
  },

  count() {
    return cart.length;
  },
};
