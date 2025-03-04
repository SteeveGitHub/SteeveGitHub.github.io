
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import TechOrbit from "@/components/TechOrbit";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  // Informations personnalisées de Steeve Trincal
  const aboutProps = {
    name: "Steeve Trincal",
    title: "Développeur Full Stack",
    bio: "J'ai suivi un BTS SIO en alternance orienté développement web et aujourd'hui je travaille sur des projets où je suis impliqué sur la partie mobile et back-end. Mes compétences se développent au fur et à mesure des projets et je recherche désormais une opportunité de perfectionner mes compétences et d'être fullstack. J'aime les nouveaux défis et évoluer sans cesse afin de proposer le meilleur produit possible à mes clients.",
    location: "Lyon, France",
    email: "steeve.trincal@gmail.com",
    github: "https://github.com/SteeveGitHub",
    linkedin: "https://www.linkedin.com/in/steevetcl/",
    interests: ["Front End", "Back End", "Dev Mobile", "IA", "Data Science", "Sport"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 filter blur-3xl animate-pulse-soft"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center z-10 space-y-6">
          <span className="badge animate-fade-in">Bonjour, je suis Steeve Trincal</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up">
            Développeur Full Stack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
            Je crée des applications sur mesure pour les entreprises et les particuliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <a 
              href="#video" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Voir Ma Vidéo
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              En Savoir Plus
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>
      
      <VideoSection videoUrl="https://www.youtube.com/embed/H3-XuZ7MH8Q?si=xDM5jCO4t7Wy2dO1" />
      <TechOrbit />
      <AboutSection {...aboutProps} />
      <Footer />
    </div>
  );
};

export default Index;
