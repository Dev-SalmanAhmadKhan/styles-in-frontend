"use client";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@logos/logo.png";
import { useCart } from "@/hooks";

export default function Navbar() {
  const { cartCount } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = 3;

  const navLinks = [
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Collections", path: "/collections" },
    { name: "Sale", path: "/sale" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav className=" bg-white shadow-sm font-poppins h-[101px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Styles in Ebroide"
                width={95}
                height={93}
                className=""
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-8 font-poppins">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-black  hover:text-primary transition-colors text-lg font-normal"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <Badge
                count={cartCount}
                className="[&>.ant-badge-count]:font-poppins"
              >
                <Link
                  href="/cart"
                  className="flex items-center gap-1 !text-black hover:!text-primary"
                >
                  <ShoppingCartOutlined />
                  <span>Cart </span>
                </Link>
              </Badge>

              <Link href="/profile" className="text-black hover:text-[#A47234]">
                <UserOutlined className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          className="md:!hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        className="[&>.ant-drawer-title]:font-poppins"
      >
        <div className="flex flex-col gap-6 font-poppins">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-black  hover:text-primary transition-colors text-lg font-normal"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
}
