import AnimatedSection from "./AnimatedSection";
import { Blocks, Repeat, Layers, GitBranch } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const icons = [Blocks, Repeat, Layers, GitBranch];

const DesignPrinciples = () => {
  const { lang } = useLanguage();
  const items = t.principles.items[lang];

  return (
    <section id="principles" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.principles.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
            {t.principles.title[lang]}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                  <Icon className="text-primary mb-3" size={24} />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciples;
