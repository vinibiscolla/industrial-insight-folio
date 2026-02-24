import AnimatedSection from "./AnimatedSection";
import { Cpu, Camera, Tablet, Bug, Database, Monitor } from "lucide-react";
import tabletsImg from "@/assets/configuracao-tablets.jpg";
import zebraImg from "@/assets/etiqueta-zebra.jpg";
import fpyImg from "@/assets/fpy-tv.jpg";
import operadorImg from "@/assets/operador-mecanismo.jpg";

const subsystems = [
  { icon: Cpu, title: "Serialization", desc: "Unique identification for every unit produced, enabling full traceability from raw material to final product." },
  { icon: Camera, title: "Cognex Camera Reading", desc: "Machine vision integration reading Data Matrix codes at line speed for automated quality verification." },
  { icon: Tablet, title: "Tablet Integration", desc: "Industrial Android tablets at every workstation for real-time operator input and defect reporting." },
  { icon: Bug, title: "Defect Tracking", desc: "Real-time defect classification system with Andon integration for immediate line-stop response." },
  { icon: Database, title: "Production Data Flow", desc: "End-to-end data pipeline from shop floor sensors to SAP and MES systems." },
  { icon: Monitor, title: "FPY Dashboards", desc: "Live First Pass Yield dashboards displayed on factory-floor TVs for instant visibility." },
];

const photos = [
  { src: tabletsImg, alt: "Tablet configuration on shop floor" },
  { src: zebraImg, alt: "Zebra printer creating Data Matrix labels" },
  { src: fpyImg, alt: "FPY dashboard displayed on factory TV" },
  { src: operadorImg, alt: "Operator workstation at mechanism line" },
];

const Engineering = () => (
  <section id="engineering" className="section-padding bg-secondary/20">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
          Engineering & Architecture
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
          Six Integrated Subsystems, One Unified Platform
        </h2>
      </AnimatedSection>

      {/* Architecture diagram */}
      <AnimatedSection className="mb-16">
        <div className="glass rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {subsystems.map((s) => (
              <div key={s.title} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="text-primary" size={24} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 font-mono">
            SAP MII / XMII → OPC UA → Shop Floor Devices → Cloud Dashboards
          </p>
        </div>
      </AnimatedSection>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {subsystems.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors group">
              <s.icon className="text-primary mb-3 group-hover:text-accent transition-colors" size={24} />
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Photos grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Engineering;
