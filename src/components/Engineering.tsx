import AnimatedSection from "./AnimatedSection";
import { Barcode, ScanLine, Camera, Printer, Bug, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

import tabletsImg from "@/assets/configuracao-tablets.jpg";
import zebraImg from "@/assets/etiqueta-zebra.jpg";
import fpyImg from "@/assets/fpy-tv.jpg";
import operadorImg from "@/assets/operador-mecanismo.jpg";
import zebraSetup2Img from "@/assets/zebra-setup-2.jpg";
import fpyTv2Img from "@/assets/fpy-tv-2.jpg";
import apontamentoFpyImg from "@/assets/apontamento-fpy-tv.jpg";
import dataMatrixImg from "@/assets/data-matrix-labels.jpg";

const Engineering = () => {
  const { lang } = useLanguage();

  const subsystems = [
    { icon: Barcode, ...t.engineering.serialization },
    { icon: ScanLine, ...t.engineering.traceability },
    { icon: Camera, ...t.engineering.cognex },
    { icon: Printer, ...t.engineering.zebra },
    { icon: Bug, ...t.engineering.defect },
    { icon: Monitor, ...t.engineering.fpy },
  ];

  const photos = [
    { src: dataMatrixImg, alt: "Data Matrix labels for unit serialization" },
    { src: zebraImg, alt: "Zebra printer creating Data Matrix labels" },
    { src: zebraSetup2Img, alt: "Zebra printer workstation with SAP integration" },
    { src: tabletsImg, alt: "Tablet configuration on shop floor" },
    { src: fpyImg, alt: "FPY dashboard displayed on factory TV" },
    { src: fpyTv2Img, alt: "FPY Mechanism dashboard — 20.5%" },
    { src: apontamentoFpyImg, alt: "FPY TV display on production line with washing machines" },
    { src: operadorImg, alt: "Operator workstation at mechanism line" },
  ];

  return (
    <section id="engineering" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.engineering.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 max-w-3xl">
            {t.engineering.title[lang]}
          </h2>
        </AnimatedSection>

        {/* Subsystem detail cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {subsystems.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-colors group">
                <s.icon className="text-primary mb-3 group-hover:text-accent transition-colors" size={24} />
                <h3 className="font-bold text-lg mb-2">{s.title[lang]}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc[lang]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
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
};

export default Engineering;
