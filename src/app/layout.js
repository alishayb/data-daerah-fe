import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Work_Sans } from "next/font/google";
import Navbar from "@/commons/sections/navbar/Navbar";

config.autoAddCss = false;
const ws = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Data Daerah",
  description:
    "Simple web application system to display data of Provinsi, Kabupaten / Kota, dan Kecamatan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-row ${ws.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
