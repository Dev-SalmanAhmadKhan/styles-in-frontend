"use client";
import { Col, Row } from "antd";
import { products } from "./utils/data";
import { ProductCard } from "@/components/shared/product-card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SaleSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Row gutter={[30, 30]} justify="center" className="category-card">
        {products.map((product, index) => (
          <Col
            key={product.id}
            xs={24}
            sm={12}
            lg={8}
            xl={8}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SaleSection;
