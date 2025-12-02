import { useState } from "react";
import batomLiquido from "@/assets/batom-liquido.png";
import kitBatomLiquido from "@/assets/kit-batom-liquido.png";
import batomAberto from "@/assets/batom-aberto.png";
import bocaCinza from "@/assets/boca-cinza.png";

type ProductImage = {
  name: string;
  image: string;
};

const productImages: ProductImage[] = [
  { name: "Batom Líquido", image: batomLiquido },
  { name: "Kit Batom Líquido", image: kitBatomLiquido },
  { name: "Batom Aberto", image: batomAberto },
];

const LaunchesSection = () => {
  const [mainImage, setMainImage] = useState<string>(bocaCinza);

  return (
    <section id="lancamentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Imagem Boca Cinza Centralizada */}
          <div className="flex justify-center items-center">
            <img
              src={mainImage}
              alt="Produto principal"
              className="max-w-[260px] w-full object-contain rounded-lg mx-auto"
            />
          </div>

          {/* Miniaturas */}
          <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
