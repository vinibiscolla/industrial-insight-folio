import AnimatedSection from "./AnimatedSection";
import { Server, Cpu, Monitor, ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

import hardwareArchImg from "@/assets/hardware-architecture.png";
import softwareArchImg from "@/assets/software-architecture.png";
import trecho1Img from "@/assets/trecho-1.png";
import trecho2Img from "@/assets/trecho-2.png";
import trecho5Img from "@/assets/trecho-5.png";

const layerIcons = [Cpu, Server, Monitor];

const Architecture = () => {
  const { lang } = useLanguage();
  const layers = [
    { ...t.architecture.factory, icon: Cpu },
    { ...t.architecture.middleware, icon: Server },
    { ...t.architecture.application, icon: Monitor },
  ];

  return (
    <section id="architecture" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.architecture.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
            {t.architecture.title[lang]}
          </h2>
        </AnimatedSection>

        {/* Architecture diagrams */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <AnimatedSection>
            <div className="glass rounded-xl p-4 h-full">
              <img src={softwareArchImg} alt="Software architecture — Cloud, CPD Server, Shop Floor" className="w-full rounded-lg bg-white p-2" />
              <p className="text-xs text-muted-foreground mt-3 text-center font-mono">Software Architecture — SAP MII / OPC / Shop Floor</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl p-4 h-full">
              <img src={hardwareArchImg} alt="Hardware architecture — Full network topology" className="w-full rounded-lg bg-white p-2" />
              <p className="text-xs text-muted-foreground mt-3 text-center font-mono">Hardware Architecture — Full Network Topology</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Three layers */}
        <div className="space-y-6 mb-16">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-bold text-lg">{layer.title[lang]}</h3>
                  </div>
                  <ul className="space-y-2 ml-13">
                    {layer.items[lang].map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {i < 2 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="text-primary/40" size={20} />
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* Data flow */}
        <AnimatedSection>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              {t.architecture.dataflow[lang]}
            </p>
          </div>
        </AnimatedSection>

        {/* Production flow diagrams */}
        <AnimatedSection className="mt-16">
          <h3 className="font-bold text-xl mb-6">Production Line Layout</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: trecho1Img, label: "Trecho 1 — Main Assembly Line" },
              { img: trecho2Img, label: "Trecho 2 — Cabinet & Robot Assembly" },
              { img: trecho5Img, label: "Trecho 5 — Post-Audit Line" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-3">
                <img src={item.img} alt={item.label} className="w-full rounded-lg bg-white p-1" />
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Architecture;
