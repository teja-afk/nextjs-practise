import Link from "next/link";

export default function Home() {
  const productId = 100;
  return (
    <div>
      <h1>Hello from the Product Page</h1>
      <Link href="/">Home</Link>
      <h2><Link href="/products/1">Product 1</Link></h2>
      <h2><Link href="/products/2">Product 2</Link></h2>
      <h2><Link href="/products/3" replace>Product 3</Link></h2> 
      {/* replace will navigate directly to home or root page */}
      <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
    </div>
  );
}
