import ProjectCard from "./_components/ProjectCard";
import ProjectJSON from "@/content/projects/projects.json";

export default function ProjectHome() {
  const projects = ProjectJSON.projects;
  return (
    <div className="px-5 py-5">
      <div className="flex flex-wrap justify-center gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
      </div>
    </div>
  );
}
