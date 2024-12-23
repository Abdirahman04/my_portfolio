import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

const defaultProject = {
  title: "Sample Project",
  description:
    "A comprehensive web application showcasing modern development practices and responsive design principles. Built with React and TypeScript, featuring real-time data synchronization and progressive web app capabilities.",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example/project",
};

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = defaultProject,
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-3xl">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <DialogDescription className="mt-4 text-gray-700">
            {project.description}
          </DialogDescription>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            {project.liveUrl && (
              <Button
                className="flex items-center gap-2"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
                View Code
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
