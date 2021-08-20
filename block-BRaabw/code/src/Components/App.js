import React from 'react';
import { products } from '../data.json';
import _ from 'lodash';
import '../stylesheet/style.css';

import Header from './Header';
import Aside from './Aside';
import Hero from './Hero';
import Products from './Products';
import Cart from './Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOfItems: products,
      arrOfSize: _.uniq(
        _.flattenDeep(products.map((item) => item.availableSizes))
      ),
      productCount: products.length,
      sortBy: 'normal',
      cart: {
        items: [],
        total: 0,
      },
      sizeToSort: 'all',
      toggleCart: false,
      activeSize: '',
    };
  }

  //handle sort by size
  handleSortBySize = (event, size) => {
    let newArr = products.filter((ele) => {
      if (ele.availableSizes.includes(size)) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      arrOfItems: newArr,
      productCount: newArr.length,
      sizeToSort: size,
      activeSize: size,
    });
  };

  handleResetSort = (event) => {
    this.setState({
      arrOfItems: products,
      productCount: products.length,
      sizeToSort: '',
      activeSize: '',
    });
  };

  //handle sort by MRP

  handleSortByMRP = ({ target }) => {
    let newArrFor = [];
    switch (target.value) {
      case 'normal':
        let size = this.state.sizeToSort;
        let newArr = products.filter((ele) => {
          if (ele.availableSizes.includes(size)) {
            return true;
          } else {
            return false;
          }
        });
        this.setState({
          arrOfItems: newArr,
          productCount: newArr.length,
          sizeToSort: size,
        });

        break;

      case 'asc':
        newArrFor = [...this.state.arrOfItems];
        newArrFor.sort(function (a, b) {
          return a.price - b.price;
        });
        this.setState({
          arrOfItems: newArrFor,
          productCount: newArrFor.length,
        });
        break;

      case 'desc':
        newArrFor = [...this.state.arrOfItems];
        newArrFor.sort(function (a, b) {
          return b.price - a.price;
        });
        this.setState({
          arrOfItems: newArrFor,
          productCount: newArrFor.length,
        });
        break;

      default:
        break;
    }
  };

  //handle add to cart

  handleAddToCart = (event, product) => {
    if (this.state.cart.items.includes(product)) {
      alert('item already exist in cart');
    } else {
      let newArr = this.state.cart.items;
      newArr.push(product);
      let total = newArr.reduce((acc, cv) => {
        acc = acc + cv.price;
        return acc;
      }, 0);
      this.setState({
        cart: {
          items: newArr,
          total: total,
        },
      });
      alert(`item "${product.title} " added to cart successfully`);
    }
  };

  //hadnle cart close

  handleCartClose = (event) => {
    this.setState({ toggleCart: !this.state.toggleCart });
  };

  //handle increment in cart

  handleIncInCart = (event, item) => {
    this.state.cart.items.push(item);
    let updatedPrice = this.state.cart.total + item.price;

    this.setState({
      ...this.state,
      cart: {
        items: this.state.cart.items,
        total: updatedPrice,
      },
    });
  };

  //handle dec in cart
  handleDecInCart = (event, item) => {
    const index = this.state.cart.items.findIndex(
      (ele) => ele.title === item.title
    );
    this.state.cart.items.splice(index, 1);

    let updatedPrice = this.state.cart.total - item.price;

    this.setState({
      cart: {
        items: this.state.cart.items,
        total: updatedPrice,
      },
    });

  };

  render() {
    return (
      <>
        <Header data={this.state} handleCartClose={this.handleCartClose} />
        <main className="flex mt-10">
          <Aside
            data={this.state}
            handleSortBySize={this.handleSortBySize}
            handleResetSort={this.handleResetSort}
          />
          <section className="w-3/4 bg-green-100 p-10 rounded">
            <Hero data={this.state} handleSortByMRP={this.handleSortByMRP} />

            <Products
              data={this.state}
              handleAddToCart={this.handleAddToCart}
            />

            <Cart
              data={this.state}
              handleCartClose={this.handleCartClose}
              handleIncInCart={this.handleIncInCart}
              handleDecInCart={this.handleDecInCart}
            />
          </section>
        </main>
      </>
    );
  }
}
export default App;
