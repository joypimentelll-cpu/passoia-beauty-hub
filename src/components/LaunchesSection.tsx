import { Star } from "lucide-react";
import batomAberto from "@/assets/batom-aberto.png";
import kitBatomLiquido from "@/assets/kit-batom-liquido.png";
import kitBatomBastao from "@/assets/kit-batom-bastao.png";
import bocaCinza from "@/assets/boca-cinza.png";

const LaunchesSection = () => {
  return (
    <section id="lancamentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          APROVEITE OS LANÇAMENTOS
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Primeira coluna - 3 imagens empilhadas */}
          <div className="flex flex-col gap-3">
            <img
              src={kitBatomBastao}
              alt="Kit 3 Batom em Bastão"
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

          {/* Coluna central - Imagem modelo lábios cinza */}
          <div className="flex items-center justify-center">
            <img
              src={bocaCinza}
              alt="Matte Premium"
              className="w-full h-full rounded-lg object-cover"
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
              <div className="w-10 h-10 rounded-full bg-[#9b8fb8] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
              <div className="w-10 h-10 rounded-full bg-[#d64545] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
              <div className="w-10 h-10 rounded-full bg-[#6b3f3f] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
              <div className="w-10 h-10 rounded-full bg-[#d88a72] border-2 border-border cursor-pointer hover:border-primary transition-colors" />
            </div>

            <div>
              <h4 className="font-bold mb-2">Descrição</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o
                máximo de cor na primeira aplicação com um deslize suave e macio. Tem
                acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a
                proteger os lábios contra ressecamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
