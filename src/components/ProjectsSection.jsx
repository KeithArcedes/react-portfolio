import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CPDO",
    description: "A system for managing scholar of CPDO (City Planning and Development Office) of Victorias City with SMS integration.",
    image: "/projects/CPDO.png",
    tags: ["PHP", "Bootstrap", "PHPMyAdmin", "MySQL", "Vonage"],
    githubUrl: "https://github.com/KeithArcedes/CPDO",
  },
  {
    id: 2,
    title: "CSAV Portal",
    description:
      "A system for students and teachers of Colegio De Sta Ana De Victorias to check and manage their classes.",
    image: "/projects/csav project.png",
    tags: ["PHP", "Bootstrap", "PHPMyAdmin", "MySQL"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ECO website",
    description:
      "School Project meant to train us in SCSS, and collaboration in github.",
    image: "/projects/ECO.png",
    tags: ["Bootstrap", "SCSS", "HTML", "JavaScript"],  
    githubUrl: "https://github.com/Csorilla/csgv_midterm",
  },
  {
    id: 4,
    title: "CSAV Food",
    description:
      "School Project meant to train us in using github and collaborate with a lot of people. I was in charge of the Hero Section.",
    image: "/projects/csav-food.png",
    tags: ["Bootstrap", "SCSS", "HTML", "JavaScript"],  
    githubUrl: "https://github.com/asegumpan/csav-food",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KeithArcedes"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
