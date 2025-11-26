import newsBanner from "@/assets/news-banner.jpg";

const NewsSection = () => {
  return (
    <section id="novidades" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">NOVIDADES PARA VOCÊ</h2>
        <img
          src={newsBanner}
          alt="Novidades em cosméticos"
          className="w-full h-[40vh] object-cover rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default NewsSection;
