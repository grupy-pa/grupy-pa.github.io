import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Ban,
  Search,
  Code2,
  Handshake,
  Target,
  Scale,
  XCircle,
  Megaphone,
} from "lucide-react";

export default function Diretrizes() {
  const rules = [
    { icon: MessageCircle, text: "💬 Respeito é a regra principal" },
    { icon: Code2, text: "🐍 Foco: Python, programação, comunidade e compartilhar conhecimento" },
    { icon: Ban, text: "🚫 Sem spam, correntes ou propaganda" },
    { icon: Search, text: "🔍 Pesquise antes de perguntar, busque sempre autonomia" },
    { icon: Code2, text: "🧑‍💻 Evite prints, poste código formatado" },
    { icon: Handshake, text: "🙌 Ajude com paciência — todos já fomos iniciantes" },
    { icon: Target, text: "🎯 Off-topic? Só com bom senso" },
    { icon: Scale, text: "⚖️ Proibido conteúdo ilegal ou ofensivo" },
    { icon: XCircle, text: "❌ Pornografia, violência ou discurso de ódio = ban imediato" },
    { icon: Megaphone, text: "📣 Dúvidas ou denúncias → fale com os admins" },
  ];

  return (
    <section
      id="diretrizes"
      className="py-24 px-4 bg-gradient-to-br from-muted/20 to-muted/5"
    >
      <div className="container mx-auto max-w-4xl">
        <Card className="rounded-2xl border-2 shadow-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-2">
              Diretrizes da Comunidade Python Pará
            </CardTitle>
            <p className="text-center max-w-2xl mx-auto">
              Estas diretrizes se aplicam a todos os espaços da comunidade —
              eventos presenciais, encontros online, grupos de mensagem e
              interações no site. Nosso objetivo é garantir um ambiente
              acolhedor, seguro e divertido para todas as pessoas.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mt-6">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <rule.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{rule.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
