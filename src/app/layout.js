"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./Authentication";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>{children}</AuthProvider>

        <script src="./js/jquery.min.js"></script>
        <script src="./js/main.js"></script>
        <script src="./js/particles.min.js"></script>
      </body>
    </html>
  );
}
