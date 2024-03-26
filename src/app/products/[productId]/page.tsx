import { Metadata } from "next";


type Props = {
    params: {
        productId: string;
    }

}

export const generateMatadata=async({params}:Props):Promise<Metadata>=>{
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Product ${params.productId}`);
        },100);
    }
    );
    return {
        title: `${title}`,
        description: `This is the description of product ${params.productId}`, 

    }
}



const productPage=({params}:Props)=>{
    return <h1>Product Page {params.productId}</h1>
}

export default productPage;