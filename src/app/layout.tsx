import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Advice generator app with Next.js",
  description: "Generate a random quote!",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-90 h-dvh w-screen flex flex-col items-center justify-center bg-neutral-blue-950 ${manrope.variable} font-manrope p-4`}
      >
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
