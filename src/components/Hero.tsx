import heroBanner from "@/assets/hero-banner.png";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={heroBanner}
        alt="Banner de cosméticos e maquiagem"
        className="w-full h-[60vh] object-cover"
      />
    </section>
  );
};

export default Hero;
