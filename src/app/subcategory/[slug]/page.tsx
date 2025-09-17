// app/subcategory/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Heading } from "@/components/shared/heading";
import HeroSection from "@/components/pages/home/hero";
import {
  fetchProducts,
  fetchSubcategoryBySlug,
  fetchCategories,
  // Ensure Product and APICategory are still imported if needed elsewhere
  Product,
  APICategory,
} from "@/app/api/categories";
import Navbar from "@/components/shared/navbar";
import Testimonials from "@/components/shared/testimonials";
import Footer from "@/components/shared/footer";
// CORRECTED: The file path must be case-sensitive
import ProductDisplay from "./productDisplay";

interface ProductsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const allCategories = await fetchCategories();
  const subcategories = allCategories.filter(
    (category) => category.parent_id !== null
  );

  return subcategories.map((subcategory) => ({
    slug: subcategory.slug_store,
  }));
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  // CORRECTED: Await params to ensure it's fully resolved before using its properties
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const subCategory = await fetchSubcategoryBySlug(slug);

  if (!subCategory) {
    notFound();
  }

  const products = await fetchProducts(subCategory.id);

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Pass fetched data to a client component for interactive features */}
      <ProductDisplay subCategory={subCategory} products={products} />
      <Testimonials />
      <Footer />
    </>
  );
}
