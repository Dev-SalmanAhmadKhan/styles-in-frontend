import Product_img_1 from "@images/img_lg_1.png";
import Product_img_2 from "@images/img_lg_2.png";
import Product_img_3 from "@images/img_lg_3.png";
import Product_img_4 from "@images/img_lg_4.png";
import Product_img_5 from "@images/img_lg_5.png";
import Product_img_6 from "@images/img_lg_6.png";
import { Product } from "@/utils/types";

export const products: Product[] = [
  {
    id: 1,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Floral Embroidered Cotton Handkerchief",
    price: 25,
    offPercentage: 15,
    discountedPrice: 21,
    route: "/products/embroidered-handkerchief",
    subCategoryId: 201,
  },
  {
    id: 2,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Traditional Kashmiri Tablecloth",
    price: 80,
    route: "/products/kashmiri-tablecloth",
    subCategoryId: 202,
  },
  {
    id: 3,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Silk Embroidered Cushion Cover",
    price: 50,
    offPercentage: 20,
    discountedPrice: 40,
    route: "/products/silk-cushion-cover",
    subCategoryId: 203,
  },
  {
    id: 4,
    images: [Product_img_6, Product_img_2, Product_img_3],
    title: "Hand-Embroidered Pashmina Shawl",
    price: 120,
    route: "/products/pashmina-shawl",
    subCategoryId: 204,
  },
  {
    id: 5,
    images: [Product_img_5, Product_img_2, Product_img_3],
    title: "Embroidered Tote Bag with Tassels",
    price: 35,
    route: "/products/tote-bag",
    subCategoryId: 205,
  },
  {
    id: 6,
    images: [Product_img_4, Product_img_2, Product_img_3],
    title: "Boho Wall Hanging with Beads",
    price: 65,
    offPercentage: 10,
    discountedPrice: 58,
    route: "/products/wall-hanging",
    subCategoryId: 206,
  },
];
