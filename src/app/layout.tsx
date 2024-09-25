import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hi There! Welcome to Your Test Task',
  description: "I'm thrilled to see you here! Dive in and enjoy the test task. Can't wait to see your reaction",
  openGraph: {
    title: 'Hi There! Welcome to Your Test Task',
    description: "I'm thrilled to see you here! Dive in and enjoy the test task. Can't wait to see your reaction",
    images: [
      {
        url: `${process.env.APP_URL}/ogImage.jpeg`, // Replace with a relevant image URL
        width: 800,
        height: 800,
        alt: 'Welcome to the Test Task',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
