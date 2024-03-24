import { notFound } from "next/navigation";

const reviewPage=({params}:
    {params:{
        productId:string,
        reviewId:string
    }})=>{
        if(parseInt(params.reviewId)>1000){
            return notFound()
        }
    return <h1>Review Page {params.productId} {params.reviewId}</h1>
}

export default reviewPage;