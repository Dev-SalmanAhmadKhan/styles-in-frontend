"use client";
import { Card, Col, Row, Skeleton } from "antd";
import { Heading } from "@/components/shared/heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchCategories } from "@/app/api/categories";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setActiveCategory } from "@/store/categorySlice";

type APICategory = {
  id: number;
  title: string;
  parent_id: number | null;
  icon_path: string;
  slug_store: string;
  enabled: number;
};

type UICategory = {
  id: number;
  title: string;
  imageSrc: string;
  slug: string;
};

const CategorySection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeCategoryId = useSelector(
    (state: RootState) => state.category.activeCategoryId
  );

  const [categories, setCategories] = useState<UICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const apiData = await fetchCategories();
        const mainCategories = apiData.filter((c) => c.parent_id === null);

        const processedCategories = mainCategories.map((category) => {
          console.log(
            "Processing category:",
            category.title,
            "Image URL:",
            category.icon_path
          );
          return {
            id: category.id,
            title: category.title,
            imageSrc: category.icon_path,
            slug: category.slug_store,
          };
        });

        setCategories(processedCategories);
        if (processedCategories.length > 0 && activeCategoryId === null) {
          dispatch(setActiveCategory(processedCategories[0].id));
        }
      } catch (err) {
        setError("Failed to load categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dispatch, activeCategoryId]);

  const handleCategoryClick = (categoryId: number) => {
    dispatch(setActiveCategory(categoryId));
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Heading
          size="2xl"
          className="text-3xl font-philosopher-bold mb-4 text-center text-red-500"
        >
          Error Loading Categories
        </Heading>
        <p>Please try again later</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton active paragraph={{ rows: 0 }} />
        <Row gutter={[30, 30]} justify="center">
          {[...Array(4)].map((_, i) => (
            <Col key={i} xs={24} md={10} lg={6} xl={5}>
              <Skeleton.Image active className="w-full !aspect-square" />
              <Skeleton active paragraph={{ rows: 1 }} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading
        size="2xl"
        className="text-3xl font-philosopher-bold mb-16 text-center text-textPrimary"
      >
        Handcrafted Embroidery Collections
      </Heading>

      <Row gutter={[30, 30]} justify="center" className="category-card">
        {categories.map((category) => (
          <Col key={category.id} xs={24} md={10} lg={6} xl={5}>
            <div
              className={`cursor-pointer ${
                activeCategoryId === category.id ? "shaddow-md" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <Card
                className={`bg-transparent border-none transition-transform duration-500 ease-in-out hover:scale-105`}
                cover={
                  <div className="relative w-full aspect-square">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-cover rounded-full"
                      priority={true}
                      onError={(e) => {
                        console.error(
                          `Failed to load image for ${category.title}:`,
                          category.imageSrc
                        );
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
                      }}
                    />
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <div className="text-center font-philosopher text-2xl text-textPrimary mt-5">
                      {category.title}
                    </div>
                  }
                />
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategorySection;
