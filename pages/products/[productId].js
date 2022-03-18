import { useRouter } from "next/router"

function Product({product}){
    const router = useRouter();

    if (router.isFallback) {
        return(<h1>Loading.....</h1>)
    }

    return (
        <div>
            <h1>Product Details</h1>
            <h2>{product.id}||{product.title}||{product.price}</h2>
        </div>
    )
}

export default Product

export async function getStaticPaths(){
    return{
        paths:[{params:{"productId":"1"}},{params:{"productId":"2"}}],
        fallback:true
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const productData = await response.json();

    return{
        props:{
            product:productData
        },
        revalidate:10
    }
}