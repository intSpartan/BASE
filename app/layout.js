import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "../app/GlobalContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JoBro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&family=Poppins:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </GlobalProvider>
  );
}
