"use client";
import { useEffect, useState } from "react";
import { Card, Col, Row, Skeleton } from "antd";
import { Heading } from "@/components/shared/heading";
import Image from "next/image";
import Link from "next/link";
import { fetchSubcategories } from "@/app/api/categories";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Hero_img_3 from "@images/hero_img_3.jpg"; // Import the static image

type UICategory = {
  id: number;
  title: string;
  imageSrc: string;
  slug: string;
};

const SubCategorySection = () => {
  const activeCategoryId = useSelector(
    (state: RootState) => state.category.activeCategoryId
  );

  const [subcategories, setSubcategories] = useState<UICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeCategoryId) {
      setSubcategories([]);
      return;
    }

    const loadSubcategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSubcategories(activeCategoryId);
        const processed = data.map((c) => ({
          id: c.id,
          title: c.title,
          imageSrc: c.icon_path,
          slug: c.slug_store,
        }));
        setSubcategories(processed);
      } catch (err) {
        setError("Failed to load subcategories");
        console.error("Failed to load subcategories", err);
        setSubcategories([]);
      } finally {
        setLoading(false);
      }
    };

    loadSubcategories();
  }, [activeCategoryId]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Heading
          size="2xl"
          className="text-3xl font-philosopher-bold mb-4 text-center text-red-500"
        >
          Error Loading Subcategories
        </Heading>
        <p>Please try again later</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading
        size="2xl"
        className="text-2xl font-philosopher-bold mb-8 text-center text-textPrimary"
      >
        {loading ? "Loading Subcategories..." : "Subcategories"}
      </Heading>

      {loading ? (
        <Row gutter={[30, 30]} justify="center">
          {[...Array(4)].map((_, i) => (
            <Col key={i} xs={24} md={10} lg={6} xl={5}>
              <Skeleton.Image active className="w-full !h-[300px]" />
              <Skeleton active paragraph={{ rows: 1 }} />
            </Col>
          ))}
        </Row>
      ) : subcategories.length > 0 ? (
        <Row gutter={[30, 30]} justify="center" className="category-card">
          {subcategories.map((sub) => (
            <Col key={sub.id} xs={24} md={10} lg={6} xl={5}>
              <Link href={`/subcategory/${sub.slug}`} passHref>
                <div className="cursor-pointer">
                  <Card
                    className="bg-transparent border-none transition-transform duration-500 ease-in-out hover:scale-105"
                    cover={
                      <div className="relative w-[300px] h-[300px]">
                        <Image
                          src={Hero_img_3}
                          alt={sub.title}
                          fill
                          className="object-cover rounded-full"
                          priority={true}
                        />
                      </div>
                    }
                  >
                    <Card.Meta
                      title={
                        <div className="text-center font-philosopher text-2xl text-textPrimary mt-5">
                          {sub.title}
                        </div>
                      }
                    />
                  </Card>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-gray-500">No subcategories found.</p>
      )}
    </div>
  );
};

export default SubCategorySection;
