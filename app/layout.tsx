import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";

import { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import Wrapper from "./components/Wrapper";
import "./globals.css";
import { JotaiProvider } from "./provider";

const nonito = Nunito({
  variable: "--font-nonito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Elixir | %s",
    default: "Elixir",
  },
  description: "Home page our exclusiva sugar wax",
  keywords: ["exclusiva", "sugar", "wax", "sugar wax"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nonito.className} overflow-x-hidden`}>
        <JotaiProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <NextTopLoader color="#77BEF0" />
          <nav className="sticky top-0 z-[50] w-screen bg-white">
            <Wrapper>
              <MenuBar />
            </Wrapper>
          </nav>

          <div className="min-h-screen">{children}</div>
          <Wrapper>
            <Footer />
          </Wrapper>
        </JotaiProvider>
      </body>
    </html>
  );
}
