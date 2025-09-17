"use client";
import { Card, Button, Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { Product } from "@/app/api/categories";
import { StaticImageData } from "next/image";
import Hero_img_3 from "@images/hero_img_3.jpg"; // Import the static image

export const ProductCard = ({ product }: { product: Product }) => {
  const carouselRef = useRef<any>(null);

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const calculateDiscount = (): number => {
    if (product.offPercentage !== undefined) {
      return Math.round(product.offPercentage);
    }
    if (product.discountedPrice !== undefined) {
      return Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      );
    }
    return 0;
  };

  const discount = calculateDiscount();
  const hasDiscount = discount > 0;
  const showDiscountedPrice = product.discountedPrice !== undefined;

  return (
    <div className="relative group overflow-hidden">
      <Link href={product.route} passHref>
        <Card
          className="bg-transparent border-none hover:shadow-lg transition-shadow duration-300 w-full !rounded-none"
          cover={
            <div className="relative overflow-hidden w-full flex justify-center h-[520px] rounded-none">
              <Carousel
                ref={carouselRef}
                autoplay
                effect="fade"
                arrows={false}
                dotPosition="bottom"
                className="w-full relative"
              >
                {/* {product.images?.map((image: string, index: number) => (
                  <div key={index} className="relative flex justify-center">
                    <Image
                      src={image}
                      alt={product.title}
                      width={400}
                      height={600}
                      priority={true}
                      className="object-scale-down transition-transform duration-500 group-hover:scale-105 !rounded-none"
                    />
                  </div>
                ))} */}
                <Image
                  src={Hero_img_3}
                  alt={"/"}
                  fill
                  className="object-cover rounded-full"
                  priority={true}
                />
              </Carousel>

              {/* Centered Navigation Arrows */}
              <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  icon={<LeftOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    carouselRef.current?.prev();
                  }}
                  className="card-btn bg-white/80 hover:bg-white text-black rounded-full h-10 w-10 shadow-lg"
                />
                <Button
                  icon={<RightOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    carouselRef.current?.next();
                  }}
                  className="card-btn bg-white/80 hover:bg-white text-black rounded-full h-10 w-10 shadow-lg"
                />
              </div>

              {/* Bottom Action Buttons */}
              <div className="absolute bottom-4 left-0 right-0 flex flex-col gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2 w-full max-w-[300px]">
                  {" "}
                  <Button
                    className="card-btn bg-white hover:bg-gray-100 text-primary border-2 border-primary rounded-full flex-1 h-12 font-medium"
                    onClick={(e) => e.preventDefault()}
                  >
                    Buy Now
                  </Button>
                  <Button
                    className="card-btn bg-primary hover:bg-primary-dark text-white rounded-full flex-1 h-12 font-medium"
                    onClick={(e) => e.preventDefault()}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          }
        >
          <Card.Meta
            title={
              <div className="mt-4">
                <h3 className="font-philosopher text-xl text-textPrimary mb-2">
                  {product.title}
                </h3>
                <div className="flex gap-2">
                  {hasDiscount && (
                    <span className="font-philosopher line-through text-gray-400 text-xl">
                      {formatPrice(product.price)}
                    </span>
                  )}
                  <span className="font-philosopher-medium text-xl text-gray-900 font-medium">
                    {showDiscountedPrice
                      ? formatPrice(product.discountedPrice!)
                      : formatPrice(product.price)}
                  </span>
                </div>
                <div>
                  <span className="bg-greyBgDark text-gray-900 text-xs px-4 py-2 rounded-2xl block w-fit h-fit my-3">
                    {hasDiscount ? `${discount}% Off` : "New Arrival"}
                  </span>
                </div>
              </div>
            }
          />
        </Card>
      </Link>
    </div>
  );
};
