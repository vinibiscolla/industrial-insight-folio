import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-mono text-primary text-sm font-bold tracking-wider">INDUSTRIAL.DEV</p>
        <p className="text-sm text-muted-foreground mt-1">
          © {new Date().getFullYear()} — Industrial Software Portfolio
        </p>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="https://wa.me/5511952230522"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-green-500 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/viniciusbiscolla/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/vinibiscolla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="mailto:biscolla03@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
