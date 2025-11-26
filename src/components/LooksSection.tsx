import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import lipsLook from "@/assets/lips-look.png";
import eyesLook from "@/assets/eyes-look.png";
import faceLook from "@/assets/face-look.png";
import trendLook from "@/assets/trend-look.png";

interface Look {
  title: string;
  description: string;
  price: string;
  image: string;
}

const looks: Look[] = [
  {
    title: "Lábios",
    description: "Dicas para lábios e produtos recomendados",
    price: "R$ 49,90",
    image: lipsLook,
  },
  {
    title: "Olhos",
    description: "Dicas para olhos e produtos recomendados",
    price: "R$ 59,90",
    image: eyesLook,
  },
  {
    title: "Rosto",
    description: "Dicas para rosto e produtos recomendados",
    price: "R$ 79,90",
    image: faceLook,
  },
  {
    title: "Tendência",
    description: "Tendências atuais e produtos",
    price: "R$ 69,90",
    image: trendLook,
  },
];

const LooksSection = () => {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  return (
    <section id="looks" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {looks.map((look) => (
            <div
              key={look.title}
              className="cursor-pointer group"
              onClick={() => setSelectedLook(look)}
            >
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-52 object-cover rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedLook} onOpenChange={() => setSelectedLook(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedLook?.title}</DialogTitle>
            <DialogDescription>{selectedLook?.description}</DialogDescription>
          </DialogHeader>
          {selectedLook && (
            <div className="space-y-4">
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-xl font-bold text-primary">{selectedLook.price}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LooksSection;
