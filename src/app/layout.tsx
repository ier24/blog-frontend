import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

// These styles apply to every route in the application
import "@/styles/globals.css";

const title = "This is My Blog";
const description = "This is Blog written by Ryoma Hara";

export const metadata: Metadata = {
  title: title,
  description: description,
};

const notoSansJP = Noto_Sans_JP({
  display: "swap",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>{children}</body>
    </html>
  );
}
