import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingCallButton from "@/components/common/CallButton";
import ScrollToTop from "@/components/common/ScrollToTop";

const barlow =Barlow_Condensed({
  subsets: ["latin"],
   weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Urgent Care Ambulance Service",
  description: "24/7 Emergency Ambulance Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="min-h-screen flex flex-col">
      <ScrollToTop/>
        <TopBar />
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
           <FloatingCallButton />
      </body>
    </html>
  );
}
