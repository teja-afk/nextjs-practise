import Link from "next/link";

export default function F2() {
  return (
    <h1>
      F2 Page<Link href="/f3">F3</Link>
      <Link href="/f4">F4</Link>
    </h1>
  );
}
