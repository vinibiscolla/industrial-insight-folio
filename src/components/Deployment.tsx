import AnimatedSection from "./AnimatedSection";
import { Award, CheckCircle, Quote } from "lucide-react";
import auditoriaImg from "@/assets/auditoria-hajime.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const Deployment = () => {
  const { lang } = useLanguage();

  return (
    <section id="deployment" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.deployment.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
            {t.deployment.title[lang]}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img
              src={auditoriaImg}
              alt="WCM Audit Day with Professor Hajime Yamashina at Whirlpool"
              className="rounded-2xl w-full shadow-2xl"
              loading="lazy"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              {t.deployment.milestones[lang].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground leading-relaxed">{text}</p>
                </div>
              ))}

              <div className="glass rounded-xl p-6 border-accent/30 mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-accent" size={28} />
                  <h3 className="text-xl font-bold text-accent">{t.deployment.medal.title[lang]}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.deployment.medal.desc[lang]}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-16">
          <div className="glass rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <Quote className="text-primary/40 mx-auto mb-4" size={40} />
            <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-4">
              "{t.deployment.quote.text[lang]}"
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              {t.deployment.quote.source[lang]}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Deployment;
