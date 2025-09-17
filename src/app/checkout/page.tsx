"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { clearCart } from "@/store/cartSlice";
import {
  Button,
  Form,
  Input,
  Radio,
  Space,
  Typography,
  Divider,
  message,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { useState } from "react";
import { PrimaryButton } from "@/components/shared/button";

const { Title, Text } = Typography;

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const onFinish = async (values: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call for payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Process payment and place order here
      console.log("Order details:", {
        ...values,
        items: cartItems,
        totalAmount: total,
      });

      dispatch(clearCart());
      message.success("Order placed successfully!");
      router.push("/order-confirmation");
    } catch (error) {
      console.error("Checkout error:", error);
      message.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <Title level={3} className="mb-4">
            Your cart is empty
          </Title>
          <Button type="primary" onClick={() => router.push("/products")}>
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.back()}
          className="mb-6"
        >
          Back to Cart
        </Button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <Title level={2} className="mb-6">
              Checkout
            </Title>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Title level={4} className="mb-4">
                  Shipping Information
                </Title>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                      {
                        min: 2,
                        message: "First name must be at least 2 characters",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="John" />
                  </Form.Item>

                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                      {
                        min: 2,
                        message: "Last name must be at least 2 characters",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Doe" />
                  </Form.Item>
                </div>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input size="large" placeholder="john.doe@example.com" />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Street Address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Input size="large" placeholder="123 Main St" />
                </Form.Item>

                <Form.Item
                  name="address2"
                  label="Apartment, suite, etc. (optional)"
                >
                  <Input size="large" placeholder="Apt 101" />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Form.Item
                    name="city"
                    label="City"
                    rules={[
                      { required: true, message: "Please input your city!" },
                    ]}
                  >
                    <Input size="large" placeholder="New York" />
                  </Form.Item>

                  <Form.Item
                    name="state"
                    label="State/Province"
                    rules={[
                      { required: true, message: "Please input your state!" },
                    ]}
                  >
                    <Input size="large" placeholder="NY" />
                  </Form.Item>

                  <Form.Item
                    name="zip"
                    label="ZIP/Postal Code"
                    rules={[
                      {
                        required: true,
                        message: "Please input your ZIP code!",
                      },
                      {
                        pattern: /^[0-9]+$/,
                        message: "Please enter a valid ZIP code",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="10001" />
                  </Form.Item>
                </div>

                <Form.Item
                  name="country"
                  label="Country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Input size="large" placeholder="United States" />
                </Form.Item>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Title level={4} className="mb-4">
                  Payment Method
                </Title>

                <Form.Item
                  name="paymentMethod"
                  rules={[
                    {
                      required: true,
                      message: "Please select payment method!",
                    },
                  ]}
                >
                  <Radio.Group className="w-full">
                    <Space direction="vertical" className="w-full">
                      <Radio value="creditCard" className="w-full">
                        <div className="flex items-center">
                          <span>Credit/Debit Card</span>
                          <div className="ml-4 flex gap-2">
                            {["visa", "mastercard", "amex", "discover"].map(
                              (card) => (
                                <img
                                  key={card}
                                  src={`/payment-icons/${card}.svg`}
                                  alt={card}
                                  className="h-6"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </Radio>
                      <Radio value="paypal" className="w-full">
                        PayPal
                      </Radio>
                      <Radio value="bankTransfer" className="w-full">
                        Bank Transfer
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Title level={4} className="mb-4">
                  Order Summary
                </Title>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-4">
                    <Text>
                      {item.title} × {item.quantity}
                    </Text>
                    <Text>
                      $
                      {(
                        (item.discountedPrice || item.price) * item.quantity
                      ).toFixed(2)}
                    </Text>
                  </div>
                ))}

                <Divider />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Text>Subtotal</Text>
                    <Text>${subtotal.toFixed(2)}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Shipping</Text>
                    <Text>Free</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Tax</Text>
                    <Text>${tax.toFixed(2)}</Text>
                  </div>
                  <Divider />
                  <div className="flex justify-between">
                    <Text strong>Total</Text>
                    <Text strong>${total.toFixed(2)}</Text>
                  </div>
                </div>
              </div>

              <PrimaryButton
                colorVariant="primary"
                size="large"
                htmlType="submit"
                className="w-full"
                loading={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </PrimaryButton>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
