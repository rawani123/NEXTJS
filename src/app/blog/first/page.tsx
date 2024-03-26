import { Metadata } from "next";

export const metadata: Metadata = {
    title: "First Blog Page",
    description: "This is the first blog page",
};


export default function FirstBlog() {
    return <h1>First Blog Page</h1>;
}