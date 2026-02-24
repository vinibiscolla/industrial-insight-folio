import AnimatedSection from "./AnimatedSection";
import { Award, CheckCircle, Quote } from "lucide-react";
import auditoriaImg from "@/assets/auditoria-hajime.jpg";

const Deployment = () => (
  <section id="deployment" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
          Deployment & Validation
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
          Validated on the Factory Floor, Recognized at the Highest Level
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
            {[
              "Full deployment at Whirlpool Rio Claro plant across multiple production lines",
              "System survived rigorous WCM audit with live production data",
              "Professor Hajime Yamashina personally validated the FPY tracking system",
              "Gold Medal recognition — the highest WCM category achievable",
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-foreground leading-relaxed">{text}</p>
              </div>
            ))}

            {/* Gold medal highlight */}
            <div className="glass rounded-xl p-6 border-accent/30 mt-8">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-accent" size={28} />
                <h3 className="text-xl font-bold text-accent">WCM Gold Medal</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The highest recognition in World Class Manufacturing, awarded during the official
                audit by the methodology's creator, Professor Hajime Yamashina.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Quote block */}
      <AnimatedSection delay={0.3} className="mt-16">
        <div className="glass rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <Quote className="text-primary/40 mx-auto mb-4" size={40} />
          <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-4">
            "Our system was not just a tool — it was the evidence that digital transformation
            on the shop floor delivers measurable, auditable results."
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            — Validated during WCM Audit, Whirlpool Rio Claro, 2019
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Deployment;
