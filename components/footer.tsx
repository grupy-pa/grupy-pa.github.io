import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-muted/50 to-muted/30 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="footer-blue-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#306998" />
                    <stop offset="100%" stopColor="#4B8BBE" />
                  </linearGradient>
                  <linearGradient
                    id="footer-yellow-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFD43B" />
                    <stop offset="100%" stopColor="#FFE873" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,5 C65,5 75,15 75,30 L75,45 L55,45 L55,40 L70,40 L70,30 C70,20 60,10 50,10 L35,10 C30,10 25,15 25,20 L25,35 L30,35 L30,50 L25,50 C15,50 5,40 5,30 L5,20 C5,10 15,5 25,5 Z"
                  fill="url(#footer-blue-gradient)"
                />
                <path
                  d="M50,95 C35,95 25,85 25,70 L25,55 L45,55 L45,60 L30,60 L30,70 C30,80 40,90 50,90 L65,90 C70,90 75,85 75,80 L75,65 L70,65 L70,50 L75,50 C85,50 95,60 95,70 L95,80 C95,90 85,95 75,95 Z"
                  fill="url(#footer-yellow-gradient)"
                />
                <circle cx="40" cy="25" r="3" fill="white" />
                <circle cx="60" cy="75" r="3" fill="white" />
              </svg>
              <h3 className="font-bold text-lg font-heading">Python Pará</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Uma comunidade feita por pessoas reais, para pessoas reais. Aqui
              a gente cresce junto, aprende junto e se diverte junto! 🐍💚
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 font-heading text-lg">
              Eventos
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/dojos"
                  className="hover:text-foreground transition-colors"
                >
                  Dojos
                </Link>
              </li>
              <li>
                <Link
                  href="/meetups"
                  className="hover:text-foreground transition-colors"
                >
                  Meetups
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Live Codings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 font-heading text-lg">
              Recursos
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Mentoria
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Fórum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 font-heading text-lg">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform bg-transparent"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2025 Python Pará. Democratizando tecnologia no Pará. 🐍💚✊
          </p>
        </div>
      </div>
    </footer>
  );
}