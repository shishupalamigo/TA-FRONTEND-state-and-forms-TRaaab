import React from 'react';

class Aside extends React.Component {

  render(props) {
    let allSizes = this.props.data.arrOfSize;
    return (
      <aside className="w-1/4 bg-green-200 flex flex-col items-center mr-10 rounded">
        <div className="flex flex-wrap p-5 mb-10">
          {allSizes.map((size, i) => {
            return (
              <button
                key={size}
                onClick={(event) => this.props.handleSortBySize(event, size)}
                className={
                  this.props.data.activeSize === size
                    ? 'active-btn bg-white w-10 h-10 font-bold mr-3 ml-1 mt-4 rounded-full shadow'
                    : 'bg-white w-10 h-10 font-bold mr-3 ml-1 mt-4 rounded-full hover:bg-blue-500 shadow-md'
                }
              >
                {size}
              </button>
            );
          })}
        </div>
        <button className='bg-indigo-600 hover:bg-red-500 px-3 py-2 rounded text-white font-bold' onClick={this.props.handleResetSort}>
          Reset
        </button>
      </aside>
    );
  }
}
export default Aside;
