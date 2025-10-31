import type { Metadata } from "next";
import Hero from "../hero/hero_page";
import About from "../about/about_page";
import PortfolioPage from "../portfolio/page";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <PortfolioPage />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}