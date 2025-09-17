"use client";

import Image from "next/image";
import { Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Hero_img_1 from "@images/hero_img_1.jpg";
import Hero_img_2 from "@images/hero_img_2.jpg";
import Hero_img_3 from "@images/hero_img_3.jpg";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";
import { PrimaryButton } from "@/components/shared/button";

const carouselImages = [Hero_img_1, Hero_img_2, Hero_img_3];

const ArrowButton = ({
  icon: Icon,
  onClick,
}: {
  icon: React.ElementType;
  onClick?: () => void;
}) => (
  <div
    className="bg-primary rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
    onClick={onClick}
  >
    <Icon className="text-white text-xl md:text-2xl" />
  </div>
);

const PrevArrow = (props: any) => {
  const { currentSlide, slideCount, ...rest } = props;
  return (
    <div
      className="absolute md:right-40 right-4 md:top-1/2 bottom-24 md:bottom-auto md:-translate-y-1/2 z-10"
      {...rest}
    >
      <ArrowButton icon={LeftOutlined} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { currentSlide, slideCount, ...rest } = props;
  return (
    <div
      className="absolute md:left-40 left-4 md:top-1/2 bottom-24 md:bottom-auto md:-translate-y-1/2 z-10"
      {...rest}
    >
      <ArrowButton icon={RightOutlined} />
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative h-screen mb-24 container-fluid">
      <Row>
        <Col span={24}>
          <Carousel
            autoplay
            effect="fade"
            arrows
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            dotPosition="bottom"
            className="h-full relative"
          >
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className="relative h-screen lg:h-[120vh] w-full"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Fashion Collection ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="100vw"
                    placeholder="blur"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent" />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <div className="absolute inset-0 flex items-end justify-center mb-32">
        <div className="text-center text-white max-w-4xl px-4">
          <Heading size="2xl" className="mb-6">
            Discover Your Perfect Style
          </Heading>

          <Paragraph size="xl" className="mb-8">
            Explore our curated collection of premium fashion items
          </Paragraph>

          <PrimaryButton
            btnSize="lg"
            colorVariant="primary"
            className="bg-primary"
          >
            Shop Now
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
