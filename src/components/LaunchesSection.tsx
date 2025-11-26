import { useState } from "react";
import { Star } from "lucide-react";
import productMain from "@/assets/product-main.jpg";

const LaunchesSection = () => {
  const [mainImage, setMainImage] = useState(productMain);

  const colorVariants = [
    { name: "Cinza", image: productMain },
    { name: "Vermelho", image: productMain },
    { name: "Marrom", image: productMain },
    { name: "Nude", image: productMain },
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

            <div className="flex gap-2 flex-wrap">
              {colorVariants.map((variant) => (
                <button
                  key={variant.name}
                  onClick={() => setMainImage(variant.image)}
                  className="w-14 h-14 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                  aria-label={`Selecionar cor ${variant.name}`}
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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
