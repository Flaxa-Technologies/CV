import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prasad Naik | Future Tech Entrepreneur",
  description: "Aspiring to bridge the gap between civil engineering logic and digital ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-primary selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
