function ProductList ({products}){
    return(
        <div>
            <h1>List of products</h1>
            <hr/>
            {products.map((product, index)=>{
                return(
                    <div key={index}>
                    <h2>{product.id}). {product.title} - {product.price} </h2>
                    <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList

export async function getStaticProps(){
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();

    return{
        props:{
            products:data
        },
        revalidate:10
    }
}