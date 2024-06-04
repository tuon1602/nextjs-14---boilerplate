import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../theme/text-theme.css"
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuon's Next app login template",
  description: "Generated by Tuon",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <section>
        <nav></nav>
        {children}
      </section>
    </ReactQueryProvider>
  );
}
