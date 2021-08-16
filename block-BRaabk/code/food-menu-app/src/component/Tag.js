import React from "react";
import data from "../data.json";
import Menu from "./Menu";

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTag: "all"
        }
    }
    render() {
     let allCategories = data.map(food => food.category);
        // console.log(loadash.unique(allCategories));
        let categories = allCategories.filter((category, i, array) => array.indexOf(category) === i)
        console.log(categories);
        let allProducts;
        
        if(this.state.activeTag === "all"){
            allProducts = data;
        }else {
            allProducts = data.filter(data => this.state.activeTag === data.category);
        }
        return (
            <div className="">
                <header className="flex justify-center">
            {
                categories.map((category, i) => {
                    return (
                        <>
                        <button className={this.state.activeTag === category ? "active" : ""} onClick={
                           () => {
                            this.setState({
                                activeTag: category
                            })
                        }}>{category.toUpperCase()}</button>
                        </>
                    )
                })                    
            }
            </header>
                            <main className="p-12">
                    <section className="flex justify-between flex-wrap">
                        < Menu allProducts = {allProducts}/>
                    </section>
                </main>
            </div>
        )
    }
}
export default Tag;