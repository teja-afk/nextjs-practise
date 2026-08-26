import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello from the Home Page</h1>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-new-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-new-123?lang=fr">Read in French</Link>
    </>
  );
}
