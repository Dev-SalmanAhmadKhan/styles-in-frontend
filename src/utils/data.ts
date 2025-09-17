// src/data/categories.ts
import { Category, SubCategory, Product } from "./types";
import category1 from "@images/category_1_thumbnail.png";
import category2 from "@images/category_2_thumbnail.png";
import category3 from "@images/category_3_thumbnail.png";
import category4 from "@images/category_4_thumbnail.png";
import Product_img_1 from "@images/img_lg_1.png";
import Product_img_2 from "@images/img_lg_2.png";
import Product_img_3 from "@images/img_lg_3.png";
import Product_img_4 from "@images/img_lg_4.png";
import Product_img_5 from "@images/img_lg_5.png";
import Product_img_6 from "@images/img_lg_6.png";
// Main Categories
export const mainCategories: Category[] = [
  {
    id: 1,
    imageSrc: category1,
    title: "Embroidered Dresses",
    route: "/embroidered-dresses",
  },
  {
    id: 2,
    imageSrc: category2,
    title: "Embroidered Scarves & Shawls",
    route: "/embroidered-scarves-shawls",
  },
  {
    id: 3,
    imageSrc: category3,
    title: "Embroidered Traditional Sarees",
    route: "/embroidered-sarees",
  },
  {
    id: 4,
    imageSrc: category4,
    title: "Embroidered Seasonal Collections",
    route: "/seasonal-embroidery",
  },
];

// Sub Categories
export const subCategories: SubCategory[] = [
  // Embroidered Dresses
  {
    id: 101,
    parentCategoryId: 1,
    title: "Casual Embroidered Dresses",
    imageSrc: category1,
    route: "/casual-embroidered-dresses",
  },
  {
    id: 102,
    parentCategoryId: 1,
    title: "Embroidered Evening Gowns",
    imageSrc: category1,
    route: "/embroidered-evening-gowns",
  },
  {
    id: 103,
    parentCategoryId: 1,
    title: "Embroidered Bridal Dresses",
    imageSrc: category1,
    route: "/embroidered-bridal-dresses",
  },
  {
    id: 104,
    parentCategoryId: 1,
    title: "Embroidered Cocktail Dresses",
    imageSrc: category1,
    route: "/embroidered-cocktail-dresses",
  },

  // Embroidered Scarves & Shawls
  {
    id: 201,
    parentCategoryId: 2,
    title: "Embroidered Silk Scarves",
    imageSrc: category2,
    route: "/embroidered-silk-scarves",
  },
  {
    id: 202,
    parentCategoryId: 2,
    title: "Embroidered Woolen Shawls",
    imageSrc: category2,
    route: "/embroidered-woolen-shawls",
  },
  {
    id: 203,
    parentCategoryId: 2,
    title: "Zari Embroidered Stoles",
    imageSrc: category2,
    route: "/zari-embroidered-stoles",
  },
  {
    id: 204,
    parentCategoryId: 2,
    title: "Embroidered Bridal Dupattas",
    imageSrc: category2,
    route: "/embroidered-bridal-dupattas",
  },

  // Embroidered Traditional Sarees
  {
    id: 301,
    parentCategoryId: 3,
    title: "Zardosi Embroidered Sarees",
    imageSrc: category3,
    route: "/zardosi-sarees",
  },
  {
    id: 302,
    parentCategoryId: 3,
    title: "Kantha Stitch Sarees",
    imageSrc: category3,
    route: "/kantha-stitch-sarees",
  },
  {
    id: 303,
    parentCategoryId: 3,
    title: "Chikankari Sarees",
    imageSrc: category3,
    route: "/chikankari-sarees",
  },
  {
    id: 304,
    parentCategoryId: 3,
    title: "Phulkari Embroidery Sarees",
    imageSrc: category3,
    route: "/phulkari-sarees",
  },

  // Seasonal Embroidery Collections
  {
    id: 401,
    parentCategoryId: 4,
    title: "Summer Embroidery Collection",
    imageSrc: category4,
    route: "/summer-embroidery",
  },
  {
    id: 402,
    parentCategoryId: 4,
    title: "Winter Embroidery Collection",
    imageSrc: category4,
    route: "/winter-embroidery",
  },
  {
    id: 403,
    parentCategoryId: 4,
    title: "Festival Embroidery Specials",
    imageSrc: category4,
    route: "/festival-embroidery",
  },
  {
    id: 404,
    parentCategoryId: 4,
    title: "Bridal Season Embroidery",
    imageSrc: category4,
    route: "/bridal-embroidery",
  },
];

export const products: Product[] = [
  // Casual Embroidered Dresses (101)
  {
    id: 1011,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Floral Cotton Embroidered Sundress",
    description:
      "A breezy cotton sundress with delicate floral embroidery, perfect for casual summer days.",
    price: 79.99,
    route: "/product/1011",
    subCategoryId: 101,
    offPercentage: 15,
    discountedPrice: 67.99,
  },
  {
    id: 1012,
    images: [Product_img_4, Product_img_5, Product_img_6],
    title: "Linen A-Line Embroidered Dress",
    description:
      "This elegant A-line dress features soft linen fabric and intricate embroidery for a timeless look.",
    price: 95.5,
    route: "/product/1012",
    subCategoryId: 101,
  },

  // Embroidered Evening Gowns (102)
  {
    id: 1021,
    images: [Product_img_1, Product_img_3, Product_img_5],
    title: "Silk Zari Embroidered Gown",
    description:
      "A luxurious silk gown with shimmering Zari embroidery, ideal for formal occasions and receptions.",
    price: 299.99,
    route: "/product/1021",
    subCategoryId: 102,
    offPercentage: 10,
    discountedPrice: 269.99,
  },
  {
    id: 1022,
    images: [Product_img_2, Product_img_4, Product_img_6],
    title: "Sequined Mermaid Evening Gown",
    description:
      "Turn heads in this sequined mermaid gown with intricate embroidery and a flattering silhouette.",
    price: 349.99,
    route: "/product/1022",
    subCategoryId: 102,
  },

  // Embroidered Bridal Dresses (103)
  {
    id: 1031,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Hand-Embroidered Bridal Lehenga",
    description:
      "Exquisite bridal lehenga handcrafted with detailed embroidery for your special day.",
    price: 899.99,
    route: "/product/1031",
    subCategoryId: 103,
    offPercentage: 20,
    discountedPrice: 719.99,
  },
  {
    id: 1032,
    images: [Product_img_4, Product_img_5, Product_img_6],
    title: "Zardozi Work Wedding Gown",
    description:
      "Traditional Zardozi embroidery adds opulence to this regal wedding gown.",
    price: 1299.99,
    route: "/product/1032",
    subCategoryId: 103,
  },

  // Embroidered Cocktail Dresses (104)
  {
    id: 1041,
    images: [Product_img_1, Product_img_3, Product_img_5],
    title: "Beaded Cocktail Party Dress",
    description:
      "A chic cocktail dress adorned with beads and embroidery—perfect for evening parties.",
    price: 159.99,
    route: "/product/1041",
    subCategoryId: 104,
  },
  {
    id: 1042,
    images: [Product_img_2, Product_img_4, Product_img_6],
    title: "Lace Embroidered Mini Dress",
    description:
      "Short and stylish, this mini dress features elegant lace embroidery for a modern twist.",
    price: 125.0,
    route: "/product/1042",
    subCategoryId: 104,
    offPercentage: 15,
    discountedPrice: 106.25,
  },

  // Embroidered Silk Scarves (201)
  {
    id: 2011,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Hand-Embroidered Silk Scarf",
    description:
      "Luxurious silk scarf with delicate hand embroidery—an elegant touch to any outfit.",
    price: 45.99,
    route: "/product/2011",
    subCategoryId: 201,
  },
  {
    id: 2012,
    images: [Product_img_4, Product_img_5, Product_img_6],
    title: "Kashmiri Aari Embroidery Dupatta",
    description:
      "A fine dupatta showcasing traditional Kashmiri Aari embroidery for a cultural accent.",
    price: 89.99,
    route: "/product/2012",
    subCategoryId: 201,
    offPercentage: 10,
    discountedPrice: 80.99,
  },

  // Embroidered Woolen Shawls (202)
  {
    id: 2021,
    images: [Product_img_1, Product_img_3, Product_img_5],
    title: "Pashmina Embroidered Shawl",
    description:
      "Soft and warm Pashmina shawl enhanced with classic embroidery work.",
    price: 129.99,
    route: "/product/2021",
    subCategoryId: 202,
  },
  {
    id: 2022,
    images: [Product_img_2, Product_img_4, Product_img_6],
    title: "Cashmere Zari Embroidery Wrap",
    description:
      "Elegant wrap made from fine Cashmere with rich Zari embroidery detailing.",
    price: 199.99,
    route: "/product/2022",
    subCategoryId: 202,
    offPercentage: 15,
    discountedPrice: 169.99,
  },

  // Zari Embroidered Stoles (203)
  {
    id: 2031,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Banarasi Zari Embroidered Stole",
    description:
      "Traditional Banarasi stole with shimmering Zari embroidery for a festive look.",
    price: 75.0,
    route: "/product/2031",
    subCategoryId: 203,
  },
  {
    id: 2032,
    images: [Product_img_4, Product_img_5, Product_img_6],
    title: "Tussar Silk Embroidered Stole",
    description:
      "Crafted in Tussar silk, this stole features beautiful embroidery for everyday elegance.",
    price: 65.99,
    route: "/product/2032",
    subCategoryId: 203,
  },

  // Embroidered Traditional Sarees (301-304)
  {
    id: 3011,
    images: [Product_img_1, Product_img_3, Product_img_5],
    title: "Gold Zardosi Banarasi Saree",
    description:
      "Celebrate tradition with this Banarasi saree embellished with gold Zardosi embroidery.",
    price: 299.99,
    route: "/product/3011",
    subCategoryId: 301,
    offPercentage: 10,
    discountedPrice: 269.99,
  },
  {
    id: 3021,
    images: [Product_img_2, Product_img_4, Product_img_6],
    title: "Red Kantha Stitch Cotton Saree",
    description:
      "Bright red cotton saree featuring the timeless Kantha hand stitch embroidery.",
    price: 149.99,
    route: "/product/3021",
    subCategoryId: 302,
  },

  // Seasonal Collections (401-404)
  {
    id: 4011,
    images: [Product_img_1, Product_img_2, Product_img_3],
    title: "Floral Summer Embroidery Dress",
    description:
      "Light and colorful summer dress with floral embroidery for a fresh seasonal vibe.",
    price: 89.99,
    route: "/product/4011",
    subCategoryId: 401,
  },
  {
    id: 4021,
    images: [Product_img_4, Product_img_5, Product_img_6],
    title: "Woolen Embroidered Coat",
    description:
      "Stay cozy and stylish with this woolen coat adorned with sophisticated embroidery.",
    price: 199.99,
    route: "/product/4021",
    subCategoryId: 402,
    offPercentage: 20,
    discountedPrice: 159.99,
  },
];
