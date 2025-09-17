"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
import { Button, Table, Space, InputNumber, Typography } from "antd";
import { ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Image from "next/image";
import { PrimaryButton } from "@/components/shared/button";

const { Title, Text } = Typography;

const CartPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (id: number, value: number | null) => {
    if (value !== null && value > 0) {
      dispatch(updateQuantity({ id, quantity: value }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <div className="flex items-center">
          <div className="relative w-16 h-16 mr-4">
            <Image
              src={record.images[0]}
              alt={text}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number, record: any) => (
        <Text>
          $
          {record.discountedPrice
            ? record.discountedPrice.toFixed(2)
            : price.toFixed(2)}
          {record.discountedPrice && (
            <Text delete className="ml-2 text-gray-400">
              ${price.toFixed(2)}
            </Text>
          )}
        </Text>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity: number, record: any) => (
        <InputNumber
          min={1}
          max={10}
          value={quantity}
          onChange={(value) => handleQuantityChange(record.id, value)}
        />
      ),
    },
    {
      title: "Total",
      key: "total",
      render: (text: string, record: any) => (
        <Text strong>
          $
          {((record.discountedPrice || record.price) * record.quantity).toFixed(
            2
          )}
        </Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: any) => (
        <Button type="link" danger onClick={() => handleRemoveItem(record.id)}>
          Remove
        </Button>
      ),
    },
  ];

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
          Continue Shopping
        </Button>

        <Title level={2} className="mb-6">
          Your Shopping Cart
        </Title>

        {cartItems.length > 0 ? (
          <>
            <Table
              columns={columns}
              dataSource={cartItems}
              pagination={false}
              className="mb-8"
              rowKey="id"
            />

            <div className="flex justify-end">
              <div className="bg-gray-50 p-6 rounded-lg w-full md:w-1/2">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <Text>Subtotal</Text>
                    <Text strong>${subtotal.toFixed(2)}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Shipping</Text>
                    <Text strong>Free</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Tax</Text>
                    <Text strong>${tax.toFixed(2)}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text strong>Total</Text>
                    <Text strong>${total.toFixed(2)}</Text>
                  </div>
                </div>

                <PrimaryButton
                  colorVariant="primary"
                  size="large"
                  block
                  onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                </PrimaryButton>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <ShoppingCartOutlined className="text-4xl mb-4 text-gray-400" />
            <Title level={4} className="mb-4">
              Your cart is empty
            </Title>
            <Link href="/products">
              <PrimaryButton colorVariant="primary">
                Continue Shopping
              </PrimaryButton>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
