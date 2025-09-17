"use client";
import Image from "next/image";
import { Card, Col, Row } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowHeadLeft from "../../../../public/icons/ArrowHeadLeft";
import ArrowHeadRight from "../../../../public/icons/ArrowHeadRight";
import { Heading } from "../heading";
import { Paragraph } from "../paragraph";
import { testimonials } from "./utils/data";
import Slider from "react-slick";
import StarIcon from "../../../../public/icons/StarIcon";

const Testimonials = () => {
  const CustomArrow = ({ onClick, direction }: any) => (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 ${
        direction === "left" ? "left-[-12px]" : "right-[-8px]"
      } z-50 cursor-pointer bg-white dark:!bg-gray-400 rounded-full flex items-center justify-center hover:!bg-purple-50 shadow-md shadow-magic-purple dark:shadow-sm`}
      onClick={onClick}
    >
      {direction === "left" ? <ArrowHeadLeft /> : <ArrowHeadRight />}
    </div>
  );

  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="mt-20 md:mt-40 relative px-4 py-20 bg-greyBgDark"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <Row justify="center">
          <Col span={24} md={20}>
            <Heading className="text-center mb-9 dark:text-white uppercase">
              reviews{" "}
            </Heading>
          </Col>
        </Row>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className=" p-3 my-3">
              <Card className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 testimonial-card  h-full">
                <div className="flex justify-between w-full mb-5">
                  <Image
                    src={testimonial.image}
                    alt={`Profile of ${testimonial.name}`}
                    width={64}
                    height={64}
                  />
                  <div className="flex gap-1">
                    <StarIcon /> <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>

                <div>
                  <Heading
                    size="lg"
                    className="font-family-poppins-medium text-textPrimary mb-3"
                  >
                    {testimonial.name}
                  </Heading>
                </div>
                <Paragraph className=" text-textPrimary dark:text-gray-300">
                  {testimonial.review}
                </Paragraph>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
