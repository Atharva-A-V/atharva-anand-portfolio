import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  points: string[];
  link?: string;
}

const ExperienceCard = ({ company, position, duration, location, points, link }: ExperienceCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in border-l-4 border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
              {position}
            </CardTitle>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
              {company}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <ExternalLink className="h-4 w-4 text-primary hover:text-primary-glow cursor-pointer transition-colors" />
                </a>
              )}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{duration}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-foreground leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
