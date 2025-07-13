import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer?: string;
  date: string;
  validUntil?: string;
  link?: string;
}

const CertificationCard = ({ title, issuer, date, validUntil, link }: CertificationCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-primary group-hover:text-primary-glow transition-colors leading-tight">
                {title}
              </CardTitle>
              {issuer && (
                <p className="text-muted-foreground mt-1">{issuer}</p>
              )}
            </div>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn"
            >
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              </Button>
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Issued: {date}</span>
          </div>
          {validUntil && (
            <>
              <span>•</span>
              <span>Valid until: {validUntil}</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
