// app/subcategory/[slug]/ProductDisplay.tsx

"use client";

import { useEffect } from "react";
import AOS from "aos";
import { Col, Row } from "antd";
import { Heading } from "@/components/shared/heading";
import { ProductCard } from "@/components/shared/product-card";
import { Product, APICategory } from "@/app/api/categories";

interface ProductDisplayProps {
  subCategory: APICategory;
  products: Product[];
}

const ProductDisplay = ({ subCategory, products }: ProductDisplayProps) => {
  useEffect(() => {
    // This hook runs only on the client
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading
        size="2xl"
        className="text-3xl font-philosopher-bold mb-12 text-center text-textPrimary"
        data-aos="fade-down"
      >
        {subCategory.title}
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
  );
};

export default ProductDisplay;
