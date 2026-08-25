import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello from the Home Page</h1>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
