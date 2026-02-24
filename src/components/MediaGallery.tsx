import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { X, Play, Camera, Film } from "lucide-react";

import apontamentoImg from "@/assets/apontamento-defeito.jpg";
import auditoriaImg from "@/assets/auditoria-hajime.jpg";
import tabletsImg from "@/assets/configuracao-tablets.jpg";
import zebraImg from "@/assets/etiqueta-zebra.jpg";
import heroImg from "@/assets/foto-hero.png";
import fpyTv6Img from "@/assets/fpy-tv-6.jpg";
import fpyTvImg from "@/assets/fpy-tv.jpg";
import operadorImg from "@/assets/operador-mecanismo.jpg";
import rogerioImg from "@/assets/rogerio-andon.jpg";
import nodeRedImg from "@/assets/node-red-clp.jpg";
import zebraSetupImg from "@/assets/zebra-setup.jpg";
import dataMatrixImg from "@/assets/data-matrix-labels.jpg";
import drumStorageImg from "@/assets/drum-storage.jpg";
import implementingImg from "@/assets/implementing-whirlpool.jpg";
import fpyTv1Img from "@/assets/fpy-tv-1.jpg";
import fpyTvPositivoImg from "@/assets/fpy-tv-positivo.jpg";
import mecanismoFpyImg from "@/assets/mecanismo-fpy.jpg";
import productionBoardImg from "@/assets/production-board.jpg";
import plcTagsImg from "@/assets/plc-tags.jpg";

const photos = [
  { src: implementingImg, alt: "Implementing at Whirlpool factory" },
  { src: apontamentoImg, alt: "Defect reporting system" },
  { src: auditoriaImg, alt: "WCM Audit with Professor Yamashina" },
  { src: tabletsImg, alt: "Tablet configuration on shop floor" },
  { src: zebraImg, alt: "Zebra printer Data Matrix labels" },
  { src: zebraSetupImg, alt: "Zebra printer workstation setup" },
  { src: dataMatrixImg, alt: "Data Matrix labels on production line" },
  { src: heroImg, alt: "WCM Medal ceremony" },
  { src: fpyTv6Img, alt: "FPY Dashboard on factory TV" },
  { src: fpyTvImg, alt: "FPY monitoring screen" },
  { src: fpyTv1Img, alt: "FPY Dashboard — Mechanism line 17.2%" },
  { src: fpyTvPositivoImg, alt: "FPY Dashboard — Line 8 at 95%" },
  { src: mecanismoFpyImg, alt: "FPY Dashboard — Mechanism 27.6%" },
  { src: operadorImg, alt: "Operator workstation" },
  { src: rogerioImg, alt: "Andon system testing" },
  { src: nodeRedImg, alt: "Node-RED with Rockwell PLC integration" },
  { src: drumStorageImg, alt: "Drum storage area — production floor" },
  { src: productionBoardImg, alt: "Hourly production tracking board" },
  { src: plcTagsImg, alt: "KEPServerEX OPC tags configuration" },
];

const videos = [
  { id: "H5sYem2JJMk", title: "Defect Reporting Test Synchronized with Line Stop Andon" },
  { id: "pDZ-wGfymhQ", title: "Advantech Device Wise App Feeding Rack with EWM Logistics Integration" },
  { id: "V_9KMKY4IWc", title: "ABB Robot Assembling Cabinet on the Whirlpool Drum" },
  { id: "ifdA4glhjLg", title: "Zebra Printer Printing Data Matrix Labels for Drum Application" },
  { id: "yFLejec4hIg", title: "Andon Line Stop and Defect Reporting" },
  { id: "qtsEF6dGB-w", title: "Andon and Mechanism Conveyor Belt" },
  { id: "yd8nqN1r5Ck", title: "WCM Audit Day — Our FPY System Won the Gold Medal" },
  { id: "HUgbXbU-Nyw", title: "Quality Defect Reporting on Line 8 FPY Tablet" },
  { id: "lmhlxf-7QO4", title: "Multi-Laser vs iPad Latency Test on Line 8" },
  { id: "Nixbd3LCx9c", title: "Klabin SAP MII App — HackSiemens 2nd Edition — MindSphere CloudFoundry" },
];

const MediaGallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [tab, setTab] = useState<"photos" | "videos">("photos");

  return (
    <section id="media" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Media Gallery
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            Behind the Scenes
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setTab("photos")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "photos"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <Camera size={16} /> Photos
          </button>
          <button
            onClick={() => setTab("videos")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "videos"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <Film size={16} /> Videos
          </button>
        </div>

        {/* Photos grid */}
        {tab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(p.src)}
                  className="overflow-hidden rounded-xl aspect-[4/3] w-full group"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Videos grid */}
        {tab === "videos" && (
          <>
            <div className="glass rounded-xl p-4 mb-8 text-sm text-muted-foreground italic">
              These videos were recorded for internal team communication during 2018-2019,
              not for public content creation.
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((v, i) => (
                <AnimatedSection key={v.id} delay={i * 0.05}>
                  <div className="glass rounded-xl overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-2">
                        <Play className="text-primary shrink-0 mt-0.5" size={16} />
                        <p className="text-sm font-medium">{v.title}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={lightbox}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;
