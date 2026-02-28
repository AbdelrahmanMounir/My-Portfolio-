import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, User } from "lucide-react";

const contactData = {
  name: "Abdelrahaman Mohamed Mounir Mohamed",
  country: "Egypt",
  governorate: "Qalyubia",
  emails: ["abdelrahmanmunir00@gmail.com", "2401179@rst.edu.eg"],
  phones: ["01101724507", "01065498203"],
};

const ContactCard = ({
  icon: Icon,
  label,
  children,
  delay,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card hover-glow p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground">{label}</h3>
    </div>
    <div className="space-y-2">{children}</div>
  </motion.div>
);

const Contact = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Contact Me</h1>
        <p className="text-muted-foreground mb-12">Get in touch for collaborations or inquiries.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <ContactCard icon={User} label="Full Name" delay={0.1}>
          <p className="text-muted-foreground">{contactData.name}</p>
        </ContactCard>

        <ContactCard icon={MapPin} label="Location" delay={0.15}>
          <p className="text-muted-foreground">{contactData.country}</p>
          <p className="text-muted-foreground">{contactData.governorate}</p>
        </ContactCard>

        <ContactCard icon={Mail} label="Email" delay={0.2}>
          {contactData.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="block text-primary hover:underline text-sm"
            >
              {email}
            </a>
          ))}
        </ContactCard>

        <ContactCard icon={Phone} label="Phone" delay={0.25}>
          {contactData.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="block text-primary hover:underline text-sm"
            >
              {phone}
            </a>
          ))}
        </ContactCard>

        <ContactCard icon={GraduationCap} label="Education" delay={0.3}>
          <p className="text-muted-foreground text-sm">Computer & Artificial Intelligence</p>
          <p className="text-muted-foreground text-sm">Al-Ryada University — Cyber Security</p>
          <p className="text-muted-foreground text-sm">Started: 2024</p>
        </ContactCard>
      </div>
    </div>
  </div>
);

export default Contact;
