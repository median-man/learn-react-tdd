import React, { Component } from 'react';
import BrandSelector from './components/BrandSelector';
import ProductList from './components/ProductList';
import * as products from './state/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: products.all(),
    };
    this.handleProductSelect = this.handleProductSelect.bind(this);
    this.handleBrandSelect = this.handleBrandSelect.bind(this);
  }

  handleProductSelect(product) {
    this.setState({
      selectedProducts: this.state.selectedProducts.concat(product),
    });
  }

  handleBrandSelect(brand) {
    this.setState({
      products: products.filterByBrand(brand),
    });
  }

  render() {
    return (
      <div>
        <h1>My Product Store List</h1>
        <p className="items-in-cart">Items in cart: {this.state.selectedProducts.length}</p>
        Select Brand: <BrandSelector
          products={products.all()}
          onBrandSelect={this.handleBrandSelect}
        />
        <ProductList
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    );
  }
}

export default App;
