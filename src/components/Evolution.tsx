import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

import hacksiemensImg from "@/assets/hacksiemens.jpg";
import hacksiemensWinnersImg from "@/assets/hacksiemens-winners.png";
import rakkunPresentation1 from "@/assets/rakkun-presentation-1.png";
import rakkunPresentation2 from "@/assets/rakkun-presentation-2.png";
import mastertechImg from "@/assets/mastertech-presentation.png";
import rakkunIotDemo from "@/assets/rakkun-iot-demo.png";
import hacksiemensSanmartin from "@/assets/hacksiemens-sanmartin.png";
import proindustriaBooth from "@/assets/proindustria-booth.png";
import proindustriaTeam from "@/assets/proindustria-team.png";
import proindustriaDashboard from "@/assets/proindustria-dashboard.png";

const carouselImages = [
  { src: hacksiemensWinnersImg, alt: "HackSiemens MindSphere HackaDay — Winners" },
  { src: hacksiemensSanmartin, alt: "HackSiemens — SanMartin Architecture Presentation" },
  { src: hacksiemensImg, alt: "Siemens HackDay — MindSphere CloudFoundry" },
  { src: rakkunPresentation1, alt: "Rakkun.io — Racoon Presentation" },
  { src: rakkunPresentation2, alt: "Rakkun.io — Monitoring Platform Pitch" },
  { src: mastertechImg, alt: "Mastertech — Rakkun IoT Presentation" },
  { src: rakkunIotDemo, alt: "Rakkun IoT — Live GPS & Sensor Demo" },
  { src: proindustriaBooth, alt: "Pro Industria 2019 — Rakkun.io Booth" },
  { src: proindustriaTeam, alt: "Pro Industria 2019 — Henrique & Team" },
  { src: proindustriaDashboard, alt: "Pro Industria 2019 — Melitta Dashboard Demo" },
];

const Evolution = () => {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? carouselImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1));

  const timeline = t.evolution.timeline[lang];
  const links = t.evolution.links;

  return (
    <section id="evolution" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {t.evolution.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 max-w-3xl">
            {t.evolution.title[lang]}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            {t.evolution.intro[lang]}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <AnimatedSection>
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary" />
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-primary" />
                    <span className="font-mono text-primary text-sm font-bold">{item.year}</span>
                  </div>
                  <h3 className="font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 space-y-3">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {t.evolution.linksLabel[lang]}
              </p>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={14} /> {link.label[lang]}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Carousel */}
          <AnimatedSection delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={carouselImages[current].src}
                alt={carouselImages[current].alt}
                className="w-full aspect-[4/3] object-cover shadow-2xl"
              />
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center font-mono">
              {carouselImages[current].alt}
            </p>
            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
