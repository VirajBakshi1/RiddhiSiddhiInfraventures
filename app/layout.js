import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://riddhisiddhi-infra.com"),
  title: {
    default:
      "Riddhi Siddhi Infraventures — Crafting Distinguished Homes in Nagpur",
    template: "%s · Riddhi Siddhi Infraventures",
  },
  description:
    "Riddhi Siddhi Infraventures designs and develops premium residences in Nagpur's most coveted addresses — built on trust, quality, and uncompromising craftsmanship.",
  keywords: [
    "Riddhi Siddhi Infraventures",
    "Real Estate Nagpur",
    "Luxury Apartments Nagpur",
    "Shankar Nagar 3 BHK",
    "Premium Residences",
    "The Legacy",
  ],
  openGraph: {
    title: "Riddhi Siddhi Infraventures — Distinguished Living in Nagpur",
    description:
      "Premium residences crafted with precision, integrity and an eye for the timeless.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-ivory-50 text-ink-900 font-sans antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
