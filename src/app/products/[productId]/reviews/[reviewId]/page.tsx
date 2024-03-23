const reviewPage=({params}:
    {params:{
        productId:string,
        reviewId:string
    }})=>{
    return <h1>Review Page {params.productId} {params.reviewId}</h1>
}

export default reviewPage;