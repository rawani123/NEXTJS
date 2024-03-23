const productPage=({params}:{params:{productId:string}})=>{
    return <h1>Product Page {params.productId}</h1>
}

export default productPage;