"use client";
import { Input, Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import Logo from "@logos/logo.png";
import FbIcon from "../../../../public/icons/FBIcon";
import TwitterIcon from "../../../../public/icons/TwitterIcon";
import InstaIcon from "../../../../public/icons/InstaIcon";
import LocationIcon from "../../../../public/icons/LocationIcon";
import PhoneIcon from "@icons/PhoneIcon";
import EmailIcon from "@icons/EmailIcon";
import { Heading } from "../heading";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 footer">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Row */}
        <Row gutter={[32, 32]}>
          {/* First Column - Logo & Social */}
          <Col xs={24} sm={12} md={6}>
            <div className="mb-6">
              <div className="h-full w-full mb-5">
                <Link href="/" className="flex items-center">
                  <Image
                    src={Logo}
                    alt="Styles in Ebroide"
                    width={95}
                    height={93}
                    className=""
                  />
                </Link>
              </div>
              <Heading size="lg" className=" font-family-poppins-medium mb-5">
                Social Media
              </Heading>
              <div className="flex gap-8">
                <Link href="#" passHref legacyBehavior>
                  <a className="text-white hover:text-yellow-primary">
                    <FbIcon />
                  </a>
                </Link>
                <Link href="#" passHref legacyBehavior>
                  <a className="text-white hover:text-yellow-primary">
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href="#" passHref legacyBehavior>
                  <a className="text-white hover:text-yellow-primary">
                    <InstaIcon />
                  </a>
                </Link>
              </div>
            </div>
          </Col>

          {/* Second Column - Contact */}
          <Col xs={24} sm={12} md={6}>
            <Heading size="lg" className=" font-family-poppins-medium mb-4">
              Contact Us
            </Heading>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <span>St#3 Baghdad Road, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span>099988777</span>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <span>clotheshouse@gmail.com</span>
              </div>
            </div>
          </Col>

          {/* Third Column - Information */}
          <Col xs={24} sm={12} md={6}>
            <Heading size="lg" className="font-family-poppins-medium mb-5">
              Information
            </Heading>
            <div className="flex flex-col gap-3 footer-link">
              <Link href="#" className="text-white hover:text-yellow-primary">
                Products
              </Link>
              <Link href="#" className="hover:text-yellow-primary">
                Terms
              </Link>
              <Link href="#" className="hover:text-yellow-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-yellow-primary">
                Releases
              </Link>
            </div>
          </Col>

          {/* Fourth Column - Newsletter */}
          <Col xs={24} sm={12} md={6} className="news-letter">
            <Heading size="lg" className="font-family-poppins-medium mb-5">
              Newsletter
            </Heading>
            <Input
              placeholder="Enter your email"
              suffix={
                <button className="bg-yellow-primary text-black px-4 py-3 hover:bg-yellow-primary/90 rounded-none">
                  Submit
                </button>
              }
              className="[&_.ant-input-affix-wrapper]:!p-0 [&_.ant-input-affix-wrapper]:!rounded-none [&_.ant-input]:bg-transparent [&_.ant-input]:text-white [&_.ant-input]:!border-yellow-primary [&_.ant-input]:!p-0 [&_.ant-input]:rounded-l [&_.ant-input]:focus:shadow-none"
            />
          </Col>
        </Row>

        {/* Divider Row */}
        <Row className="mt-12" align="middle">
          <Col span={18}>
            <div className="h-px bg-yellow-primary w-full"></div>
          </Col>
          <Col span={6}>
            <div className="flex gap-6 justify-end footer-link">
              <Link href="#" className="hover:text-yellow-primary">
                Terms
              </Link>
              <Link href="#" className="hover:text-yellow-primary">
                Privacy
              </Link>
              <Link href="#" className="hover:text-yellow-primary">
                Cookies
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
