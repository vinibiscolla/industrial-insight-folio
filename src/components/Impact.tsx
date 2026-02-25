import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(interval);
          } else {
            setCount(current);
          }
        }, 16);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-gradient">
      {count}{suffix}
    </span>
  );
};

const Impact = () => {
  const { lang } = useLanguage();
  const metrics = t.impact.metrics[lang];

  return (
    <section id="impact" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.impact.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16">
            {t.impact.title[lang]}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 text-center h-full">
                <Counter target={m.value} suffix={m.suffix} />
                <p className="font-bold mt-3 mb-1">{m.label}</p>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
