import AnimatedSection from "./AnimatedSection";
import { Rocket, Users, TrendingUp, ExternalLink } from "lucide-react";
import hacksiemensImg from "@/assets/hacksiemens.jpg";

const Evolution = () => (
  <section id="evolution" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
          Product Evolution
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
          From Project to Product — The Birth of Rakkun.io
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="space-y-8">
            <div className="flex gap-4">
              <Rocket className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Product Spin-Off</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The architecture and patterns validated at Whirlpool became the foundation
                  for Rakkun.io — a scalable industrial software platform.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Industry Events</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Presented at Siemens HackDay (MindSphere CloudFoundry), connecting with
                  industry leaders and generating early leads.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Business Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real production validation opened doors for conversations with other
                  manufacturers seeking digital transformation.
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/rakkun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Rakkun on LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={hacksiemensImg}
              alt="Presentation at Siemens HackDay event"
              className="w-full object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center font-mono">
            Siemens HackDay — MindSphere CloudFoundry Presentation
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Evolution;
