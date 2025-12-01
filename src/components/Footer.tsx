import instagramIcon from "@/assets/instagram.png";
import facebookIcon from "@/assets/facebook.png";
import youtubeIcon from "@/assets/youtube.png";
import twitterIcon from "@/assets/twitter.png";
import mastercardIcon from "@/assets/mastercard.png";
import visaIcon from "@/assets/visa.png";
import pixIcon from "@/assets/pix.png";
import boletoIcon from "@/assets/boleto.png";

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
            <div className="flex gap-3 flex-wrap items-center">
              <img src={mastercardIcon} alt="Mastercard" className="h-8" />
              <img src={visaIcon} alt="Visa" className="h-8" />
              <img src={pixIcon} alt="Pix" className="h-8" />
              <img src={boletoIcon} alt="Boleto" className="h-8" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">SIGA-NOS NAS REDES SOCIAIS</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="YouTube">
                <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;