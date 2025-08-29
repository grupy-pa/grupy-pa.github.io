import { Button } from "@/components/ui/button";
import { Github, Instagram, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card/70 backdrop-blur-md py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + descrição */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <img width={40} src="https://pa.python.org.br/python.png" />
              <h3 className="font-bold text-lg tracking-tight">Python Pará</h3>
            </a>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Comunidade de usuários e desenvolvedores que utilizam Python no Pará 🏳️‍🌈
            </p>
          </div>

          {/* Eventos */}
          <div>
            <h4 className="font-semibold mb-6 font-heading text-lg">Eventos</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#eventos" className="hover:text-foreground transition-colors">
                  Dojos
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-foreground transition-colors">
                  Meetups
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-foreground transition-colors">
                  Live Codings
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-foreground transition-colors">
                  Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-6 font-heading text-lg">Recursos</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#recursos" className="hover:text-foreground transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-foreground transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-foreground transition-colors">
                  Mentoria
                </a>
              </li>
              <li>
                <a href="#comunidade" className="hover:text-foreground transition-colors">
                  Fórum
                </a>
              </li>
            </ul>
          </div>

          {/* Conecte-se */}
          <div>
            <h4 className="font-semibold mb-6 font-heading text-lg">Conecte-se</h4>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
                asChild
              >
                <a href="https://github.com/pythonpara" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
                asChild
              >
                <a href="https://t.me/pythonpara" target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4" /> {/* Telegram */}
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
                asChild
              >
                <a href="https://wa.me/5591000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> {/* WhatsApp */}
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
                asChild
              >
                <a href="https://instagram.com/pythonpara" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Python Pará. Democratizando tecnologia no Pará. 🐍💚✊</p>
        </div>
      </div>
    </footer>
  );
}
