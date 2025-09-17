import { Row, Col } from "antd";
import Image from "next/image";
import Sale_bg_1 from "@images/sale_img_1.png";
import Sale_bg_2 from "@images/sale_img_2.png";
import { Heading } from "@/components/shared/heading";
import { Paragraph } from "@/components/shared/paragraph";

const SaleBanner = () => {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] my-20">
      {/* Mobile Background Image (hidden on large screens) */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/mobile-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-greyBgDark z-10"></div>
      </div>

      <Row
        justify="space-between"
        align="middle"
        className="h-full relative z-20 bg-greyBgDark"
      >
        {/* Left Image Column (hidden on mobile) */}
        <Col xs={0} lg={8} className="h-full hidden lg:block">
          <Image
            src={Sale_bg_1}
            alt="Sale"
            className="w-full h-full object-cover"
          />
        </Col>

        {/* Center Content Column */}
        <Col
          xs={24}
          lg={8}
          className="text-center p-8 relative z-30 bg-greyBgDark"
        >
          <div className="text-white lg:text-black ">
            <Heading
              size="4xl"
              className="text-4xl font-bold text-primary uppercase"
            >
              sale
            </Heading>
            <Paragraph
              size="xxl"
              className=" font-family-poppins-medium text-textSecondary"
            >
              Up To{" "}
            </Paragraph>
            <Heading
              size="3xl"
              className="text-4xl font-family-poppins-medium uppercase "
            >
              70% off
            </Heading>
            <Paragraph
              size="xxl"
              className=" font-family-poppins-medium text-textSecondary"
            >
              On Entire Stock{" "}
            </Paragraph>
          </div>
        </Col>

        {/* Right Image Column (hidden on mobile) */}
        <Col xs={0} lg={8} className="h-full hidden lg:block">
          <Image
            src={Sale_bg_2}
            alt="Sale"
            className="w-full h-full object-cover"
          />
        </Col>
      </Row>
    </section>
  );
};

export default SaleBanner;
