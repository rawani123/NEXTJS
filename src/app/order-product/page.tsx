"use client";
import { useRouter } from "next/navigation";

const OrderProductPage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    return (
        <div>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Order</button>
        </div>
    );
}

export default OrderProductPage;