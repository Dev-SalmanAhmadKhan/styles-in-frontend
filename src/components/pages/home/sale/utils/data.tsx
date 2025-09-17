import { Product } from "@/utils/types";
import Product_img_1 from "@images/img_lg_1.png";
import Product_img_2 from "@images/img_lg_2.png";
import Product_img_3 from "@images/img_lg_3.png";
import Product_img_4 from "@images/img_lg_4.png";
import Product_img_5 from "@images/img_lg_5.png";
import Product_img_6 from "@images/img_lg_6.png";

// Helper function to format prices
export const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

export const products: Product[] = [
  {
    id: 1,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Floral Embroidered Cotton Handkerchief",
    price: 25,
    offPercentage: 20,
    discountedPrice: 25 * 0.8, // 20% off = $20.00
    route: "/products/embroidered-handkerchief",
  },
  {
    id: 2,
    images: [Product_img_3, Product_img_2, Product_img_5],
    title: "Traditional Kashmiri Tablecloth",
    price: 80,
    offPercentage: 15, // Rounded from 12.5% to 15%
    discountedPrice: 80 * 0.85, // $68.00
    route: "/products/kashmiri-tablecloth",
  },
  {
    id: 3,
    images: [Product_img_6, Product_img_3, Product_img_1],
    title: "Silk Embroidered Cushion Cover",
    price: 50,
    offPercentage: 30,
    discountedPrice: 50 * 0.7, // $35.00
    route: "/products/silk-cushion-cover",
  },
  {
    id: 4,
    images: [Product_img_6, Product_img_3, Product_img_1],
    title: "Hand-Embroidered Pashmina Shawl",
    price: 120,
    offPercentage: 15, // Rounded from 16.67% to 15%
    discountedPrice: 120 * 0.85, // $102.00
    route: "/products/pashmina-shawl",
  },
  {
    id: 5,
    images: [Product_img_5, Product_img_3, Product_img_2],
    title: "Embroidered Tote Bag with Tassels",
    price: 35,
    offPercentage: 20,
    discountedPrice: 35 * 0.8, // $28.00
    route: "/products/tote-bag",
  },
  {
    id: 6,
    images: [Product_img_4, Product_img_5, Product_img_6],
    title: "Boho Wall Hanging with Beads",
    price: 65,
    offPercentage: 25, // Rounded from 23% to 25%
    discountedPrice: 65 * 0.75, // $48.75
    route: "/products/wall-hanging",
  },
];
