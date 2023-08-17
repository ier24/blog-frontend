import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

/**
 * this is root layout.
 * 必須。htmlタグとbodyタグを含まねばならず、アプリケーション内のすべてのページで共有される。
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
 */

const inter = Inter({ subsets: ["latin"] });

/**
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: "Blog written by Ryoma Hara",
  description: "Blog written by Ryoma Hara",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
