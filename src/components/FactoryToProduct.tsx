import AnimatedSection from "./AnimatedSection";
import { Factory, Zap, UserCheck, Lightbulb } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const icons = [Factory, Zap, UserCheck, Lightbulb];

const FactoryToProduct = () => {
  const { lang } = useLanguage();
  const items = t.factoryToProduct.items[lang];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.factoryToProduct.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
            {t.factoryToProduct.title[lang]}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors group">
                  <Icon className="text-primary mb-3 group-hover:text-accent transition-colors" size={24} />
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

export default FactoryToProduct;
