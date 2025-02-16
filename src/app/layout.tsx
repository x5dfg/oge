import type { Metadata } from "next";
import type { Viewport } from "next";
//import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { mainProjectName, subProjectName } from "./config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${mainProjectName}: ${subProjectName} - Редизайн`,
  description: `Редизайн сайта "${subProjectName}" для удобства подготовки к экзаменам, улучшенная навигация, современный дизайн и новые функциональные возможности.`,
  keywords: `${subProjectName}, редизайн, подготовка к экзаменам, экзамены, тесты, теория, пробные экзамены, тёмная тема, прогресс, персонализированные рекомендации`,
  robots: "index, follow",
  openGraph: {
    title: `${mainProjectName}: ${subProjectName} - Редизайн`,
    description: `Обновлённый сайт "${subProjectName}": улучшенная навигация, современный дизайн и новые функции для удобной подготовки к экзаменам.`,
    url: `https://oge.x5dfg.xyz`,
    type: "website",
    images: [
      {
        url: `https://oge.x5dfg.xyz/og-image.png`,
        width: 128,
        height: 128,
        alt: `Open Graph Изображение редизайна сайта "${subProjectName}"`,
      },
    ],
    siteName: `oge.x5dfg.xyz`,
  },
};


export const viewport: Viewport = {
  themeColor: '#1078e1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
