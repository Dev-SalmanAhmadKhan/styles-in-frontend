const BASE_URL = "https://ecom.aliusama.dev";
const IMAGE_BASE_URL = `${BASE_URL}/storage/`;

export type APIProduct = {
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

export const fetchProducts = async (
  subcategoryId: number
): Promise<APIProduct[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/subcategories/${subcategoryId}/products`
    );

    if (!response.ok) throw new Error("Failed to fetch products");

    const { data } = await response.json();
    return data.map((product: any) => ({
      ...product,
      images: product.images.map((img: string) => `${IMAGE_BASE_URL}${img}`),
      slug: product.slug || product.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  } catch (error) {
    console.error("Product fetch failed:", error);
    throw error;
  }
};

export const fetchProductDetails = async (
  id: string
): Promise<APIProduct | null> => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${id}`);

    if (!response.ok) return null;

    const { data } = await response.json();
    return {
      ...data,
      images: data.images.map((img: string) => `${IMAGE_BASE_URL}${img}`),
      slug: data.slug || data.title.toLowerCase().replace(/\s+/g, "-"),
    };
  } catch (error) {
    console.error("Product details fetch failed:", error);
    return null;
  }
};

export const fetchAllProducts = async (): Promise<APIProduct[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/products`);

    if (!response.ok) throw new Error("Failed to fetch products");

    const { data } = await response.json();
    return data.map((product: any) => ({
      ...product,
      images: product.images.map((img: string) => `${IMAGE_BASE_URL}${img}`),
      slug: product.slug || product.title.toLowerCase().replace(/\s+/g, "-"),
    }));
  } catch (error) {
    console.error("Products fetch failed:", error);
    throw error;
  }
};
