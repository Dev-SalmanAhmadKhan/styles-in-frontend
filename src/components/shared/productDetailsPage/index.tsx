"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import {
  Button,
  Col,
  Row,
  message,
  InputNumber,
  Divider,
  Rate,
  Skeleton,
  Tag,
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ArrowLeftOutlined,
  TruckOutlined,
  SyncOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { products, subCategories } from "@/utils/data";
import { Product } from "@/utils/types";
import { Heading } from "@/components/shared/heading";
import Navbar from "../navbar";
import Footer from "../footer";
import { PrimaryButton } from "../button";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetailsPage = ({ product }: ProductDetailsProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  // Get category info for the current product
  const productCategory = product
    ? subCategories.find((cat) => cat.id === product.subCategoryId)
    : null;

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart({ product, quantity }));
    message.success(`${quantity} ${product.title} added to cart`);
    router.push("/cart");
  };

  const handleBuyNow = () => {
    if (!product) return;
    dispatch(addToCart({ product, quantity }));
    router.push("/checkout");
  };

  // Generate specifications based on product type
  const getSpecifications = () => {
    if (!product) return [];

    const commonSpecs = [
      {
        category: "Material & Care",
        items: [
          { name: "Primary Fabric", value: "Premium Natural Materials" },
          { name: "Embroidery Type", value: "Hand-stitched" },
          { name: "Care Instructions", value: "Dry clean recommended" },
        ],
      },
    ];

    if (productCategory?.parentCategoryId === 1) {
      // Dresses
      commonSpecs[0].items.unshift({
        name: "Style",
        value: product.title.includes("A-Line")
          ? "A-Line"
          : product.title.includes("Mermaid")
          ? "Mermaid"
          : "Regular Fit",
      });
      commonSpecs.push({
        category: "Measurements",
        items: [
          { name: "Length", value: "Floor-length" },
          {
            name: "Sleeve",
            value: product.title.includes("Sleeve")
              ? "Full sleeve"
              : "Sleeveless",
          },
        ],
      });
    } else if (productCategory?.parentCategoryId === 2) {
      // Scarves/Shawls
      commonSpecs[0].items.unshift({
        name: "Type",
        value: product.title.includes("Silk")
          ? "Silk"
          : product.title.includes("Pashmina")
          ? "Pashmina"
          : product.title.includes("Cashmere")
          ? "Cashmere"
          : "Wool",
      });
      commonSpecs.push({
        category: "Dimensions",
        items: [
          { name: "Length", value: "72 inches" },
          { name: "Width", value: "24 inches" },
        ],
      });
    } else if (productCategory?.parentCategoryId === 3) {
      // Sarees
      commonSpecs[0].items.unshift({
        name: "Style",
        value: product.title.includes("Banarasi")
          ? "Banarasi"
          : product.title.includes("Kantha")
          ? "Kantha"
          : "Traditional",
      });
      commonSpecs.push({
        category: "Dimensions",
        items: [
          { name: "Length", value: "5.5 meters" },
          { name: "Blouse Piece", value: "Included" },
        ],
      });
    }

    return commonSpecs;
  };

  // Generate mock reviews
  const getReviews = () => {
    if (!product) return [];

    const baseReviews = [
      {
        id: 1,
        author: "Priya Sharma",
        rating: 5,
        date: "2023-10-15",
        content:
          "Beautiful embroidery and perfect fit! The quality exceeded my expectations.",
      },
      {
        id: 2,
        author: "Rahul Patel",
        rating: 4,
        date: "2023-09-28",
        content: "Lovely product, but the delivery took longer than expected.",
      },
    ];

    // Add specific comments based on product type
    if (productCategory?.parentCategoryId === 1) {
      // Dresses
      baseReviews[0].content =
        "The dress fits perfectly and the embroidery is exquisite!";
    } else if (productCategory?.parentCategoryId === 2) {
      // Scarves/Shawls
      baseReviews[0].content =
        "The fabric is so soft and the embroidery is delicate and beautiful.";
    } else if (productCategory?.parentCategoryId === 3) {
      // Sarees
      baseReviews[0].content =
        "Authentic craftsmanship, the zari work is stunning!";
    }

    return baseReviews;
  };

  const specifications = getSpecifications();
  const reviews = getReviews();
  const discountPercentage =
    product.offPercentage ||
    (product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-3">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.back()}
          className="mb-2"
        >
          Back to Products
        </Button>

        <Row gutter={[48, 32]} align="top">
          <Col xs={24} md={10} lg={9} className="flex justify-center">
            <div className="relative w-full h-[300px] md:h-[600px]">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="md:hidden w-full mt-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 relative border-2 rounded-md overflow-hidden transition-colors ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-gray-200"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} md={14} lg={10}>
            {/* Category Breadcrumb */}
            {productCategory && (
              <div className="mb-4 text-sm text-gray-500">
                <Link
                  href={`/subcategory/${productCategory.id}`}
                  className="hover:text-primary !text-gray-500"
                >
                  {productCategory.title}
                </Link>
              </div>
            )}
            <div className="sticky top-24">
              <Heading size="xl" className="mb-6 text-textPrimary">
                {product.title}
              </Heading>
              {/* Thumbnail Gallery */}
              <div className="hidden md:block mt-2">
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-24 h-24 relative border-2 rounded-md overflow-hidden transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-gray-200"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-6">
                {product.discountedPrice || product.offPercentage ? (
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-primary">
                      $
                      {product.discountedPrice
                        ? product.discountedPrice.toFixed(2)
                        : (
                            product.price *
                            (1 - (product.offPercentage || 0) / 100)
                          ).toFixed(2)}
                    </span>
                    <span className="text-xl line-through text-gray-400">
                      ${product.price.toFixed(2)}
                    </span>
                    <Tag color="red" className="text-sm">
                      {product.offPercentage
                        ? product.offPercentage
                        : Math.round(
                            ((product.price - (product.discountedPrice || 0)) /
                              product.price) *
                              100
                          )}
                      % OFF
                    </Tag>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Rating and Reviews */}
              <div className="mb-6 flex items-center gap-2">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={4.5}
                  className="text-sm"
                />
                <span className="text-gray-500">
                  ({reviews.length} reviews)
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  {product.description ||
                    `This exquisite ${productCategory?.title.toLowerCase()} features intricate hand embroidery using traditional techniques. The ${
                      product.title
                    } is crafted from premium materials to ensure both beauty and durability.`}
                </p>
                <ul className="space-y-2">
                  {[
                    "Hand-embroidered with premium threads",
                    "Made from high-quality natural fabrics",
                    "Designed for comfort and durability",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4">
                <PrimaryButton
                  colorVariant="secondary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  onClick={handleAddToCart}
                  className="h-12 w-46"
                >
                  Add to Cart
                </PrimaryButton>

                <PrimaryButton
                  colorVariant="primary"
                  size="large"
                  onClick={handleBuyNow}
                  className="h-12 bg-primary text-white hover:bg-primary-dark w-46"
                >
                  Buy Now
                </PrimaryButton>
              </div>
            </div>
          </Col>
          <Col xs={24} md={6} lg={5}>
            <div className="bg-gray-50 px-4 rounded-lg sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Why Buy From Us</h3>

              <div className="space-y-4">
                {/* Free Shipping */}
                <div className="flex items-start gap-3">
                  <div className="text-primary text-xl">
                    <TruckOutlined />
                  </div>
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                  </div>
                </div>

                {/* Easy Returns */}
                <div className="flex items-start gap-3">
                  <div className="text-primary text-xl">
                    <SyncOutlined />
                  </div>
                  <div>
                    <h4 className="font-medium">Easy Returns</h4>
                  </div>
                </div>

                {/* Secure Payment */}
                <div className="flex items-start gap-3">
                  <div className="text-primary text-xl">
                    <SafetyOutlined />
                  </div>
                  <div>
                    <h4 className="font-medium">Secure Payment</h4>
                  </div>
                </div>

                {/* Authentic Products */}
                <div className="flex items-start gap-3">
                  <div className="text-primary text-xl">
                    <CheckCircleOutlined />
                  </div>
                  <div>
                    <h4 className="font-medium">Authentic Products</h4>
                  </div>
                </div>

                {/* Customer Support */}
                <div className="flex items-start gap-3">
                  <div className="text-primary text-xl">
                    <CustomerServiceOutlined />
                  </div>
                  <div>
                    <h4 className="font-medium">24/7 Support</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab} {tab === "reviews" && `(${reviews.length})`}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <>
                <h4 className="text-lg font-semibold mb-4">Product Details</h4>
                <p className="text-gray-700">
                  {`This ${productCategory?.title.toLowerCase()} features ${
                    product.title.includes("Zari") ||
                    product.title.includes("Zardosi")
                      ? "intricate metallic thread work"
                      : "delicate hand embroidery"
                  } using traditional techniques.`}
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Care Instructions",
                      content:
                        productCategory?.parentCategoryId === 2
                          ? "Dry clean or gentle hand wash"
                          : "Dry clean recommended",
                    },
                    {
                      title: "Artisan Story",
                      content:
                        "Handcrafted by skilled artisans using traditional techniques",
                    },
                    {
                      title: "Materials",
                      content: product.title.includes("Silk")
                        ? "100% Pure Silk"
                        : product.title.includes("Linen")
                        ? "Premium Linen"
                        : product.title.includes("Cotton")
                        ? "High-quality Cotton"
                        : "Natural Fabrics",
                    },
                    {
                      title: "Shipping & Returns",
                      content: "Free shipping & 30-day return policy",
                    },
                  ].map((detail, index) => (
                    <div key={index}>
                      <h5 className="font-semibold mb-2">{detail.title}</h5>
                      <p className="text-gray-600">{detail.content}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-6">
                <h4 className="text-lg font-semibold mb-4">
                  Technical Specifications
                </h4>
                {specifications.map((spec, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <h5 className="font-medium text-gray-900">
                      {spec.category}
                    </h5>
                    <ul className="mt-2 space-y-2">
                      {spec.items.map((item, i) => (
                        <li key={i} className="flex justify-between">
                          <span className="text-gray-600">{item.name}</span>
                          <span className="text-gray-900">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-8">
                <h4 className="text-lg font-semibold mb-4">
                  Customer Reviews ({reviews.length})
                </h4>
                {reviews.length ? (
                  reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-100 pb-6"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <Rate
                          disabled
                          defaultValue={review.rating}
                          className="text-sm"
                        />
                        <span className="font-medium">{review.author}</span>
                        <span className="text-gray-500 text-sm">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No reviews yet. Be the first to review!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
