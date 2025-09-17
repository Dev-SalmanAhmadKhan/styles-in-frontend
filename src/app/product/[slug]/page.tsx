import { fetchProductDetails, Product } from "@/app/api/categories";
import ProductDetailsPage from "@/components/shared/productDetailsPage";
import { notFound } from "next/navigation";
import { FC } from "react";

// This interface should be in the same file as your ProductDetailsPage component
// for proper typing, but is included here for clarity.
interface ProductDetailsProps {
  product: Product;
}
const ProductDetailsPageComponent: FC<ProductDetailsProps> = ({ product }) => {
  // ...
  return <p>Product Details Page</p>;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug.split("-").pop();

  if (!id) {
    return notFound();
  }

  const product = await fetchProductDetails(id);

  if (!product) return notFound();

  return <ProductDetailsPage product={product} />;
}
