import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Import des images .png
import gitIcon from "@/assets/git.png";
import jiraIcon from "@/assets/jira.png";
import pythonIcon from "@/assets/python.png";
import supabaseIcon from "@/assets/supabase.png";
import javascriptIcon from "@/assets/javascript.png";
import phpIcon from "@/assets/php.png";
import reactIcon from "@/assets/react.png";
import djangoIcon from "@/assets/django.png";
import javaIcon from "@/assets/java.png";

interface TechIconProps {
  icon: string;
  name: string;
  angle: number;
  delay: number;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, name, angle, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  const radius = 50;
  const x = Math.cos(angle * Math.PI / 180) * radius;
  const y = Math.sin(angle * Math.PI / 180) * radius;

  const left = `${50 + x}%`;
  const top = `${50 + y}%`;

  return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
                className={cn(
                    "absolute flex items-center justify-center w-12 h-12 rounded-full bg-background/90 shadow-md border border-border",
                    "transform transition-all duration-300 z-10 cursor-pointer",
                    isHovered ? "scale-150" : "hover:scale-125"
                )}
                style={{
                  left,
                  top,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${delay}s`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
              <img src={icon} alt={name} className="w-8 h-8" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
  );
};

const TechOrbit: React.FC = () => {
  const technologies = [
    { icon: gitIcon, name: "Git", angle: 0, delay: 0 },
    { icon: jiraIcon, name: "Jira", angle: 40, delay: 0.1 },
    { icon: pythonIcon, name: "Python", angle: 80, delay: 0.2 },
    { icon: supabaseIcon, name: "Supabase", angle: 120, delay: 0.3 },
    { icon: javascriptIcon, name: "JavaScript", angle: 160, delay: 0.4 },
    { icon: phpIcon, name: "PHP", angle: 200, delay: 0.5 },
    { icon: reactIcon, name: "React", angle: 240, delay: 0.6 },
    { icon: djangoIcon, name: "Django", angle: 280, delay: 0.7 },
    { icon: javaIcon, name: "Java", angle: 320, delay: 0.8 },
  ];

  return (
      <section id="tech" className="py-20 px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium text-center mb-16">Technologies</h2>

        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-dashed border-accent animate-spin-slow flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-secondary/30 backdrop-blur-sm"></div>

          {technologies.map((tech, index) => (
              <TechIcon
                  key={index}
                  icon={tech.icon}
                  name={tech.name}
                  angle={tech.angle}
                  delay={tech.delay}
              />
          ))}

          <div className="z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <span className="text-primary font-semibold">Tech</span>
          </div>
        </div>
      </section>
  );
};

export default TechOrbit;