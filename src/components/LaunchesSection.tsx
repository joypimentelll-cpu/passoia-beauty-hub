import { useState } from "react";
import { Star } from "lucide-react";
import batomLiquido from "@/assets/batom-liquido.png";
import kitBatomLiquido from "@/assets/kit-batom-liquido.png";
import batomAberto from "@/assets/batom-aberto.png";
import bocaCinza from "@/assets/boca-cinza.png";
import bocaNude from "@/assets/modelo-boca-nude.png";
import bocaMarrom from "@/assets/modelo-boca-marrom.png";
import bocaVermelho from "@/assets/modelo-boca-vermelho.png";

type ColorOption = {
  id: string;
  color: string;
  mouthImage: string;
};

const colorOptions: ColorOption[] = [
  { id: "cinza", color: "#9b8fb8", mouthImage: bocaCinza },
  { id: "vermelho", color: "#d64545", mouthImage: bocaVermelho },
  { id: "marrom", color: "#6b3f3f", mouthImage: bocaMarrom },
  { id: "nude", color: "#d88a72", mouthImage: bocaNude },
];

const LaunchesSection = () => {
  const [selectedColor, setSelectedColor] = useState<string>("cinza");

  const currentMouthImage = colorOptions.find(c => c.id === selectedColor)?.mouthImage || bocaCinza;

  return (
    <section id="lancamentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          APROVEITE OS LANÇAMENTOS
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Primeira coluna - 3 imagens empilhadas (some em mobile) */}
          <div className="hidden md:flex flex-col gap-3">
            <img
              src={batomLiquido}
              alt="Batom Líquido"
              className="w-full rounded-lg object-cover flex-1"
            />
            <img
              src={kitBatomLiquido}
              alt="Kit Batom Líquido Trio"
              className="w-full rounded-lg object-cover flex-1"
            />
            <img
              src={batomAberto}
              alt="Batom Aberto"
              className="w-full rounded-lg object-cover flex-1"
            />
          </div>

          {/* Coluna central - Imagem modelo lábios */}
          <div className="flex items-center justify-center">
            <img
              src={currentMouthImage}
              alt="Matte Premium"
              className="w-full h-full rounded-lg object-cover transition-all duration-300"
            />
          </div>

          {/* Terceira coluna - Detalhes do produto */}
          <div className="flex flex-col justify-center gap-6">
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
              {colorOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedColor(option.id)}
                  className={`w-10 h-10 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                    selectedColor === option.id
                      ? "border-primary ring-2 ring-primary/30 scale-110"
                      : "border-border hover:border-primary"
                  }`}
                  style={{ backgroundColor: option.color }}
                  aria-label={`Selecionar cor ${option.id}`}
                />
              ))}
            </div>

            <div>
              <h4 className="font-bold mb-2">Descrição</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
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
