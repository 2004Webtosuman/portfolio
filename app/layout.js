import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Suman Mishra | Full-Stack Developer",
  description:
    "Portfolio of Suman Mishra — Full-Stack Developer specializing in React, Next.js, PHP, and modern web technologies. Building high-performance web applications.",
  keywords: [
    "Suman Mishra",
    "Full Stack Developer",
    "React",
    "Next.js",
    "PHP",
    "Web Developer",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`} style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
