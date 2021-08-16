function Menu(props) {
    return (
        <>
        {
            props.allProducts.map(product => (
                <article className="flex-custom my-8 flex justify-between p-4 shadow-custom rounded-lg bg-white" key={product.id}>
                    <div className="flex-primary w-1/3">
                        <img className="w-full object-cover border-2 w-full h-50"src={product.img} alt={product.title}/>
                    </div>
                    <div className="flex flex-col justify-start flex-secondary p-4">
                       <div className="flex justify-between pb-2">
                            <h4 className="text-xl capitalize font-bold">{product.title}</h4>
                            <h4 className="text-xl font-bold text-red-500">${product.price}</h4>
                       </div>
                       <hr className="border-2 border-green-900"></hr>
                        <div className="px-2 py-8">
                            <p>{product.desc}</p>
                        </div>
                    </div>
                   
                </article>
            ))
        }
        </>
    )
}


export default Menu;