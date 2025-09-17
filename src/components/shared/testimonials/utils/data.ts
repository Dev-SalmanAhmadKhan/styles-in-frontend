import { StaticImageData } from "next/image";
import Testimonial1 from "@images/testimonials_img_1.png";
import Testimonial2 from "@images/testimonials_img_2.png";
import Testimonial3 from "@images/testimonials_img_3.png";
import Testimonial4 from "@images/testimonials_img_1.png";
import Testimonial5 from "@images/testimonials_img_2.png";
import Testimonial6 from "@images/testimonials_img_3.png";

export interface Testimonial {
  id: string;
  image: StaticImageData;
  name: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    image: Testimonial1,
    name: "Sarah Johnson",
    review:
      "The quality of products exceeded my expectations. Fast shipping and excellent customer service. Will definitely shop again!",
  },
  {
    id: "2",
    image: Testimonial2,
    name: "Michael Chen",
    review:
      "Absolutely love my purchase! The attention to detail is remarkable. Best online shopping experience I've had in years.",
  },
  {
    id: "3",
    image: Testimonial3,
    name: "Emma Wilson",
    review:
      "From browsing to checkout, everything was seamless. The products are even more beautiful in person than in photos.",
  },
  {
    id: "4",
    image: Testimonial4,
    name: "David Martinez",
    review:
      "Impressed with the craftsmanship and durability. Quick responses from support team. Highly recommended!",
  },
  {
    id: "5",
    image: Testimonial5,
    name: "Olivia Smith",
    review:
      "Fantastic selection of unique items. Packaging was eco-friendly and secure. Will be back for more gifts!",
  },
  {
    id: "6",
    image: Testimonial6,
    name: "James Brown",
    review:
      "Perfect blend of style and comfort. The sizing guide was accurate, and delivery was faster than promised.",
  },
];
