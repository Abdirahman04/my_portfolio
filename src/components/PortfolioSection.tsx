import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface PortfolioSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, user authentication, and payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["React", "Firebase", "Material-UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather forecasting dashboard with interactive maps and detailed weather data.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const PortfolioSection = ({
  projects = defaultProjects,
}: PortfolioSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that showcase my skills and
          experience in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={{
              title: selectedProject.title,
              description: selectedProject.description,
              image: selectedProject.imageUrl,
              technologies: selectedProject.technologies,
              githubUrl: selectedProject.githubUrl,
              liveUrl: selectedProject.liveUrl,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
