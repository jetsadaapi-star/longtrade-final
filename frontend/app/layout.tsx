import type { Metadata } from "next";
import "./globals.css";
import { Prompt } from "next/font/google";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const prompt = Prompt({ subsets: ["latin", "thai"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "LongTrade Academy",
  description: "ยกระดับการเทรดในสไตล์ของคุณด้วยเครื่องมือและความรู้แบบมือโปร",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={prompt.className}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  )
}
