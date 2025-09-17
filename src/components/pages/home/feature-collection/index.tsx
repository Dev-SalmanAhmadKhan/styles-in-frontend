"use client";

import { Row, Col } from "antd";

const features = [
  {
    title: "New Arrivals",
    description: "Discover the latest fashion trends",
  },
  // ... other features
];

export default function FeaturedCollections() {
  return (
    <section className="my-16 max-w-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Collections
        </h2>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} lg={6}></Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
