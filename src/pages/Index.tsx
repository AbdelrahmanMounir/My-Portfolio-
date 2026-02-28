import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, ShieldCheck } from "lucide-react";
import CVModal from "@/components/CVModal";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import BlogCard from "@/components/BlogCard";
import { projects, certificates, blogPosts } from "@/data/portfolio";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-foreground mb-2"
  >
    {children}
  </motion.h2>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden cyber-grid">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-primary">Cyber Security Specialist</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient-cyber">Abdelrahaman</span>
                <br />
                <span className="text-foreground">Mohamed Mounir</span>
              </h1>

              <div className="mb-8 space-y-2 text-sm text-muted-foreground">

<div className="flex items-center gap-2">
  <GraduationCap className="w-4 h-4 text-primary" />
  <span className="font-medium text-foreground">
    Al-Ryada University
  </span>
</div>

<div>
  Bachelor’s Degree in 
  <span className="text-primary font-semibold">
    Computer Science & Artificial Intelligence
  </span>
</div>

<div>
  Sep 2024 – Jul 2028
</div>

<div>
  Grade: 
  <span className="text-primary font-semibold">
    Very Good
  </span>
</div>

<div className="flex items-center gap-1 pt-1">
  <MapPin className="w-4 h-4 text-primary" />
  Banha, Qalyubia, Egypt
</div>

</div>

              <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Computer Science Student | Full-Stack Developer | SOC Analyst in Progress | Cybersecurity (DEPI) | AI Background  | Python & C++ Developer              </p>

              <div className="flex flex-wrap gap-4">
                <CVModal />
                <a
                  href="contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(217,91%,60%/0.2)]"
                >
                  Contact Me
                </a>
              </div>
              
            </motion.div>
     
            

{/* Floating avatar */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="flex-shrink-0 md:ml-20 lg:ml-32"
>
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full neon-border animate-float overflow-hidden">
    <img
      src="/profile.png"
      alt="Abdelrahman Mohamed Mounir"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
          </div>
        </div>
      </section>
      <section id="about" className="py-24 bg-card/30">
  <div className="container mx-auto px-6 max-w-5xl">

    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
      About Me
    </h2>

    <p className="text-gray-300 leading-relaxed text-lg">

      I am a Computer Science student with a strong interest in 
      <span className="text-primary font-semibold"> Cybersecurity </span>, 
      currently focusing on SOC operations and security monitoring.
      <br /><br />

      I completed SOC training through DEPI, gaining hands-on experience in 
      <span className="text-primary font-semibold"> log analysis </span>, 
      <span className="text-primary font-semibold"> incident detection </span>, 
      and <span className="text-primary font-semibold"> threat monitoring </span>.
      <br /><br />

      With an academic background in 
      <span className="text-primary font-semibold"> Artificial Intelligence </span>, 
      I have studied 
      <span className="text-primary font-semibold"> Machine Learning (ML) </span> 
      and 
      <span className="text-primary font-semibold"> Deep Learning (DL) </span>, 
      allowing me to approach security challenges using data-driven analysis 
      and pattern recognition techniques.
      <br /><br />

      I am also a 
      <span className="text-primary font-semibold"> Fullstack Developer </span> 
      with experience in 
      <span className="text-primary font-semibold"> Django </span>, 
      <span className="text-primary font-semibold"> Node.js </span>, 
      and backend system design, building scalable and secure web applications.
      <br /><br />

      I continuously develop my technical skills in 
      <span className="text-primary font-semibold"> Python </span>, 
      <span className="text-primary font-semibold"> C++ </span>, 
      networking fundamentals, and modern web technologies.
      <br /><br />

      I am actively seeking opportunities to grow as an aspiring 
      <span className="text-primary font-semibold"> SOC Analyst </span> 
      and gain real-world cybersecurity experience.
      
    </p>

  </div>
</section>
{/* ================= SKILLS & EXPERIENCE ================= */}
<section className="py-24">
  <div className="container mx-auto px-6 max-w-6xl">

    <div className="grid md:grid-cols-2 gap-16">

      {/* ================= SKILLS ================= */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Skills
        </h3>

        <div className="flex flex-wrap gap-3">

          {[
            "Teamwork",
            "Analytical Thinking",
            "Problem Solving",
            "Pattern Recognition",
            "Data Analysis",
            "Artificial Intelligence",
            "Information Security",
            "Network Security",
            "SIEM Fundamentals",
            "Threat Analysis",
            "Incident Detection",
            "Log Analysis",
            "Security Monitoring",
            "SOC Operations",
            "Cybersecurity"
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>


      {/* ================= EXPERIENCE ================= */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Experience
        </h3>

        <div className="glass-card p-6 rounded-2xl border border-border">
          
          <h4 className="text-lg font-semibold text-primary mb-1">
            ECPC Participant
          </h4>

          <p className="text-sm text-muted-foreground mb-2">
            Egyptian Collegiate Programming Contest (ECPC)
          </p>

          <p className="text-xs text-muted-foreground mb-4">
            Jul 2025 – Present · Egypt
          </p>

          <p className="text-gray-300 leading-relaxed text-sm">
            Participated in the Egyptian Collegiate Programming Contest (ECPC),
            solving algorithmic problems under strict time constraints.
            <br /><br />
            Strengthened skills in 
            <span className="text-primary font-semibold"> problem solving </span>, 
            <span className="text-primary font-semibold"> data structures </span>, 
            <span className="text-primary font-semibold"> algorithms </span>, 
            <span className="text-primary font-semibold"> teamwork </span>, 
            and competitive programming.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>
      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle>Projects</SectionTitle>
          <p className="text-muted-foreground mb-12 max-w-lg">
            A collection of cybersecurity tools and platforms I've built.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle>Certificates</SectionTitle>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Professional certifications and credentials.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <CertificateCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle>Blog</SectionTitle>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Thoughts on cybersecurity, technology, and learning.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
