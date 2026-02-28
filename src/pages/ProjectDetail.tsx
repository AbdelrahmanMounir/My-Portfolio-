import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{project.shortDescription}</p>

          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {project.images.map((_, i) => (
              <div
                key={i}
                className="aspect-video rounded-xl bg-secondary border border-border flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm font-mono">Screenshot {i + 1}</span>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
          </div>

          {/* Technologies */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-mono text-sm border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold transition-all hover:border-primary/50"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
