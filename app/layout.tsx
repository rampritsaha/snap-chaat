import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Modern Restaurant",
  description: "Experience fine dining at its best",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main className="pt-20 min-h-screen bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
