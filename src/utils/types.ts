import { StaticImageData } from "next/image";
export interface Category {
  id: number;
  title: string;
  imageSrc: any;
  route: string;
  subcategories?: SubCategory[];
}

export interface SubCategory {
  id: number;
  parentCategoryId: number;
  title: string;
  imageSrc: any;
  route: string;
}

export interface Product {
  images: (string | StaticImageData)[];
  id: number;
  imageSrc?: any;
  title: string;
  price: number;
  offPercentage?: number;
  discountedPrice?: number;
  route: string;
  subCategoryId?: number;
  originalPrice?: string;
  description: string;
}
