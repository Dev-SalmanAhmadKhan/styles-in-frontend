"use client";

import { Result, Button, Typography, Space } from "antd";
import { CheckCircleOutlined, ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { PrimaryButton } from "@/components/shared/button";

const { Title, Text } = Typography;

const OrderConfirmationPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Result
          icon={<CheckCircleOutlined className="text-green-500" />}
          status="success"
          title="Order Placed Successfully!"
          subTitle="Your order number is #123456. We've sent you a confirmation email."
          extra={[
            <Link href="/products" key="continue">
              <PrimaryButton colorVariant="primary" icon={<ShoppingOutlined />}>
                Continue Shopping
              </PrimaryButton>
            </Link>,
            <Link href="/orders" key="view">
              <PrimaryButton colorVariant="secondary">
                View Orders
              </PrimaryButton>
            </Link>,
          ]}
        />

        <div className="bg-white p-6 rounded-lg shadow-sm mt-8 max-w-2xl mx-auto">
          <Title level={4} className="mb-4">
            Order Details
          </Title>

          <Space direction="vertical" className="w-full">
            <div className="flex justify-between">
              <Text strong>Order Number:</Text>
              <Text>#123456</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Date:</Text>
              <Text>{new Date().toLocaleDateString()}</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Total:</Text>
              <Text>$379.98</Text>
            </div>
            <div className="flex justify-between">
              <Text strong>Payment Method:</Text>
              <Text>Credit Card</Text>
            </div>
          </Space>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmationPage;
