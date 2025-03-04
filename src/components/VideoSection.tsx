
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  videoUrl?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  videoUrl = "https://www.youtube.com/embed/H3-XuZ7MH8Q?si=xDM5jCO4t7Wy2dO1" // Default placeholder
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
      id="video" 
      ref={sectionRef} 
      className="min-h-screen pt-24 pb-16 px-4 md:px-6 flex flex-col justify-center items-center"
    >
      <div className="max-w-5xl w-full mx-auto space-y-12">
        <div className="text-center mb-12 space-y-4">
          <div className="badge animate-fade-in">Afin de mieux me connaître</div>
          <h2 className={cn(
            "section-heading transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Voici ma vidéo de présentation
          </h2>
          <p className={cn(
            "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Vous y trouverez mon parcours, mes compétences et mes motivations.
          </p>
        </div>
        
        <div className={cn(
          "video-container aspect-video w-full max-w-4xl mx-auto transition-all duration-1000 delay-200 ease-out",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <iframe
            src={videoUrl}
            title="Video Presentation"
            className="w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={cn(
          "flex justify-center gap-4 mt-8 transition-all duration-700 delay-300 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/*<button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">*/}
          {/*  CV*/}
          {/*</button>*/}
          {/*<button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">*/}
          {/*  Partager*/}
          {/*</button>*/}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
