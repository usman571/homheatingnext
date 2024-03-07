import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
export const metadata = {
  title: "homeheatingguide",
  description: "homeheatingguide ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <main className="">
            <Header />
            {children}
            <Footer />
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
