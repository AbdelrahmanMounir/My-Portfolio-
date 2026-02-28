import { Shield, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">
            Abdel<span className="text-primary">rahman</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2024 Abdelrahaman Mohamed. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
