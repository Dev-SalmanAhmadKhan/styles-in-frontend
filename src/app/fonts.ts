import localFont from "next/font/local";

// Philosopher
export const philosopherRegular = localFont({
  src: "../../public/fonts/philosopher/Philosopher-Regular.ttf",
  variable: "--font-philosopher-regular",
});

export const philosopherBold = localFont({
  src: "../../public/fonts/philosopher/Philosopher-Bold.ttf",
  variable: "--font-philosopher-bold",
});

// Poppins
export const poppinsRegular = localFont({
  src: "../../public/fonts/poppins/Poppins-Regular.woff",
  variable: "--font-poppins-regular",
});

export const poppinsMedium = localFont({
  src: "../../public/fonts/poppins/Poppins-Medium.woff",
  variable: "--font-poppins-medium",
});
