"use client";
import { usePathname } from "next/navigation";
import BreadCrumb from "../components/BreadCramb";
import Wrapper from "../components/Wrapper";
import { toUpperText } from "@/utils/helper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const cleanHeader = pathname.split("/")?.[1];

  return (
    <>
      <header className="py-12 bg-primary-400/30">
        <h3 className="h3 text-center text-black font-normal">
          {toUpperText(cleanHeader)}
        </h3>
        <Wrapper>
          <BreadCrumb />
        </Wrapper>
      </header>

      {children}
    </>
  );
}
