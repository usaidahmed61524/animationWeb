"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import("./js/jquery.min.js");
    import("./js/main.js");
    import("./js/particles.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* <script src="./js/jquery.min.js"></script>
        <script src="./js/main.js"></script>
        <script src="./js/particles.min.js"></script> */}
      </body>
    </html>
  );
}
