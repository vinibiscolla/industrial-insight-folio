import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Architecture from "@/components/Architecture";
import Engineering from "@/components/Engineering";
import Deployment from "@/components/Deployment";
import Impact from "@/components/Impact";
import DesignPrinciples from "@/components/DesignPrinciples";
import FactoryToProduct from "@/components/FactoryToProduct";
import Evolution from "@/components/Evolution";
import MediaGallery from "@/components/MediaGallery";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Problem />
    <Architecture />
    <Engineering />
    <Deployment />
    <Impact />
    <DesignPrinciples />
    <FactoryToProduct />
    <Evolution />
    <MediaGallery />
    <Footer />
  </div>
);

export default Index;
