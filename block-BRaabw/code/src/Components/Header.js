import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="bg-green-400 p-5 rounded-lg flex justify-between items-center">
        <h1 className="text-3xl text-blue-700 font-bold">ShopCart</h1>
        <button className="w-20" onClick={this.props.handleCartClose}>
          <img src="/static/cart.png" alt="Cart" />
          {this.props.data.cart.items.length === 0 ? (
            ''
          ) : (
            <span className="absolute top-12 right-10 text-3xl w-8 h-8 font-bold bg-yellow-400 rounded-full">{this.props.data.cart.items.length}</span>
          )}
        </button>
      </header>
    );
  }
}
export default Header;
