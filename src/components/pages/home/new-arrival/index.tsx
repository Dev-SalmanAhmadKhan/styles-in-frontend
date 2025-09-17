"use client";
import { Heading } from "@/components/shared/heading";
import { Col, Row } from "antd";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "./utils/data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewArrivals = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 mt-24">
      <Heading
        size="xl"
        className="text-2xl font-philosopher-bold mb-12 text-center text-textPrimary"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        New Arrivals
      </Heading>
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

export default NewArrivals;
