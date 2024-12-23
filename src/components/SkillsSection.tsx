import React from "react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "AWS", level: 70, category: "DevOps" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "GraphQL", level: 60, category: "Backend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
];

const SkillsSection = ({ skills = defaultSkills }: SkillsSectionProps) => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section className="py-16 bg-white min-h-[600px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category} className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary">{skill.level}%</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
