import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { Award, ExternalLink } from "lucide-react";
import type { Certificate } from "@/data/portfolio";

const CertificateCard = ({ cert, index }: { cert: Certificate; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.2, duration: 0.15,ease: "easeOut",stiffness: 200 }}
  onClick={() => setOpen(true)}
  className="glass-card hover-glow p-6 cursor-pointer group"
  style={{ willChange: "transform" }}
>
        <Award className="w-8 h-8 text-primary mb-3" />
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {cert.title}
        </h3>
        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
      </motion.div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title={cert.title}>
  <div className="flex flex-col items-center gap-4">
    
    <img
      src={cert.image}
      alt={cert.title}
      className="w-full max-h-[500px] object-contain rounded-xl border border-border"
    />

    <div className="text-center">
      <p className="text-muted-foreground mb-1">Issued by {cert.issuer}</p>
      <p className="text-sm text-muted-foreground">{cert.date}</p>
    </div>

    <a
      href={cert.verificationLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:scale-105"
    >
      <ExternalLink className="w-4 h-4" />
      Verify Certificate
    </a>
  </div>
</Modal>
    </>
  );
};

export default CertificateCard;
