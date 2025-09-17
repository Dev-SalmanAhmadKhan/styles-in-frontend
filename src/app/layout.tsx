import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import {
  philosopherRegular,
  philosopherBold,
  poppinsRegular,
  poppinsMedium,
} from "./fonts";
import "./../styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReduxProvider from "@/lib/provider";

export const metadata: Metadata = {
  title: "Styles In Ebroide",
  description: "Premium Fashion Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${philosopherRegular.variable} ${philosopherBold.variable} ${poppinsRegular.variable} ${poppinsMedium.variable}`}
    >
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#3b82f6",
                borderRadius: 8,
              },
            }}
          >
            <main className="min-h-screen  bg-gray-50 p-0">
              {" "}
              <ReduxProvider>{children}</ReduxProvider>
            </main>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
