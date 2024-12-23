import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This is a placeholder text to demonstrate the layout.",
  imageUrl = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  technologies = ["React", "TypeScript", "Tailwind"],
  githubUrl = "https://github.com",
  liveUrl = "https://example.com",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <Card
      className="w-[450px] h-[400px] bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div
        className="h-48 w-full bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {githubUrl && (
          <Button variant="outline" size="icon" asChild>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="outline" size="icon" asChild>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
