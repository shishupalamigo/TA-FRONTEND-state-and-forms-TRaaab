import React from "react";
import Product from "./Product";

class Products extends React.Component {

    render(props) {
      return (
        <section className='w-full'>
          <div className='flex w-full flex-wrap justify-around'>
            {this.props.data.arrOfItems.map((ele) => {
              return (
                <Product
                  key={ele.id}
                  ele={ele}
                  handleAddToCart={this.props.handleAddToCart}
                />
              );
            })}
          </div>
        </section>
      );
    }
  }
  
  export default Products;