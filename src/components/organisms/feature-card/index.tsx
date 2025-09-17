"use client";

import { Card } from "antd";
import Image from "next/image";

export default function FeatureCard({
  title,
  description,
  image,
  priority,
}: {
  title: string;
  description: string;
  image: string;
  priority?: boolean;
}) {
  return (
    <Card
      hoverable
      cover={
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover"
          priority={priority}
        />
      }
    >
      <Card.Meta
        title={title}
        description={description}
        className="text-center"
      />
      <button
        type="button"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
      >
        Shop Now
      </button>
    </Card>
  );
}
