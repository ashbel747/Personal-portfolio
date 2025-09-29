import type { Metadata } from "next";
import Hero from "../pages/hero_page";
import About from "../pages/about_page";
import PortfolioPage from "../portfolio/page";

export const metadata: Metadata = {
  title: "Ashbel King'ori | Portfolio",
  description:
    "Welcome to my personal portfolio. Explore my projects, skills, and experience in full-stack development.",
  keywords: ["Ashbel King'ori", "Portfolio", "Full Stack Developer", "Next.js", "TailwindCSS", "Nest.js"],
  authors: [{ name: "Ashbel King'ori" }],
  creator: "Ashbel King'ori",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <PortfolioPage />
    </div>
  );
}