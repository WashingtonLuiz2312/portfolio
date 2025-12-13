import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Architecture from "@/components/sections/Architecture";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Desenvolvedor Full Stack | IA & Sistemas Inteligentes</title>
        <meta
          name="description"
          content="Portfólio profissional de desenvolvedor full stack especializado em arquitetura de sistemas, inteligência artificial e aplicações web modernas."
        />
        <meta
          name="keywords"
          content="desenvolvedor, full stack, python, react, inteligência artificial, machine learning, sistemas"
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Architecture />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
