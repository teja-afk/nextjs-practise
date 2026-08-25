import Link from "next/link";

export const metadata = {
  title: "About Page",
}

export default function Home() {
  return (
    <div>
      <h1>Hello from the About Page</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
