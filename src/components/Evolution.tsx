import AnimatedSection from "./AnimatedSection";
import { Rocket, Users, TrendingUp, ExternalLink } from "lucide-react";
import hacksiemensImg from "@/assets/hacksiemens.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const Evolution = () => {
  const { lang } = useLanguage();

  return (
    <section id="evolution" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.evolution.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
            {t.evolution.title[lang]}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Rocket className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.evolution.spinoff.title[lang]}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.evolution.spinoff.desc[lang]}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.evolution.events.title[lang]}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.evolution.events.desc[lang]}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.evolution.business.title[lang]}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.evolution.business.desc[lang]}</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/company/rakkun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t.evolution.cta[lang]} <ExternalLink size={16} />
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
};

export default Evolution;
