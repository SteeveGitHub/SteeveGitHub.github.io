
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, MapPin, User, Heart } from "lucide-react";

interface AboutSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  interests?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  name = "Steeve Trincal",
  title = "Développeur Full Stack",
  bio = "J'ai suivi un BTS SIO en alternance orienté développement web et aujourd'hui je travaille sur des projets où je suis impliqué sur la partie mobile et back-end. Mes compétences se développent au fur et à mesure des projets et je recherche désormais une opportunité de perfectionner mes compétences et d'être fullstack. J'aime les nouveaux défis et évoluer sans cesse afin de proposer le meilleur produit possible à mes clients.",
  location = "Lyon, France",
  email = "hello@example.com",
  github = "https://github.com/SteeveGitHub",
  linkedin = "https://www.linkedin.com/in/steevetcl/",
  interests = ["Front End", "Back End", "Dev Mobile", "IA", "Data Science", "Sport"]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 md:px-6 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={cn(
            "space-y-8 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div>
              <div className="badge">A propos</div>
              <h2 className="section-heading mt-2">{name}</h2>
              <p className="text-xl text-muted-foreground mt-1">{title}</p>
            </div>
            
            <p className="text-lg leading-relaxed">
              {bio}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informations personnelles</h3>
              
              <div className="stagger-animation space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-full">
                    <User size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nom & prénom</p>
                    <p>{name}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-full">
                    <MapPin size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lieu</p>
                    <p>{location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-full">
                    <Mail size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-full">
                    <Heart size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Intérêts</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {interests.map((interest, index) => (
                        <span key={index} className="badge">{interest}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${email}`}
                aria-label="Email"
                className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className={cn(
            "relative transition-all duration-1000 delay-300 ease-out flex justify-center",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 md:p-12">
                  <span className="text-sm font-medium">
                  {/*  lets insert a photo here from public folder*/}
                    <img src="/src/assets/photo%20cv.jpg" alt="Steeve Trincal" className="rounded-full mx-auto" />
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-accent/30 blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-primary/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
