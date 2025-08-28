import ProjectCard from "@/components/Cards/ProjectCards";
import { projectsData } from "@/utils/constant";

const Projects: React.FC = () => {
  const defaultImage = "/path/to/default-image.jpg"; // Replace with the actual path to your default image

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-orange mb-8">
        Our Projects
      </h1>

      {/* Completed Projects */}
      <div className="mb-12">
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData
            .filter((project) => project.status === "Completed")
            .map((project, index) => (

              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image || defaultImage} // Use default image if undefined
                link="https://example.com" // Replace with actual link if needed
              />
              
            ))}
        </div>
      </div>

      {/* Active & Ongoing Projects */}
      <div>
        <h2 className="font-heading text-2xl font-semibold mb-4">
          Active & Ongoing Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData
            .filter((project) => project.status === "Ongoing")
            .map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image || defaultImage} // Use default image if undefined
                link="https://example.com" // Replace with actual link if needed
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
