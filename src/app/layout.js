import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
	title: 'Building app',
  icons: {
    icon: '/icon.png', // /public path
  },
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
  <title>{metadata.title}</title>
</Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
