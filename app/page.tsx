import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Code,
  Coffee,
  ArrowRight,
  Github,
  Twitter,
  Mail,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                className="drop-shadow-sm"
              >
                <defs>
                  <linearGradient
                    id="blue-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#306998" />
                    <stop offset="100%" stopColor="#4B8BBE" />
                  </linearGradient>
                  <linearGradient
                    id="yellow-gradient"
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
                  fill="url(#blue-gradient)"
                />
                <path
                  d="M50,95 C35,95 25,85 25,70 L25,55 L45,55 L45,60 L30,60 L30,70 C30,80 40,90 50,90 L65,90 C70,90 75,85 75,80 L75,65 L70,65 L70,50 L75,50 C85,50 95,60 95,70 L95,80 C95,90 85,95 75,95 Z"
                  fill="url(#yellow-gradient)"
                />
                <circle cx="40" cy="25" r="3" fill="white" />
                <circle cx="60" cy="75" r="3" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-heading">
                Python Pará
              </h1>
              <p className="text-xs text-muted-foreground">
                Comunidade de usuários e desenvolvedores que utilizam Python no
                Pará 🏳️‍🌈
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#eventos"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Eventos
            </a>
            <a
              href="#recursos"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Recursos
            </a>
            <a
              href="#comunidade"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Comunidade
            </a>
            <Button className="rounded-full px-6">Participar</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto text-center max-w-5xl relative">
          <div className="flex justify-center mb-8">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              className="drop-shadow-lg"
            >
              <defs>
                <linearGradient
                  id="hero-blue-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#306998" />
                  <stop offset="100%" stopColor="#4B8BBE" />
                </linearGradient>
                <linearGradient
                  id="hero-yellow-gradient"
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
                fill="url(#hero-blue-gradient)"
              />
              <path
                d="M50,95 C35,95 25,85 25,70 L25,55 L45,55 L45,60 L30,60 L30,70 C30,80 40,90 50,90 L65,90 C70,90 75,85 75,80 L75,65 L70,65 L70,50 L75,50 C85,50 95,60 95,70 L95,80 C95,90 85,95 75,95 Z"
                fill="url(#hero-yellow-gradient)"
              />
              <circle cx="40" cy="25" r="3" fill="white" />
              <circle cx="60" cy="75" r="3" fill="white" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-heading">
            Python Pará
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            Comunidade de usuários e desenvolvedores que utilizam Python no Pará
            🏳️‍🌈
            <span className="text-lg">
              Juntos, estamos construindo um{" "}
              <strong>ecossistema tech mais diverso e inclusivo</strong> no
              Pará! ✊
            </span>
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Users className="mr-2 w-5 h-5" />
              Começar minha jornada tech! 🎯
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-background/80 backdrop-blur-sm"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Conhecer nossa missão
            </Button>
          </div> */}

          <div className="flex flex-wrap justify-center gap-3">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm rounded-full"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Todo o Pará 🌴
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm rounded-full"
            >
              <Star className="w-4 h-4 mr-1" />
              100% gratuito e inclusivo ❤️
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm rounded-full"
            >
              <Clock className="w-4 h-4 mr-1" />
              Encontros periódicos ⏰
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section IS HIDDEN */}
      <section
        className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"
        style={{ display: "none" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Transformando vidas através da tecnologia! 💪
            </h2>
            <p className="text-muted-foreground">
              Nosso impacto na comunidade paraense
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-primary mb-2 font-heading">
                60%
              </div>
              <div className="text-muted-foreground text-lg">
                Mulheres e pessoas não-binárias
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Quebrando barreiras na tech!
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-primary mb-2 font-heading">
                85+
              </div>
              <div className="text-muted-foreground text-lg">
                Pessoas conseguiram primeiro emprego tech
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Mudando vidas e famílias
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-primary mb-2 font-heading">
                12
              </div>
              <div className="text-muted-foreground text-lg">
                Cidades do interior alcançadas
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Levando tech para todo o Pará
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section id="eventos" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Próximo Eventos{" "}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos encontros são pensados para acolher, incluir e empoderar.
              Venha como você é - aqui você tem espaço!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-2">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Inclusão
                  </Badge>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl font-heading">
                  I Meetup PyData Pará
                </CardTitle>
                <CardDescription className="text-base">
                  Sábado, 06/09/2025 9h às 13h CESUPA - Campus José Malcher
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  O PyData é uma comunidade de pessoas desenvolvedoras e
                  usuárias de ferramentas open source voltado à ciência de
                  dados, principalmente usando a linguagem de programação
                  Python. É um programa apoiado pela NumFocus e um evento
                  gratuito idealizado pela comunidade e para a comunidade.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Users className="w-4 h-4" />
                  <span>Ambiente 100% acolhedor e seguro</span>
                </div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Quero participar! 🙋‍♀️
                </a>
                {/* <Button onClick={function (){
                  window.open('https://www.meetup.com/pydata-para/events/310374256/', '_blank')
                }} className="w-full rounded-full">Quero participar! 🙋‍♀️</Button> */}
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Recursos IS HIDDEN */}
      <section
        id="recursos"
        className="py-24 px-4 bg-gradient-to-br from-muted/30 to-muted/10"
        style={{ display: "none" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Recursos para sua transformação 🎓
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Criamos esses recursos pensando em quem está começando e quer
              crescer na tech. Tudo gratuito e acessível!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">
                  Trilha de Aprendizado 🛤️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Currículo estruturado do básico ao avançado, com foco no
                  mercado de trabalho paraense.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-heading">
                  Mentoria Inclusiva 🤝
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Programa de mentoria com foco em grupos sub-representados na
                  tecnologia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">
                  Banco de Oportunidades 💼
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Vagas exclusivas de empresas parceiras comprometidas com
                  diversidade e inclusão.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Github className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-heading">
                  Projetos Sociais 🌍
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolva projetos que impactam positivamente nossa
                  comunidade paraense.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section IS HIDDEN */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{ display: "none" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"></div>
        <div className="container mx-auto text-center max-w-4xl relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading">
            Sua jornada tech começa aqui! 🌟
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Não importa sua idade, formação ou experiência - se você tem vontade
            de aprender e crescer, tem espaço aqui! Estamos construindo um{" "}
            <strong>Pará mais tecnológico, diverso e próspero</strong> para
            todas as pessoas.
            <br />
            <span className="text-primary font-semibold">
              Juntos, vamos democratizar a tecnologia na nossa região! 💪
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Users className="mr-2 w-5 h-5" />
              Começar minha transformação 🚀
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 rounded-full bg-background/80 backdrop-blur-sm"
            >
              <Github className="mr-2 w-5 h-5" />
              Conhecer nossos projetos sociais 🌍
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Dojos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Meetups
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Live Codings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Workshops
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 font-heading text-lg">
                Recursos
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Mentoria
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Fórum
                  </a>
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
    </div>
  );
}
