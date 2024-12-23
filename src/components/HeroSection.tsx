import React from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  avatarUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  onScrollToProjects?: () => void;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  description = "I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and performant applications that solve real-world problems.",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  onScrollToProjects = () => {},
}: HeroSectionProps) => {
  return (
    <section className="min-h-[800px] w-full bg-white flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600">{title}</h2>
          <p className="text-lg text-gray-600 max-w-lg">{description}</p>

          <div className="flex gap-4">
            {socialLinks.github && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socialLinks.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socialLinks.twitter && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>

          <Button
            onClick={onScrollToProjects}
            className="mt-8 flex items-center gap-2"
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-100">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
