import Link from "next/link"

const productsPage = () => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ]
    return (
        <div>
            <h1>Products</h1>
            <p>Here are the products</p>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}

            </ul>
            <Link href="/">Home</Link>
        </div>
    )
}

export default productsPage