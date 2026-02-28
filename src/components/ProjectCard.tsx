import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <Link
      to={`/projects/${project.id}`}
      className="glass-card hover-glow block p-6 group transition-all"
    >
      <div className="w-full h-40 rounded-xl bg-secondary mb-4 overflow-hidden flex items-center justify-center">
        <span className="text-muted-foreground text-sm font-mono">Preview Image</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
        View Project <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  </motion.div>
);

export default ProjectCard;
