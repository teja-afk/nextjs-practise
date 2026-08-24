import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) =>
    setTimeout(() => resolve(`iPhone ${id}`), 100),
  );
  return {
    title: `Product ${title}`,
    description: `Details about Product ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about Product {productId}</h1>;
}
