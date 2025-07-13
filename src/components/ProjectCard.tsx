import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
}

const ProjectCard = ({ title, description, link, technologies }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors flex items-center gap-2">
          {title}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col h-full">
        <p className="text-foreground leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start"
          >
            <Button variant="outline" className="group/btn">
              <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              View Project
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
