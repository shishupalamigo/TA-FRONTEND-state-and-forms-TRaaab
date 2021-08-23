import React from "react";

class Hero extends React.Component {

    render(props) {
      return (
        <section className='w-full'>
          <div className='flex justify-between'>
            <h4>{this.props.data.productCount ? this.props.data.productCount : this.props.data.length} Products found</h4>
            <div className='flex center'>
              <h4 className="text-lg mr-2">Sort :  </h4>
              <select className="p-2 rounded"
                onChange={(event) => {
                  this.props.handleSortByMRP(event);
                }}
              >
                <option value='normal'>Normal</option>
                <option value='desc'>Highest to Lowest</option>
                <option value='asc'>Lowest to Highest</option>
              </select>
            </div>
          </div>
        </section>
      );
    }
  }
  
  export default Hero;