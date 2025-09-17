import { StaticImageData } from "next/image";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://ecom.aliusama.dev";
const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  "https://ecom.aliusama.dev/storage/";

// Raw API response types
export type APICategory = {
  id: number;
  title: string;
  parent_id: number | null;
  icon_path: string;
  slug_store: string;
  enabled: number;
};

export type APIProductRaw = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  discounted_price: number | null;
  off_percentage: number | null;
  images: string[];
  subcategory_id: number;
  category_id: number;
};

// UI component types (what the UI expects)
export type Product = {
  id: number;
  title: string;
  images: (string | StaticImageData)[];
  price: number;
  discountedPrice?: number;
  offPercentage?: number;
  route: string;
  description: string;
};

let categoryCache: APICategory[] | null = null;

const getImageUrl = (iconPath: string | null): string => {
  if (!iconPath) {
    // Return a data URL placeholder instead of a missing file
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
  }

  if (iconPath.startsWith("http")) return iconPath;

  // Ensure IMAGE_BASE_URL ends with a slash and iconPath doesn't start with one
  const baseUrl = IMAGE_BASE_URL.endsWith("/")
    ? IMAGE_BASE_URL
    : `${IMAGE_BASE_URL}/`;
  const path = iconPath.startsWith("/") ? iconPath.slice(1) : iconPath;

  // URL encode the path to handle spaces and special characters
  const encodedPath = encodeURIComponent(path).replace(/%2F/g, "/");

  return `${baseUrl}${encodedPath}`;
};

const transformProduct = (rawProduct: APIProductRaw): Product => ({
  id: rawProduct.id,
  title: rawProduct.title,
  images: rawProduct.images.map((img) => getImageUrl(img)),
  price: rawProduct.price,
  discountedPrice: rawProduct.discounted_price || undefined,
  offPercentage: rawProduct.off_percentage || undefined,
  description: rawProduct.description,
  route: `/product/${rawProduct.slug}`,
});

export const fetchCategories = async (): Promise<APICategory[]> => {
  if (categoryCache) return categoryCache;

  try {
    const response = await fetch(`${BASE_URL}/api/categories`, {
      cache: "force-cache",
    });

    if (!response.ok) throw new Error("Failed to fetch categories");

    const { data } = await response.json();
    const enabledCategories = data
      .filter((c: APICategory) => c.enabled === 1)
      .map((c: APICategory) => {
        const imageUrl = getImageUrl(c.icon_path);
        console.log(`Category: ${c.title}, Image URL: ${imageUrl}`); // Debug log
        return {
          ...c,
          icon_path: imageUrl,
        };
      });

    categoryCache = enabledCategories;
    return enabledCategories;
  } catch (error) {
    console.error("Category fetch failed:", error);
    throw error;
  }
};

export const fetchSubcategories = async (
  categoryId: number
): Promise<APICategory[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/categories/${categoryId}/subcategories`
    );

    if (!response.ok) throw new Error("Failed to fetch subcategories");

    const { data } = await response.json();
    return data
      .filter((c: APICategory) => c.enabled === 1)
      .map((c: APICategory) => ({
        ...c,
        icon_path: getImageUrl(c.icon_path),
      }));
  } catch (error) {
    console.error("Subcategory fetch failed:", error);
    throw error;
  }
};

export const fetchSubcategoryBySlug = async (
  slug: string
): Promise<APICategory | null> => {
  try {
    const response = await fetch(`${BASE_URL}/api/categories/by-slug/${slug}`);
    if (!response.ok) {
      return null;
    }
    const { data } = await response.json();
    return {
      ...data,
      icon_path: getImageUrl(data.icon_path),
    };
  } catch (error) {
    console.error("Subcategory fetch by slug failed:", error);
    return null;
  }
};

export const fetchProducts = async (
  subcategoryId: number
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/subcategories/${subcategoryId}/products`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const { data } = await response.json();
    return data.map(transformProduct);
  } catch (error) {
    console.error("Product fetch failed:", error);
    throw error;
  }
};

export const fetchProductDetails = async (
  id: string
): Promise<Product | null> => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!response.ok) return null;
    const { data } = await response.json();
    return transformProduct(data);
  } catch (error) {
    console.error("Product details fetch failed:", error);
    return null;
  }
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const { data } = await response.json();
    return data.map(transformProduct);
  } catch (error) {
    console.error("Products fetch failed:", error);
    throw error;
  }
};
