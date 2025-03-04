
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-16 px-4 md:px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-4 animate-fade-up">
            <h3 className="text-xl font-medium">Contactez-moi</h3>
            <p className="text-muted-foreground max-w-md">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
            </p>
            <div className="mt-6">
              <a 
                href="mailto:steeve.trincal@gmail.com" 
                className="inline-flex items-center px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                Me Contacter
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 animate-fade-up">
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#video" className="hover:text-primary transition-colors">Vidéo</a></li>
                <li><a href="#tech" className="hover:text-primary transition-colors">Technologies</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">À Propos</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Social</h4>
              <ul className="space-y-3">
                <li><a href="https://github.com/SteeveGitHub" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/steevetcl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground animate-fade-in">
            © {currentYear} Steeve Trincal. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
