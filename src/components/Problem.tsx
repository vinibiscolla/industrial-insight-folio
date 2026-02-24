import AnimatedSection from "./AnimatedSection";
import { AlertTriangle, BarChart3, Search, FileWarning } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "No Real-Time Quality Tracking",
    desc: "Defect data was collected manually on paper forms, causing delays of hours before quality issues were identified.",
  },
  {
    icon: Search,
    title: "Zero Production Traceability",
    desc: "No serialization system meant individual units couldn't be traced through the production line.",
  },
  {
    icon: FileWarning,
    title: "Manual Defect Reporting",
    desc: "Operators relied on paper-based defect logs that were error-prone and impossible to analyze in real time.",
  },
  {
    icon: BarChart3,
    title: "WPS → WCM Migration",
    desc: "Whirlpool needed to migrate from their internal production system to the World Class Manufacturing methodology.",
  },
];

const Problem = () => (
  <section id="problem" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
          The Challenge
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 max-w-3xl">
          A Factory Running Blind on Quality Data
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          Whirlpool's Rio Claro plant needed to transform its quality management from
          paper-based processes to a fully digital, real-time system — a critical
          requirement for achieving World Class Manufacturing (WCM) certification.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {challenges.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="glass rounded-xl p-8 h-full group hover:border-primary/30 transition-colors">
              <c.icon className="text-accent mb-4" size={28} />
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Timeline */}
      <AnimatedSection delay={0.3} className="mt-20">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {[
            { year: "2017", text: "Project kickoff — requirements gathering with plant engineers" },
            { year: "2018", text: "First production deployment — serialization & tablet integration live" },
            { year: "2019", text: "Full system operational — FPY dashboards, Andon, defect tracking" },
            { year: "2019", text: "WCM Audit — Gold Medal awarded by Professor Hajime Yamashina" },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2" />
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="font-mono text-primary text-sm">{item.year}</span>
                <p className="text-foreground mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Problem;
