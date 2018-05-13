import React, { Component } from 'react';
import BrandSelector from './components/BrandSelector';
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBrand: '',
      selectedProducts: [],
      products: [
        { id: 1, name: 'AirMax 90', brand: 'Nike' },
        { id: 2, name: 'Yeezy', brand: 'Adidas' },
        { id: 3, name: 'Classic', brand: 'Reebok' },
      ],
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
    this.setState({ currentBrand: brand });
  }

  render() {
    return (
      <div>
        <h1>My Product Store List</h1>
        <p className="items-in-cart">Items in cart: {this.state.selectedProducts.length}</p>
        Select Brand: <BrandSelector
          products={this.state.products}
          onBrandSelect={this.handleBrandSelect}
        />
        <ProductList
          products={this.state.products}
          filter={{ brand: this.state.currentBrand }}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    );
  }
}

export default App;
