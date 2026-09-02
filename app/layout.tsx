import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const mulish = localFont({
  src: "../public/fonts/Mulish-VariableFont.ttf",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-VariableFont.ttf",
  variable: "--font-geist-mono",
  display: "swap",
});

const pixelFont = localFont({
  src: "../public/fonts/PressStart2P-Regular.ttf",
  variable: "--font-pixel",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "CodeQuest — Learn, Code, Level Up",
  description: "Gamified interactive coding adventure platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${geistMono.variable} ${pixelFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
