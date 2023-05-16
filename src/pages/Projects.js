import { Myprojects } from "./myprojects";

function Projects() {
    const projects = Myprojects;
    return (
        <div className="w-screen z-10 flex flex-col justify-center items-center mt-44">
            <div className="container p-2 md:p-0"><h2 className="text-2xl font-ivyora font-bold">Projekter</h2></div>
<div class="columns-2 md:columns-3 lg:columns-4 gap-8 container mt-5 p-2 md:p-0">
{projects.map((project, index) => (
    <div>
  <img class="w-full aspect-square mb-8" src={project.image} />
  </div>
  ))}
</div>
        </div>
    );
  }
  
  export default Projects;