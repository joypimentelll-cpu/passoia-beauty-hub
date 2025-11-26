import { useState } from "react";
import { Star } from "lucide-react";
import batomAberto from "@/assets/batom-aberto.png";
import kitBatomLiquido from "@/assets/kit-batom-liquido.png";
import kitBatomBastao from "@/assets/kit-batom-bastao.png";

const LaunchesSection = () => {
  const [mainImage, setMainImage] = useState(batomAberto);

  const productImages = [
    { name: "Batom Aberto", image: batomAberto },
    { name: "Kit Líquido", image: kitBatomLiquido },
    { name: "Kit Bastão", image: kitBatomBastao },
  ];

  return (
    <section id="lancamentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          APROVEITE OS LANÇAMENTOS
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <div className="space-y-4">
            <img
              src={mainImage}
              alt="Produto principal"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-3 gap-3">
              {productImages.map((product) => (
                <button
                  key={product.name}
                  onClick={() => setMainImage(product.image)}
                  className="rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors bg-muted p-2"
                  aria-label={`Ver ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Matte Premium</h3>
              <p className="text-muted-foreground text-sm">Cores disponíveis</p>
            </div>

            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-[#9b8fb8] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
              <div className="w-12 h-12 rounded-full bg-[#d64545] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
              <div className="w-12 h-12 rounded-full bg-[#6b3f3f] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
              <div className="w-12 h-12 rounded-full bg-[#d88a72] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
            </div>

            <div>
              <h4 className="font-bold mb-2">Descrição</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o
                máximo de cor na primeira aplicação com um deslize suave e macio. Tem
                acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a
                proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios,
                textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
