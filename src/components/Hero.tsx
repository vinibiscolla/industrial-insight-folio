import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/foto-hero.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(205_100%_55%/0.08),transparent_60%)]" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center py-32">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
          Industrial Software Engineer
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
          From Shop Floor
          <br />
          to <span className="text-gradient">Scalable Systems</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
          Real industrial software built and validated in production environments.
          Recognized with the highest WCM certification by Professor Hajime Yamashina.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#problem"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Explore the Case Study
          </a>
          <a
            href="#media"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-semibold text-sm text-foreground hover:bg-secondary transition-colors"
          >
            View Media
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
          <img
            src={heroImg}
            alt="Industrial software engineer at Whirlpool WCM medal ceremony"
            className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl"
          />
        </div>
      </motion.div>
    </div>

    <motion.a
      href="#problem"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      aria-label="Scroll down"
    >
      <ChevronDown size={28} />
    </motion.a>
  </section>
);

export default Hero;
