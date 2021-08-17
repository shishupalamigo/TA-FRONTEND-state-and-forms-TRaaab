import React from "react";
import data from "../data.json";
import Modal from "./Modal";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeIndex : null,
          selectedIndex: null,
          modalClose: false
        }
    }
    handleClick = (index) => {
            this.setState({
                selectedIndex: index,
                modalClose: false
            })
            
    }

    handleMouseOver = (i) => {
        this.setState({
            activeIndex: i
        }
        )
    }

    handleMouseLeave = (i) => {
        this.setState({
            activeIndex: null
        })
    }

    render() {
        // console.log(data);
        return (
            <>
            <section className="flex flex-wrap mt-20 p-5">
            {
                data.map((movie, i) => {
                    return (
                        <div className="w-2/6 mb-10 flex flex-col items-center card" key={i} onMouseOver={() => this.handleMouseOver(i)} onMouseLeave = {() => this.handleMouseLeave(i)}>
                            <div className="flex mr-10 text-center">
                                <img src={movie.Poster} alt={movie.Title} className="w-full h-full"/>
                            </div>
                            <h2 className="text-xl font-bold text-blue-800 mt-5 mb-5">{movie.Title}</h2>
                            <p className="font-medium text-lg text-gray-500 mb-5">Released: {movie.Released}</p>
                            {
                                this.state.activeIndex === i ? <button onClick = {() => this.handleClick(i) }className="bg-green-500 p-2 rounded-lg text-white font-bold">More Info</button> : ""
                            }
                        </div>

                    )
                })
            }
 
            </section>
            <section className={this.state.selectedIndex && !this.state.modalClose ?  "w-custom bg-green-100 top-16 fixed left-20 p-8 overflow-scroll bottom-12 rounded-lg": "hidden"}>
                <div className="flex justify-end">
                             <button className="bg-blue-500 p-2 rounded-lg text-white font-bold" onClick={() => this.setState({
                    selectedIndex: null,
                    modalClose: true
                })}>Close</button>
                 </div>
                {   
                    
                    this.state.selectedIndex ? < Modal {...data[this.state.selectedIndex]}  state={false} /> : ""
                    
                }
                 </section>
            </>
        )
    }
}
export default Card;
