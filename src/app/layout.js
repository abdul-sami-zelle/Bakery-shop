import { Geist, Geist_Mono, Baloo_Bhai_2, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const balooBhai = Baloo_Bhai_2({
  variable: "--font-baloo-bhai",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bakery - Delco Farmers Market",
  description: "Bakery - Delco Farmers Market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${balooBhai.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
