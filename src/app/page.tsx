import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>My Page</h1>
      <Link href="/blog">Blog</Link><br />
      <Link href="/products">products</Link>
    </>
  );
}
