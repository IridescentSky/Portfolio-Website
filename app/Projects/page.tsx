import ProjectEntry from "./_components/ProjectEntry";
import ProjectJSON from "@/content/projects/projects.json";

export const metadata = {
  title: "Projects",
  description: "My project gallery."
}

export default function ProjectHome() {
  const projects = ProjectJSON.projects;
  return (
    <div className="px-5 py-5">
      <div className="flex flex-wrap justify-center gap-5">
          {projects.map((project) => (
            <ProjectEntry
              key={project.title}
              {...project}
            />
          ))}
      </div>
    </div>
  );
}
