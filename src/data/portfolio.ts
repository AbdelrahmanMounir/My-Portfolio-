export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  githubLink: string;
  images: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: "cyber-threat-analyzer",
    title: "Cyber Threat Analyzer",
    shortDescription: "Real-time cyber threat detection and analysis platform.",
    detailedDescription: "A comprehensive platform that monitors, detects, and analyzes cyber threats in real-time using advanced pattern recognition and threat intelligence feeds. Built with a focus on SOC analyst workflows.",
    technologies: ["Python", "React", "TensorFlow", "Elasticsearch", "Docker"],
    githubLink: "https://github.com/username/cyber-threat-analyzer",
    images: [
      "/projects/cyber-threat-analyzer/1.png",
      "/projects/cyber-threat-analyzer/2.png",
      "/projects/cyber-threat-analyzer/3.png",
      "/projects/cyber-threat-analyzer/4.png",
    ],
  },
  {
    id: "soc-monitoring-dashboard",
    title: "SOC Monitoring Dashboard",
    shortDescription: "Security Operations Center monitoring and alerting dashboard.",
    detailedDescription: "A centralized dashboard for Security Operations Centers providing real-time monitoring, incident management, and automated alerting. Features customizable widgets and integration with major SIEM platforms.",
    technologies: ["TypeScript", "Next.js", "D3.js", "PostgreSQL", "Redis"],
    githubLink: "https://github.com/username/soc-monitoring-dashboard",
    images: [
      "/projects/soc-monitoring-dashboard/1.png",
      "/projects/soc-monitoring-dashboard/2.png",
      "/projects/soc-monitoring-dashboard/3.png",
      "/projects/soc-monitoring-dashboard/4.png",
    ],
  },
  {
    id: "secure-auth-system",
    title: "Secure Auth System",
    shortDescription: "Multi-factor authentication system with zero-trust architecture.",
    detailedDescription: "An enterprise-grade authentication system implementing zero-trust principles with multi-factor authentication, biometric verification, and adaptive risk scoring. Supports OAuth 2.0, SAML, and OpenID Connect.",
    technologies: ["Go", "React", "PostgreSQL", "Redis", "Kubernetes"],
    githubLink: "https://github.com/username/secure-auth-system",
    images: [
      "/projects/secure-auth-system/1.png",
      "/projects/secure-auth-system/2.png",
      "/projects/secure-auth-system/3.png",
      "/projects/secure-auth-system/4.png",
    ],
  },
  {
    id: "ai-intrusion-detector",
    title: "AI Intrusion Detector",
    shortDescription: "AI-powered network intrusion detection system.",
    detailedDescription: "An intelligent intrusion detection system leveraging machine learning algorithms to identify anomalous network behavior and potential security breaches. Features real-time alerting and automated response capabilities.",
    technologies: ["Python", "PyTorch", "Kafka", "Grafana", "Docker"],
    githubLink: "https://github.com/username/ai-intrusion-detector",
    images: [
      "/projects/ai-intrusion-detector/1.png",
      "/projects/ai-intrusion-detector/2.png",
      "/projects/ai-intrusion-detector/3.png",
      "/projects/ai-intrusion-detector/4.png",
    ],
  },
  {
    id: "network-traffic-visualizer",
    title: "Network Traffic Visualizer",
    shortDescription: "Interactive network traffic analysis and visualization tool.",
    detailedDescription: "A powerful visualization tool that maps network traffic patterns, identifies bottlenecks, and detects suspicious communication flows. Features interactive 3D network topology views and real-time packet analysis.",
    technologies: ["TypeScript", "Three.js", "Node.js", "WebSocket", "MongoDB"],
    githubLink: "https://github.com/username/network-traffic-visualizer",
    images: [
      "/projects/network-traffic-visualizer/1.png",
      "/projects/network-traffic-visualizer/2.png",
      "/projects/network-traffic-visualizer/3.png",
      "/projects/network-traffic-visualizer/4.png",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Programming fundamentals diploma",
    issuer: "Route",
    date: "2025",
    image: "/certificates/cert-1.png",
    verificationLink: "https://drive.google.com/drive/u/0/folders/1jwyGkZNnHli4PlpN1V2xOlv1Q6YaMqBl",
  },
  {
    id: "cert-2",
    title: "Python Diploma (Django & Flask Framework)",
    issuer: "it-Sharks",
    date: "2025",
    image: "/certificates/cert-2.png",
    verificationLink: "https://cert.eccouncil.org/",
  },
  {
    id: "cert-3",
    title: "Python Basics",
    issuer: "Mahara Tech",
    date: "2025",
    image: "/certificates/cert-3.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-4",
    title: "Intro to cybersecurity",
    issuer: "CISCO",
    date: "2025",
    image: "/certificates/cert-4.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-5",
    title: "The ICPC ECPC",
    issuer: "icpc",
    date: "2025",
    image: "/certificates/cert-5.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-6",
    title: "ICPC ",
    issuer: "icpc",
    date: "2025",
    image: "/certificates/cert-6.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-7",
    title: "Networking Basics course",
    issuer: "Cisco",
    date: "2025",
    image: "/certificates/cert-7.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-8",
    title: "Artificial intelligence (AI)",
    issuer: "NTI/Huawi Egyption",
    date: "2025",
    image: "/certificates/cert-8.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-9",
    title: "Digital Safety and Security Awareness",
    issuer: "CISCO",
    date: "2024",
    image: "/certificates/cert-9.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-10",
    title: "Endpoint Secutity",
    issuer: "CISCO",
    date: "2025",
    image: "/certificates/cert-10.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-11",
    title: "HCIA AI Learning ",
    issuer: "HUAWI / iTB",
    date: "2024",
    image: "/certificates/cert-11.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-12",
    title: "Networking Basics",
    issuer: "CISCO",
    date: "2025",
    image: "/certificates/cert-12.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-13",
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    date: "2025",
    image: "/certificates/cert-13.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-14",
    title: "HCIA-AI V4.0",
    issuer: "HUAWIE ICT",
    date: "2025",
    image: "/certificates/cert-14.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-15",
    title: "HCIA AI Learning",
    issuer: "HCIA",
    date: "2024",
    image: "/certificates/cert-15.png",
    verificationLink: "https://www.credly.com/",
  },
  {
    id: "cert-16",
    title: "Networking Devices and Initial Configuration",
    issuer: "CISCO",
    date: "2025",
    image: "/certificates/cert-16.png",
    verificationLink: "https://www.credly.com/",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-zero-trust",
    title: "Understanding Zero Trust Architecture",
    excerpt: "An introduction to zero trust security models and why they matter in modern cybersecurity.",
    date: "2024-12-15",
    content: "Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated. This blog post explores the core principles of Zero Trust architecture and how to implement it effectively.\n\nThe traditional perimeter-based security model is no longer sufficient in today's distributed computing environment. With cloud services, remote work, and mobile devices, the network perimeter has dissolved.\n\nKey principles of Zero Trust include: never trust, always verify; implement least privilege access; assume breach; and verify explicitly. By adopting these principles, organizations can significantly reduce their attack surface and improve their security posture.",
  },
  {
    id: "intro-to-soc",
    title: "Introduction to Security Operations Centers",
    excerpt: "What is a SOC, how does it work, and why every organization needs one.",
    date: "2024-11-20",
    content: "A Security Operations Center (SOC) is a centralized unit that deals with security issues on an organizational and technical level. This post covers the fundamentals of SOC operations.\n\nSOCs are staffed by security analysts and engineers who monitor and analyze activity on networks, servers, endpoints, databases, applications, websites, and other systems. Their goal is to detect, analyze, and respond to cybersecurity incidents.\n\nModern SOCs leverage technologies like SIEM, SOAR, EDR, and threat intelligence platforms to enhance their capabilities and improve response times.",
  },
  {
    id: "network-forensics-basics",
    title: "Network Forensics: A Beginner's Guide",
    excerpt: "Learn the basics of network forensics and how to analyze network traffic for security incidents.",
    date: "2024-10-10",
    content: "Network forensics involves capturing, recording, and analyzing network events to discover the source of security attacks or other problem incidents. This guide will walk you through the fundamentals.\n\nKey tools for network forensics include Wireshark, tcpdump, NetworkMiner, and Zeek. These tools help analysts capture and analyze network packets to identify suspicious activity.\n\nWhen conducting network forensics, it's important to maintain a proper chain of custody, document all findings, and use write-protected storage for evidence preservation.",
  },
];
