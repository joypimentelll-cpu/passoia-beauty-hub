import { CreditCard, DollarSign, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Atendimentos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">
                Fale Conosco
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Perguntas Frequentes
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Meus Pedidos
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Nossas Lojas
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">FORMAS DE PAGAMENTO</h4>
            <div className="flex gap-3 flex-wrap">
              <div className="w-12 h-12 bg-background rounded flex items-center justify-center border border-border">
                <CreditCard className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="w-12 h-12 bg-background rounded flex items-center justify-center border border-border">
                <CreditCard className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="w-12 h-12 bg-background rounded flex items-center justify-center border border-border">
                <DollarSign className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">SIGA-NOS NAS REDES SOCIAIS</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
