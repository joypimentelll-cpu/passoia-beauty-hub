import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LooksSection from "@/components/LooksSection";
import LaunchesSection from "@/components/LaunchesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LooksSection />
        <LaunchesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
