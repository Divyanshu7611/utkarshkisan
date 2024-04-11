import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "utkarsh kisan-Sow . Connect . Harvest",
  description:
    "Utkarsh Kisan is a pioneering agritech platform dedicated to revolutionizing the agricultural landscape. With a mission to empower farmers and enhance agricultural productivity, Utkarsh Kisan offers a comprehensive suite of innovative solutions tailored to meet the evolving needs of the agricultural sector.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        {/* Add other meta tags here */}
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
