import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [
        { id: 1, name: 'AirMax 90', brand: 'Nike' },
        { id: 2, name: 'Yeezy', brand: 'Adidas' },
        { id: 3, name: 'Classic', brand: 'Reebok' },
      ],
    };
    this.handleProductSelect = this.handleProductSelect.bind(this);
  }

  handleProductSelect(product) {
    this.setState(prevState => ({
      selectedProducts: prevState.selectedProducts.concat(product),
    }));
  }

  render() {
    return (
      <div>
        <h1>My Product Store List</h1>
        <p className="items-in-cart">Items in cart: {this.state.products.length}</p>
        <ProductList
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    );
  }
}

export default App;
