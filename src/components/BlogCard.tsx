import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/data/portfolio";

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <Link
      to={`/blog/${post.id}`}
      className="glass-card hover-glow block p-6 group transition-all"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
        <Calendar className="w-3 h-3" />
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
        Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  </motion.div>
);

export default BlogCard;
