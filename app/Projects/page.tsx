import ProjectCard from "./_components/ProjectCard";

export default function ProjectHome() {
  return (
    <div className="px-5 py-5">
      <div className="flex flex-wrap justify-center gap-16">
          <ProjectCard/>
          <ProjectCard/>
      </div>
    </div>
  );
}
