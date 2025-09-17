"use client";

import { useEffect, useState } from "react";
import { Col, Row, Skeleton } from "antd";
import AOS from "aos";
import Link from "next/link";
import { Heading } from "@/components/shared/heading";
import { ProductCard } from "@/components/shared/product-card";
import HeroSection from "@/components/pages/home/hero";
import { fetchAllProducts, Product } from "@/app/api/categories";
import Navbar from "../navbar";
import Testimonials from "../testimonials";
import Footer from "../footer";

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const productsData = await fetchAllProducts();
        setProducts(productsData);
      } catch (err) {
        console.error("Data fetching error:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse font-philosopher-bold text-2xl text-primary">
          Loading all products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4">
        <div className="text-9xl text-primary" data-aos="zoom-in">
          Error
        </div>
        <Heading
          size="2xl"
          className="text-center text-textPrimary"
          data-aos="fade-up"
        >
          {error}
        </Heading>
        <Link
          href="/"
          className="btn-primary"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <Heading
          size="2xl"
          className="text-3xl font-philosopher-bold mb-12 text-center text-textPrimary"
          data-aos="fade-down"
        >
          All Products
        </Heading>

        {products.length > 0 ? (
          <Row gutter={[30, 30]} justify="center">
            {products.map((product, index) => (
              <Col
                key={product.id}
                xs={24}
                sm={12}
                lg={8}
                xl={8}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-20 space-y-8">
            <div className="inline-block text-primary" data-aos="fade-up">
              <div className="inline-block text-primary animate-pulse">
                <svg
                  className="w-32 h-32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <Heading
              size="xl"
              className="text-textPrimary"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              No Products Available Yet
            </Heading>
          </div>
        )}
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default AllProductsPage;
