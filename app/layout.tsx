import LeftSidebar from "@/ui/LeftSidebar";
import Navigation from "@/ui/Navigation";
import RightSidebar from "@/ui/RightSidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quran Reading Tracker",
  description: "Quran reading tracker can track the recite holy quran time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-wrap min-h-screen pt-6">
          <LeftSidebar />
          <section className="flex-grow flex flex-col gap-6">
            <Navigation />
            <div className="flex w-full h-full">
              <div className="flex-grow">
                <main className="flex h-full flex-col items-center justify-between bg-[#ecf0f2] rounded-t-3xl">
                  {children}
                </main>
              </div>
              <RightSidebar />
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
