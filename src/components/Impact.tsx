import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const metrics = [
  { value: 98, suffix: "%", label: "Production Traceability", desc: "Full serialization coverage across all lines" },
  { value: 45, suffix: "%", label: "Defect Reduction", desc: "Real-time detection eliminated recurring defects" },
  { value: 15, suffix: "x", label: "Faster Reporting", desc: "From hours of paper processing to instant digital" },
  { value: 100, suffix: "%", label: "FPY Visibility", desc: "First Pass Yield tracked live on every production line" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-black text-gradient">
      {count}
      {suffix}
    </div>
  );
};

const Impact = () => (
  <section id="impact" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
          Impact & Results
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
          Measurable Operational Transformation
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1}>
            <div className="glass rounded-xl p-8 text-center h-full">
              <Counter target={m.value} suffix={m.suffix} />
              <h3 className="font-bold mt-4 mb-2">{m.label}</h3>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;
