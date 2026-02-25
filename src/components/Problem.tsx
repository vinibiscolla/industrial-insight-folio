import AnimatedSection from "./AnimatedSection";
import { AlertTriangle, Eye, FileWarning, Unplug } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const icons = [AlertTriangle, Eye, FileWarning, Unplug];

const Problem = () => {
  const { lang } = useLanguage();
  const challenges = t.problem.challenges[lang];
  const timeline = t.problem.timeline[lang];

  return (
    <section id="problem" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.problem.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 max-w-3xl">
            {t.problem.title[lang]}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-16">
            {t.problem.desc[lang]}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {challenges.map((c, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                  <Icon className="text-primary mb-3" size={24} />
                  <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Timeline */}
        <AnimatedSection>
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-primary" />
                  <p className="font-mono text-primary text-sm font-bold">{item.year}</p>
                  <p className="text-muted-foreground mt-1">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Problem;
