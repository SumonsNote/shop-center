import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Shop Center",
  description: "A Website by a ShopCenter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
